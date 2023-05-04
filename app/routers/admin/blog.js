const { uploadFile } = require('../../../utils/multer');
const { AdminBlogController } = require('../../http/controllers/admin/blog.controller');
const { StringToArray } = require('../../http/middleware/StringToArray');

const router = require('express').Router();


/**
 * @swagger
 *  /admin/blogs:
 *      get:
 *          summary: get all Blogs
 *          tags: [Blog(AdminPanel)] 
 *          description :  get all blogs
 *          parameters:
 *              -   in: header
 *                  required: true
 *                  type: string
 *                  name: access-token
 *                  example: Bearer Token ...
 *          responses:
 *              200:
 *                  description : success
 *             
*/
router.get("/", AdminBlogController.getAllBlogs)

/**
 * @swagger
 *  /admin/blogs/add:
 *      post:
 *          tags: [Blog(AdminPanel)] 
 *          description : add blog
 *          summary: Create Blog
 *          consumes:
 *              - multipart/form-data
 *              - application/x-www-form-data-urlencoded
 *          parameters:
 *              -   in: header
 *                  required: true
 *                  type: string
 *                  name: access-token
 *                  example: Bearer Token ...
 *              -   in: formData
 *                  required: true
 *                  type: string
 *                  name: title
 *              -   in: formData
 *                  required: true
 *                  type: string
 *                  name: short_text  
 *              -   in: formData
 *                  required: true
 *                  name: text  
 *                  type: string
 *              -   in: formData
 *                  example: tags1#tags2#tags3#foo#foo_bar || str || undefined
 *                  type: string
 *                  name: tags
 *              -   in: formData
 *                  required: false
 *                  type: string
 *                  name: category   
 *              -   in: formData
 *                  required: true
 *                  type: file
 *                  name: image    
 *          responses:
 *              201:
 *                  description : success
 *             
*/
router.post("/add", uploadFile.single("image"), StringToArray("tags") , AdminBlogController.createBlog)

/**
 * @swagger
 *  /admin/blogs/update/{id}:
 *      patch:
 *          tags: [Blog(AdminPanel)] 
 *          description : add blog
 *          summary: Create Blog
 *          consumes:
 *              - multipart/form-data
 *              - application/x-www-form-data-urlencoded
 *          parameters:
 *              -   in: header
 *                  type: string
 *                  name: access-token
 *                  example: Bearer Token ...
 *              -   in: formData
 *                  type: string
 *                  name: title
 *              -   in: path
 *                  type: string
 *                  name: id
 *                  required: true
 *              -   in: formData
 *                  type: string
 *                  name: short_text  
 *              -   in: formData
 *                  name: text  
 *                  type: string
 *              -   in: formData
 *                  example: tags1#tags2#tags3#foo#foo_bar || str || undefined
 *                  type: string
 *                  name: tags
 *              -   in: formData
 *                  type: string
 *                  name: category   
 *              -   in: formData
 *                  type: file
 *                  name: image    
 *          responses:
 *              201:
 *                  description : success
 *             
*/
router.patch("/update/:id", uploadFile.single("image"), StringToArray("tags") , AdminBlogController.updateBlogById)



/**
 * @swagger
 *  /admin/blogs/{id}:
 *      get:
 *          tags: [Blog(AdminPanel)] 
 *          description : add blog
 *          summary: Create Blog
 *          consumes:
 *              - multipart/form-data
 *              - application/x-www-form-data-urlencoded
 *          parameters:
 *              -   in: header
 *                  required: true
 *                  type: string
 *                  name: access-token
 *                  example: Bearer Token ...
 *              -   in: path
 *                  required: true
 *                  type: string
 *                  name: id
 *          responses:
 *              201:
 *                  description : success
 *             
*/
router.get("/:id", AdminBlogController.getBlogById)


/**
 * @swagger
 *  /admin/blogs/{id}:
 *      delete:
 *          tags: [Blog(AdminPanel)] 
 *          description : add blog
 *          summary: Create Blog
 *          consumes:
 *              - multipart/form-data
 *              - application/x-www-form-data-urlencoded
 *          parameters:
 *              -   in: header
 *                  required: true
 *                  type: string
 *                  name: access-token
 *                  example: Bearer Token ...
 *              -   in: path
 *                  required: true
 *                  type: string
 *                  name: id
 *          responses:
 *              201:
 *                  description : success
 *             
*/
router.delete("/:id", AdminBlogController.deleteBlogById)



module.exports = {
    BlogAdminApiRoutes: router
}