const jwt =require('jsonwebtoken'); 

exports.varifyToken=async (req,res,next)=>{
   const token= req.cookies.token;
   console.log(token);
   try{
     if(!token){
         return res.status(401).json({
             success: false,
             message: "Token is required"
         })
     }
     const decoded=jwt.verify(token,"secretkey");
     req.userid=decoded.userid;
     next();
   }
   catch(error){
     return res.status(401).json({
         success: false,
         message: "Invalid token"
     })
   }
}
