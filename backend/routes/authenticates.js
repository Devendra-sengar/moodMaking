const express = require('express');
const {
  changePassword,
  cheakauth,
  login,
  logout,
  resetPassword,
  signup,
  varifyemail,
  signupChallenge,
  verifySignupResponse
} = require('../controller/authenticates.js');
const { varifyToken } = require('../middleware/varifyToken.js');
const upload = require('../middleware/multer.js');
const router = express.Router();
const { generateRegistrationOptions } = require('@simplewebauthn/server');
const { User } = require('../models/user.js');
const crypto = require('crypto');

if (!globalThis.crypto) {
  globalThis.crypto = crypto;
}

router.post('/signup', upload.single('photo'), signup);
router.post('/login', upload.single('photo'), login);
router.post('/logout', logout);
router.post('/varify-email', varifyemail);
router.post('/reset-password', resetPassword);
router.post('/reset-password/:token', changePassword);
router.get('/cheak-auth', varifyToken, cheakauth);
router.post('/signup-challenge/:id', signupChallenge);
router.post('/verify-signup/:id', verifySignupResponse); 
// WebAuthn registration challenge route
// router.post(`/signup-challenge/:id`, async (req, res) => {
//   const { id } = req.params;
//   try {
//     const user = await User.findById(id);
//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         message: 'User not found',
//       });
//     }
//     console.log('User found:', user);
//     const userIdBase64 = Buffer.from(user._id.toString()).toString('base64');

//     const registrationOptions = await generateRegistrationOptions({
//       rpName: 'College Portal',
//       rpId: 'https://192.168.177.162:3000', 
//       userName: user.name,
//       timeout: 60000, 
//       attestationType: 'direct', 
//     });

//     console.log('Generated registration options:', registrationOptions);
//     user.fringerprint = registrationOptions.challenge;
//     await user.save();
//     res.json({
//       success: true,
//       options: registrationOptions,
//     });
//   } catch (error) {
//     console.error('Error generating registration options:', error);
//     res.status(500).json({
//       success: false,
//       message: 'Error generating registration options',
//     });
//   }

  
// });

module.exports =router