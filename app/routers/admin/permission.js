const { PermissionController } = require("../../http/controllers/admin/RBAC/permission.controller");

const router = require("express").Router();

router.get("/list", PermissionController.getAllPermissions)
router.post("/add", PermissionController.createPermissions)
router.delete("/remove/:id", PermissionController.removePermission)

module.exports = {
    PermissionAdminApiRoutes : router
}