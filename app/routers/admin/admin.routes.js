const { CategoryRoutes } = require("../admin/category")

const router = require("express").Router()

/**
 * @swagger
 * tags:
 *      -   name: Admin-Panel
 *          description: crud action for admin
 *      -   name: Category(AdminPanel)
 *          description: crud action for category
 */
router.use("/category", CategoryRoutes)

module.exports = {
    AdminRoutes: router
}