const { PermissionController } = require("../../http/controllers/admin/RBAC/permission.controller");

const router = require("express").Router();

router.get("/list", PermissionController.getAllPermissions)
router.post("/add", PermissionController.createPermissions)

module.exports = {
    PermissionAdminApiRoutes : router
}