const { CategoryRoutes } = require("../admin/category")
const { BlogAdminApiRoutes } = require("../admin/blog")
const {VerifyAccessToken} = require("../../http/middleware/VerifyAccessToken")

const router = require("express").Router()

/**
 * @swagger
 * tags:
 *      -   name: Admin-Panel
 *          description: crud action for admin
 *      -   name: Category(AdminPanel)
 *          description: crud action for category 
 *      -   name: Blog(AdminPanel)
 *          description: crud action for blog
 */
router.use("/category", CategoryRoutes)
router.use("/blogs",  VerifyAccessToken ,BlogAdminApiRoutes)

module.exports = {
    AdminRoutes: router
}