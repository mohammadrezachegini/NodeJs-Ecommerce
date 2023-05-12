const { PermissionsModel } = require('../../../../models/permission')
const {StatusCodes: HttpStatus} = require("http-status-codes")
const Controller = require('../../controllers')

class PermissionController extends Controller {

    async getAllPermissions(req,res,next) {
        try {
            const permissions = await PermissionsModel.find({})
            return res.status(HttpStatus.OK).json({
                statusCode: HttpStatus.OK,
                data: {
                    message: 'Permissions retrieved successfully',
                    permissions
                }
            })
        } catch (error) {
            next(error)
        }
    }

}

module.exports = {
    PermissionController : new PermissionController()
}