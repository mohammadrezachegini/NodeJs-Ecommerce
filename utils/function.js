const jwt = require("jsonwebtoken")
const createError = require("http-errors")
const { reject } = require("bcrypt/promises")
const { UserModel } = require("../app/models/users")
const { SECRET_KEY } = require("./constans")
function randomNumberGenerator() {
    return Math.floor((Math.random() * 90000) + 10000 )
}


function SignAccessToken(userId){
    return new Promise(async (resolve, reject)=> {
        const user = await  UserModel.findById(userId)
        const payload = {
            mobile: user.mobile,
            userID: user._id
        };
        const secret = SECRET_KEY;
        const options = {
            expiresIn: "1h"
        };

        jwt.sign(payload,secret,options, (err, token) => {
            if (err) reject(createError.InternalServerError("Internal server error"))
            resolve(token)
        })
    })

}

module.exports = {
    randomNumberGenerator,
    SignAccessToken
}