const createError = require("http-errors")
const { EXPIRES_IN, USER_ROLE } = require("../../../../../utils/constans")
const { randomNumberGenerator } = require("../../../../../utils/function")
const { UserModel } = require("../../../../models/users")
const { authSchema } = require("../../../validations/user/auth.schema")
const Controller = require("../../contollers")
class UserAuthController extends Controller {

    async getOtp(req,res,next){
        try {
            await authSchema.validateAsync(req.body)
            const {mobile} = req.body
            const code = randomNumberGenerator()
            console.log(`Code is ${code}`);
            const result = await this.saveUser(mobile,code)
            if(!result) throw createError.Unauthorized("Unsuccessful login")
            return res.status(200).send({
                data: {
                    statusCode: 200,
                    message: "The verification code snet successfully",
                    code: code,
                    mobile
                }
            })  
        } catch (error) {
            next(createError.BadRequest(error.message))
        }
    }

    async saveUser(mobile,code){
        let otp = {
            code,
            expiresIn: EXPIRES_IN
        }
        const result = await this.checkExistUser(mobile)
        if(result) {
            return await this.updateUser(mobile, {otp})
        }

        return !!(await UserModel.create({
            mobile,
            otp,
            Roles: [USER_ROLE]
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