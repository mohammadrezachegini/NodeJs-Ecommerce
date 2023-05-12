const { UserController } = require("../../http/controllers/admin/user/user.controller");

const router = require("express").Router();

router.get("/list", UserController.getAllUsers)
router.patch("/edit/:id", UserController.updateUserProfileById)


module.exports = {

    UserAdminApiRoutes : router
}