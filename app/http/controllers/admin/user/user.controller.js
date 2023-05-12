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
            const users = await UserModel.find({databaseQuery:})
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