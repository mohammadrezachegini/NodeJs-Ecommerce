const { AdminBlogController } = require('../../http/controllers/admin/blog.controller');

const router = require('express').Router();


/**
 * @swagger
 *  /admin/blogs:
 *      get:
 *          summary: get all Blogs
 *          tags: [Blog(AdminPanel)] 
 *          description :  get all blogs
 *          responses:
 *              20:
 *                  description : success
 *             
*/
router.get("/", AdminBlogController.getAllBlogs)
module.exports = {
    BlogAdminApiRoutes: router
}