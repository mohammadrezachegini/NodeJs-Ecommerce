const Controller = require('../../controllers')
const {StatusCodes: HttpStatus} = require("http-status-codes")
class RoleController extends Controller {

    async getAllRoles(req,res,next) {
        try {
            // .populate([{path: 'permissions'}])
            const roles = await RoleModel.find({})
            return res.status(HttpStatus.OK).json({
                statusCode: HttpStatus.OK,
                data: {
                    message: 'Roles fetched successfully',
                    roles
                }
            })
            
        } catch (error) {
            
        }
    }
}

module.exports = {
    RoleController : new RoleController()
}