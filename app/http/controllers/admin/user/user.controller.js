const Controller = require('../../controllers')
const {UserModel} = require("../../../../models/users")
const {StatusCodes: HttpStatus} = require('http-status-codes')
class UserController extends Controller {


    async getAllUsers(req,res,next){
        try {
            const {search} = req.query
            const databaseQuery = {}
            if(search){
                databaseQuery["$text"] = { $search: search }
            }
            const users = await UserModel.find({databaseQuery})
            return res.status(HttpStatus.OK).json({
                statusCode: HttpStatus.OK,
                data:{
                    message: 'Users found',
                    users
                }
            })
        } catch (error) {
            next(error)
        }
    }

    async updateUserProfileById(req,res,next){
        try {
            const userID = req.user._id
            const data = req.body
            const BlackListFields = ["mobile", "otp", "bills", "discount", "Roles", "Courses"]
            deleteInvalidPropertyInObject(data, BlackListFields)
            const profileUpdateResult = await UserModel.updateOne({_id: userID}, { $set: data })
            if(!profileUpdateResult.modifiedCount) throw new createHttpError.InternalServerError("update failed")
        } catch (error) {
            next(error)
        }
    }
}

module.exports = {
    UserController : new UserController()
}