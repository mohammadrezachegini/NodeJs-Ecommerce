const { CategoryAdminApiRoutes } = require("../admin/category")
const { BlogAdminApiRoutes } = require("../admin/blog")
const { ProductAdminApiRoutes } = require("../admin/product")
const { CourseAdminApiRoutes } = require("./course")
const { ChapterAdminApiRoutes } = require("./chapter")
const { EpisodeAdminApiRoutes } = require("./episode")
const { UserAdminApiRoutes } = require("./user")
const { PermissionAdminApiRoutes } = require("./permission")
const { RoleAdminApiRoutes } = require("./role")

const router = require("express").Router()


router.use("/category", CategoryAdminApiRoutes)
router.use("/blogs" ,BlogAdminApiRoutes)
router.use("/products", ProductAdminApiRoutes)
router.use("/courses", CourseAdminApiRoutes)
router.use("/chapters", ChapterAdminApiRoutes)
router.use("/episodes", EpisodeAdminApiRoutes)
router.use("/users", UserAdminApiRoutes)
router.use("/permissions", PermissionAdminApiRoutes)
router.use("/roles", RoleAdminApiRoutes)

module.exports = {
    AdminRoutes: router
}