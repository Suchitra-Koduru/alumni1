import jwt from "jsonwebtoken";

const secret = 'test';

const auth = async (req, res, next) => {
  // try {
  //   const token = req.headers.authorization.split(" ")[1];
  //   const isCustomAuth = token.length < 500;

  //   let decodedData;

  //   if (token && isCustomAuth) {      
  //     decodedData = jwt.verify(token, secret);

  //     req.userId = decodedData?.id;
  //   } else {
  //     decodedData = jwt.decode(token);

  //     req.userId = decodedData?.sub;
  //   }    

  //   next();
  // } catch (error) {
  //   console.log(error);
  // }
//   const token=req.header("authorization").split(' ')[1]
//     if (!token) {
//         return res.json({message :"No token", status: false })
//     }
//     jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
//         if (err) {
//             return res.json({message:"Error occurred", status: false })
//         } 
//         // else {
//             // req.userId=data.id;
//             next();
//         // }
//     })

const token = req.header("authorization")?.split(' ')[1];

if (!token) {
    return res.status(401).json({ message: "No token provided", status: false });
}

jwt.verify(token, secret, (err, data) => {
    if (err) {
        console.log(err);
        return res.status(403).json({ message: "Invalid or expired token", status: false });
    }
    console.log(token)
    // Set the userId from the decoded token
    req.id = data.id;
    next();
});

};

export default auth;