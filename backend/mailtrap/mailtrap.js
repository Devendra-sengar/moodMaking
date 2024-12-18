const nodemailer =require( 'nodemailer')
const { PASSWORD_RESET_REQUEST_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE } = require('./mailtemplate.js');

exports.sendmail =async (email,otp)=>{
    try{
        console.log(otp);
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'harshkhandelwal597@gmail.com',
                pass: 'dwepporbvkwdeany'
            }
        });
        
        const mailOptions = {
            from: 'Harsh Khandelwal <harshkhandelwal597@gmail.com>',
            to: email,
            subject: 'Verify your email',
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", otp),
            category : "Email verification"
        }  

        await transporter.sendMail(mailOptions);
    
}
    catch(error){
    }

}

exports.sendwelcomeemail=async (mail,names)=>{
    try{
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'harshkhandelwal597@gmail.com',
                pass: 'dwepporbvkwdeany'
            }
        });
        
        const mailOptions = {
            from: 'Harsh Khandelwal <harshkhandelwal597@gmail.com>',
            to: mail,
            subject: 'Welcome to our website!',
            html: `Hello ${names}, <br> Welcome to our website! Your account has been created successfully. If you have any questions or need further assistance, please don't hesitate to contact us. <br> Thank you!`,
            category : "Welcome email"
      
}
await transporter.sendMail(mailOptions);
    }
catch(error){
}

}







exports.resetPasswordmail=async (mail,token)=>{
    try{
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'harshkhandelwal597@gmail.com',
                pass: 'dwepporbvkwdeany'
            }
        });
        
        const mailOptions = {
            from: 'Harsh Khandelwal <harshkhandelwal597@gmail.com>',
            to: mail,
            subject: 'Reset your password',
            html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}",token),
            category : "Password Reset"
      
}
await transporter.sendMail(mailOptions);
    }
catch(error){
}

}