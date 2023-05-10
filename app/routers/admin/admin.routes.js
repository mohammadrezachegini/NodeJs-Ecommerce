const { CategoryAdminApiRoutes } = require("../admin/category")
const { BlogAdminApiRoutes } = require("../admin/blog")
const { ProductAdminApiRoutes } = require("../admin/product")
const {VerifyAccessToken} = require("../../http/middleware/VerifyAccessToken")
const { CourseAdminApiCourse, CourseAdminApiRoutes } = require("./course")
const { ChapterAdminApiRoutes } = require("./chapter")

const router = require("express").Router()


router.use("/category", CategoryAdminApiRoutes)
router.use("/blogs" ,BlogAdminApiRoutes)
router.use("/products", ProductAdminApiRoutes)
router.use("/courses", CourseAdminApiRoutes)
router.use("/chapters", ChapterAdminApiRoutes)

module.exports = {
    AdminRoutes: router
}