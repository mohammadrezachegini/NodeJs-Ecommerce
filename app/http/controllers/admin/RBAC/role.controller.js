const Controller = require('../../controllers')
const {StatusCodes: HttpStatus} = require("http-status-codes")
const createHttpError = require('http-errors')
const { addRoleSchema } = require('../../../validations/admin/RBAC.schema')
const {RoleModel} = require("../../../../models/role")
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

    async createRole(req,res,next) {
        try {
            await   addRoleSchema.validateAsync(req.body)
            const {title,permissions} = req.body
            console.log("PERMISSIONS IS " + permissions);
            console.log("Title IS " + title);
            const role = await RoleModel.findOne({title})
            console.log("ROLE IS " + role);
            if(role) throw new createHttpError.InternalServerError('Role is Existing')
            const createdRole = await RoleModel.create({
                title,
                permissions
            })
            if(!createdRole) throw new createHttpError.InternalServerError('Role not created')
            return res.status(HttpStatus.OK).json({
                statusCode: HttpStatus.OK,
                data: {
                    message: 'Role created successfully',
                    createdRole
                }
            })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = {
    RoleController : new RoleController()
}