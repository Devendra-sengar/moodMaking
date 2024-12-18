const {User} = require("../models/user.js")
const bcryptjs = require('bcryptjs');
const { genereteVarificationCode } =require("../config/genereteVarificationCode.js");
const { genereteTokenAndCookies } =require("../config/generateTokenAndCookies.js")
const crypto =require('crypto');
const { resetPasswordmail, sendmail, sendwelcomeemail } =require ("../mailtrap/mailtrap.js");
const { generateRegistrationOptions, verifyRegistrationResponse } = require('@simplewebauthn/server');
exports.signup = async (req, res, next) => {
    const { email, password, name  } = req.body;
    const photo =req.file;
    try {
        if (!email || !password || !name ) {
            return res.status(400).json({ 
                success: false, 
                message: "All fields are required" 
            });
        }

        const alreadyExists = await User.findOne({ email });
        if (alreadyExists) {
            return res.status(409).json({ 
                success: false, 
                message: "Email already exists" 
            });
        }

        // 3. Hash the user's password before saving
        const hashPassword = await bcryptjs.hash(password, 10);

        // 4. Generate a verification token (for account verification)
        const varificationToken = genereteVarificationCode();

        // 5. Create a new user with hashed password and verification token
        const user = new User({
            email,
            password: hashPassword,
            name,
           photo:photo?.path,
            varificationToken,
            varificationTokenExpired:Date.now() + 24 * 60 * 60 * 1000 // token expires in 24 hours
        });

      
        // 7. Generate JWT token and set it as a cookie
        genereteTokenAndCookies(res, user._id);
        await user.save();

        sendmail(user.email,varificationToken)

        // 8. Respond with success
        return res.status(200).json({
            success: true,
            message: "User registered successfully",
            user
        });
    }  catch (e) {
        return res.status(500).json({
            success: false,
            message: "Server Error: Unable to sign up"
        });
    }
};




exports.varifyemail=async (req, res, next)=>{
    const {otp}=req.body;
    try{
        const user=await User.findOne(
            {varificationToken:otp,varificationTokenExpired:{$gt:Date.now()}}
        );
        if(!user){
            return res.status(404).json({
                success: false,
                message: "Invalid verification code"
            });

        }
        // varificationToken:undefined,varificationTokenExpired:undefined
        user.isvarified=true;
        user.varificationToken=undefined;
        user.varificationTokenExpired=undefined;
        await user.save();

        await sendwelcomeemail(user.email,user.name);
        return res.status(200).json({
            success: true,
            message: "Email verification successful"
        });
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: "Email verification err"
        });
}
}





exports.login = async (req, res, next) => {
    const { email, password } = req.body;
    const photo = req.file;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        if (!user.isvarified) {
            return res.status(401).json({
                success: false,
                message: "Email not verified"
            });
        }

        const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid password"
            });
        }

        // Check if photo is available before assigning
        if (photo) {
            user.photo = photo?.path;
        }

        const token = genereteTokenAndCookies(res, user._id);
        await user.save();
        return res.status(200).json({
            success: true,
            message: "User logged in successfully",
            user,
            token
        });

    } catch (e) {
        return res.status(500).json({
            success: false,
            message: "Server Error: Unable to log in",
        });
    }
};





exports.logout =(req,res,next)=>{
    res.clearCookie("token");
    try{
        res.status(200).json({
            success:true,
            message:"User logout successfully"
        })
    }
    catch (e) {
               return res.status(500).json({
            success: false,
            message: "Server Error: Unable to logout "
        });
    }
};







exports.resetPassword =async (req,res,next)=>{
     const {email} =req.body;
     try{
        const user = await User.findOne({email});
        const token = crypto.randomBytes(20).toString("hex");

        user.resetPasswordToken=token;
        user.resetPasswordExpired=Date.now() + 3600000; 
       
        await user.save();

        resetPasswordmail(user.email,` http://localhost:3000/forgot-password/${token}`)
        if(!user){
            res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
       
        return res.status(200).json({
            success: true,
            message: "email send successful"
        });
     }
     catch (e) {

}
}













exports.changePassword = async (req, res, next) => {
    const { token } = req.params;
    const { password, password2 } = req.body;
    try {
        const user = await User.findOne({
            resetPasswordToken: token,
            resetPasswordExpired: { $gt: Date.now() }
        });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "Invalid or expired reset password token"
            });
        }

        if (password !== password2) {
            return res.status(400).json({
                success: false,
                message: "Passwords do not match"
            });
        }

        // Hash the password
        const hashPassword = await bcryptjs.hash(password, 10);
        user.password = hashPassword;

        user.resetPasswordToken = undefined;
        user.resetPasswordExpired = undefined;

        await user.save();

        return res.status(200).json({
            success: true,
            message: "Password changed successfully"
        });
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: "Server error: Unable to change password"
        });
    }
};








exports.cheakauth = async (req, res) => {
    try {
        const user = await User.findById(req.userid);
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
        res.status(200).json({ success: true, message: 'User found', user });
    } catch (e) {
        return res.status(500).json({ success: false, message: 'Server error: Unable to check authentication' });
    }
};




exports.signupChallenge = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found',
            });
        }

        const registrationOptions = await generateRegistrationOptions({
            rpName: 'College Portal',
            rpId: 'your-rp-id', // Replace with your actual RP ID
            userName: user.email, // Use email or other identifier
            userId: user._id.toString(),
            attestationType: 'direct',
        });

        user.fingerprintChallenge = registrationOptions.challenge; // Save challenge to user
        await user.save();

        res.json({
            success: true,
            options: registrationOptions,
        });
    } catch (error) {
        console.error('Error generating registration options:', error);
        res.status(500).json({
            success: false,
            message: 'Error generating registration options',
        });
    }
};

exports.verifySignupResponse = async (req, res) => {
    const { id, response } = req.params;
    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found',
            });
        }

        const verification = await verifyRegistrationResponse({
            response,
            expectedChallenge: user.fingerprintChallenge,
            expectedOrigin: 'your-origin-url', // Replace with your actual origin URL
            expectedRPID: 'your-rp-id', // Replace with your actual RP ID
        });

        if (!verification.verified) {
            return res.status(401).json({
                success: false,
                message: 'Authentication failed',
            });
        }

        user.fingerprintChallenge = undefined; // Clear challenge after verification
        await user.save();

        return res.status(200).json({
            success: true,
            message: 'Fingerprint registration successful',
        });
    } catch (error) {
        console.error('Error verifying registration response:', error);
        return res.status(500).json({
            success: false,
            message: 'Error verifying registration response',
        });
    }
};

// Include similar logic for login if necessary
