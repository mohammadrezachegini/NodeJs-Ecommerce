const { CategoryRoutes } = require("../admin/category")
const { BlogAdminApiRoutes } = require("../admin/blog")

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
router.use("/blogs", BlogAdminApiRoutes)

module.exports = {
    AdminRoutes: router
}