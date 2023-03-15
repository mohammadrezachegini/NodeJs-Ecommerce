const createError = require("http-errors")
const jwt = require("jsonwebtoken");
const { ACCESS_TOKEN_SECRET_KEY } = require("../../../utils/constans");
const { UserModel } = require("../../models/users");
function VerifyAccessToken(req,res,next){
    const headers = req.headers;
    const [bearer, token] =  headers?.accessToken?.split(" ") || []
    if(token && bearer?.toLowerCase() === "bearer"){
        jwt.decode(token, ACCESS_TOKEN_SECRET_KEY, async  (err, payload) => {
            if(err) return next(createError.Unauthorized("Please Log in into your account"))
            const {mobile} = payload || {};
            const user = await UserModel.findOne({mobile}, {otp:0 , password:0 })
            if(!user) createError.Unauthorized("Username not found")
            req.user = user;
            return next()
        })
    }  
    return next(createError.Unauthorized("please Login into your account"));
}

module.exports = {
    VerifyAccessToken
}