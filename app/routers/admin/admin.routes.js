const { CategoryAdminApiRoutes } = require("../admin/category")
const { BlogAdminApiRoutes } = require("../admin/blog")
const { ProductAdminApiRoutes } = require("../admin/product")
const { CourseAdminApiRoutes } = require("./course")
const { ChapterAdminApiRoutes } = require("./chapter")
const { EpisodeAdminApiRoutes } = require("./episode")
const { UserAdminApiRoutes } = require("./user")

const router = require("express").Router()


router.use("/category", CategoryAdminApiRoutes)
router.use("/blogs" ,BlogAdminApiRoutes)
router.use("/products", ProductAdminApiRoutes)
router.use("/courses", CourseAdminApiRoutes)
router.use("/chapters", ChapterAdminApiRoutes)
router.use("/episodes", EpisodeAdminApiRoutes)
router.use("/users", UserAdminApiRoutes)

module.exports = {
    AdminRoutes: router
}