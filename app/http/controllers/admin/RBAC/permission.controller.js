const { PermissionsModel } = require('../../../../models/permission')
const {StatusCodes: HttpStatus} = require("http-status-codes")
const Controller = require('../../controllers')
const { addPermissionSchema } = require('../../../validations/admin/RBAC.schema')

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

    async createPermissions(req,res,next) {
        try {
            await addPermissionSchema.validateAsync(req.body)
            const {title,description} = req.body
            console.log("description IS " + description);
            console.log("Title IS " + title);
            const permission = await PermissionsModel.findOne({title})
            console.log("ROLE IS " + permission);
            if(permission) throw new createHttpError.InternalServerError('Permission is Existing')
            const createdPermission = await PermissionsModel.create({
                title,
                description
            })
            if(!createdPermission) throw new createHttpError.InternalServerError('Permission not created')
            return res.status(HttpStatus.CREATED).json({
                statusCode: HttpStatus.CREATED,
                data: {
                    message: 'Permission created successfully',
                    createdPermission
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