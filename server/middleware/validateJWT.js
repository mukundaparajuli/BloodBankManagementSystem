const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const vertifyJWT = asyncHandler(async (req, res, next) => {
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer")) {
        token = authHeader.split(" ")[1];
        console.log(token);
        jwt.verify(token, process.env.SECRET_ACCESS_KEY, (err, decoded) => {
            if (err) {
                res.status(401).json({ message: "not verified!" })
            }
            // console.log(decoded);
            req.user = decoded.user;
        })
    };
    next();

})
module.exports = vertifyJWT;