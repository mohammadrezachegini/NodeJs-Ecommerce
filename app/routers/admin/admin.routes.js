const { CategoryAdminApiRoutes } = require("../admin/category")
const { BlogAdminApiRoutes } = require("../admin/blog")
const { ProductAdminApiRoutes } = require("../admin/product")
const {VerifyAccessToken} = require("../../http/middleware/VerifyAccessToken")
const { CourseAdminApiCourse, CourseAdminApiRoutes } = require("./course")

const router = require("express").Router()

/**
 * @swagger
 * tags:
 *      -   name: Admin-Panel
 *          description: crud action for admin
 *      -   name: Course(AdminPanel)
 *          description: crud action for Course 
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
router.use("/courses", CourseAdminApiRoutes)

module.exports = {
    AdminRoutes: router
}