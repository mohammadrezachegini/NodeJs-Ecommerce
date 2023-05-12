const { RoleController } = require("../../http/controllers/admin/RBAC/role.controller");

const router = require("express").Router();

router.get("/list", RoleController.getAllRoles)

module.exports = {
    RoleAdminApiRoutes : router
}