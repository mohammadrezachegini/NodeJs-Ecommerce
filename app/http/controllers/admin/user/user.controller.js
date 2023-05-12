const Controller = require('../../controllers')
const {UserModel} = require("../../../../models/users")
const {StatusCodes: HttpStatus} = require('http-status-codes')
class UserController extends Controller {


    async getAllUsers(req,res,next){
        try {
            const users = await UserModel.find({})
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
}

module.exports = {
    UserController : new UserController()
}