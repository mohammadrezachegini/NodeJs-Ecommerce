const createError = require("http-errors")
const { EXPIRES_IN, USER_ROLE } = require("../../../../../utils/constans")
const { randomNumberGenerator, SignAccessToken } = require("../../../../../utils/function")
const { UserModel } = require("../../../../models/users")
const { getOtpSchema,checkOtpSchema } = require("../../../validations/user/auth.schema")
const Controller = require("../../contollers")
class UserAuthController extends Controller {

    async getOtp(req,res,next){
        try {
            await getOtpSchema.validateAsync(req.body);
            const { mobile } = req.body;
            const code = RandomNumberGenerator()
            const result = await this.saveUser(mobile, code)
            if (!result) throw createError.Unauthorized("Login Failed")
            return res.status(HttpStatus.OK).send({
              data: {
                statusCode: HttpStatus.OK,
                data: {
                  message: "The code sent successfully",
                  code,
                  mobile
                }
              }
            });
          } catch (error) {
            next(error);
          }
    }

    async checkOtp(req,res,next){
        try {
            await chackOtpSchema.validateAsync(req.body)
            const { mobile, code } = req.body;
            const user = await UserModel.findOne({ mobile }, { password: 0, refreshToken: 0, accessToken: 0}).populate([{path: "Courses"}])
            if (!user) throw createError.NotFound("Username not found")
            if (user.otp.code != code) throw createError.Unauthorized("The code that you sent is incorrect");
            const now = (new Date()).getTime();
            if (+user.otp.expiresIn < now) throw createError.Unauthorized("Your code is expired");
            const accessToken = await SignAccessToken(user._id)
            const refreshToken = await SignRefreshToken(user._id);
            return res.status(HttpStatus.OK).json({
              statusCode : HttpStatus.OK,
              data: {
                accessToken,
                refreshToken,
                user
              }
            })
          } catch (error) {
            next(error)
          }
    }

    async saveUser(mobile,code){
        const now = (new Date().getTime())
        let otp = {
        code,
        expiresIn: now  + 120000,
        }
        if (user){
            console.log(user.otp, now);
            if (+otp.expiresIn > now) throw createError.Forbidden("Your code is not expired")
            return (await this.updateUser(mobile, { otp }))
        }
        return (await UserModel.create({
        mobile,
        otp,
        Role: ROLES.USER
        }))
    }

    async checkExistUser(mobile){
        const user = await UserModel.findOne({mobile})
        return !!user
    }

    async updateUser(mobile,objectData = {}) {
        Object.keys(objectData).forEach(ley => {
            if([""," ", null, undefined, "0", NaN].includes(objectData[key])) delete objectData[key]
        })
        const updateResult = await UserModel.updateOne({mobile}, {$set : objectData})
        return !!updateResult.modifiedCount
    }


}

module.exports = {
    UserAuthController: new UserAuthController()
}