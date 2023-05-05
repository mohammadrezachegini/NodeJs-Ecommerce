const { CategoryAdminApiRoutes } = require("../admin/category")
const { BlogAdminApiRoutes } = require("../admin/blog")
const { ProductAdminApiRoutes } = require("../admin/product")
const {VerifyAccessToken} = require("../../http/middleware/VerifyAccessToken")

const router = require("express").Router()

/**
 * @swagger
 * tags:
 *      -   name: Admin-Panel
 *          description: crud action for admin
 *      -   name: Product(AdminPanel)
 *          description: crud action for product 
 *      -   name: Category(AdminPanel)
 *          description: crud action for category 
 *      -   name: Blog(AdminPanel)
 *          description: crud action for blog
 */
router.use("/category", CategoryAdminApiRoutes)
router.use("/blogs" ,BlogAdminApiRoutes)
router.use("/products", ProductAdminApiRoutes)

module.exports = {
    AdminRoutes: router
}