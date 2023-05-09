const jwt = require("jsonwebtoken")
const createError = require("http-errors")
const { reject } = require("bcrypt/promises")
const { UserModel } = require("../app/models/users")
const { SECRET_KEY, ACCESS_TOKEN_SECRET_KEY, REFRESH_TOKEN_SECRET_KEY } = require("./constans")
const redisClient = require("./init_redis")
const path = require('path');
const fs = require('fs');

function randomNumberGenerator() {
    return Math.floor((Math.random() * 90000) + 10000 )
}


function SignAccessToken(userId){
    return new Promise(async (resolve, reject)=> {
        const user = await  UserModel.findById(userId)
        const payload = {
            mobile: user.mobile,
            // userID: user._id
        };
        const secret = ACCESS_TOKEN_SECRET_KEY;
        const options = {
            expiresIn: "1h"
        };

        jwt.sign(payload,ACCESS_TOKEN_SECRET_KEY,options, (err, token) => {
            if (err) reject(createError.InternalServerError("Internal server error"))
            resolve(token)
        })
    })

}

function deleteInvalidPropertyInObject(data = {}, blackListFields = []){
    
    let nullishData = ["", " ", "0", 0, null, undefined]

    Object.keys(data).forEach(key => {
        if(blackListData.includes(key)) delete data[key]
        if(typeof data[key] == "string") data[key] = data[key].trim()
        if(Array.isArray(data[key]) && data[key].length > 0) data[key] = data[key].map(item => item.trim())
        if(Array.isArray(data[key]) && data[key].length == 0) delete data[key]
        if(nullishData.includes(data[key])) delete data[key]
        
    })
}

function SignRefreshToken(userId){
    return new Promise(async (resolve, reject)=> {
        const user = await  UserModel.findById(userId)
        const payload = {
            mobile: user.mobile
            // userID: user._id
        };
        // const secret = REFRESH_TOKEN_SECRET_KEY;
        const options = {
            expiresIn: "1y"
        };

        jwt.sign(payload,REFRESH_TOKEN_SECRET_KEY,options, async (err, token) => {
            if (err) {
                reject(createError.InternalServerError("Internal server error"))
            }
            await redisClient.setEx(String(userId), 31536000, token)

            resolve(token)
        })
    })

}

function VerifyRefreshToken(token){

        return new Promise((resolve,reject)=> {
            jwt.verify(token, REFRESH_TOKEN_SECRET_KEY, async  (err, payload) => {
                if(err) reject(createError.Unauthorized("Please Log in into your account"))
                const {mobile} = payload || {};
                const user = await UserModel.findOne({mobile}, {otp:0 , password:0 })
                if(!user) reject(createError.Unauthorized("Username not found"))
                
                const refreshToken = await redisClient.get(user._id)

                if(token === refreshToken){
                    
                    return resolve(mobile)
                }

                reject(createError.Unauthorized("Your tried to Login fir second time is  failed"))

                
                // req.user = user;
                // console.log(req.user);
                // return next()
            }) 
        })
}

function deleteFileInPublic(fileAddress){
    if(fileAddress){
        
        const pathFile = path.join(__dirname,"..","public", fileAddress)
        if(fs.existsSync(pathFile)) fs.unlinkSync(pathFile)
    }
}

function ListOfImagesFromRequest(files, fileUploadPath){
    if(files?.length > 0){
        return ((files.map(file => path.join(fileUploadPath, file.filename))).map(item => item.replace(/\\/g, "/")));
    }else{

        return []
    }
}

function setFeatures(body){
    const {colors,width, height, weight, length} = body
    let features = {}
    features.colors = colors
    if(!isNaN(+width) || !isNaN(+height) || !isNaN(+weight) || !isNaN(+length)){
        if(!width) features.width = 0
        else features.width = +width
        if(!height) features.height = 0
        else features.height = +height
        if(!length) features.length = 0
        else features.length = +length
        if(!weight) features.weight = 0
        else features.weight = +weight
    }
    return features
}

function copyObject(obj){
    return JSON.parse(JSON.stringify(obj))
}

module.exports = {
    randomNumberGenerator,
    SignAccessToken,
    SignRefreshToken,
    VerifyRefreshToken,
    deleteFileInPublic,
    ListOfImagesFromRequest,
    copyObject,
    setFeatures,
    deleteInvalidPropertyInObject,
}