const { RoleController } = require("../../http/controllers/admin/RBAC/role.controller");
const { StringToArray } = require("../../http/middleware/StringToArray");

const router = require("express").Router();

router.get("/list", RoleController.getAllRoles)
router.post("/add", StringToArray("permissions") ,RoleController.createRole)
module.exports = {
    RoleAdminApiRoutes : router
}