const jwt = require( "jsonwebtoken")
exports.genereteTokenAndCookies=(res,userid) =>{
    const token = jwt.sign({userid},"secretkey", { expiresIn: '7d' });
    // res.cookie('token', token)
    
res.cookie('token', token, { 
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days

 });
    return token;
}   








// res.cookie('token', token, {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === 'production',
//     sameSite: 'None',
//     expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days

//  });