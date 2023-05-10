const { uploadFile } = require('../../../utils/multer');
const { CourseController } = require('../../http/controllers/admin/course.controller');
const { StringToArray } = require('../../http/middleware/StringToArray');

const router = require('express').Router();


/**
 * @swagger
 *  components:
 *      schemas:
 *          Types:
 *             Course:
 *             type: string
 *             enum:
 *                  -   Free
 *                  -   Cash
 *                  -   Special
 */ 

/**
 * @swagger
 * components:
 *  schemas:
 *      Course:
 *          type: object
 *          required:
 *              -   title
 *              -   short_desc
 *              -   full_desc
 *              -   tags
 *              -   category
 *              -   price
 *              -   discount
 *              -   image
 *              -   type
 *          properties:
 *
 *              title:
 *                  type: string
 *                  description: title of the course
 *              short_desc:
 *                  type: string
 *                  description: short description for the course
 *              full_desc:
 *                  type: string
 *                  description: full description for the course
 * 
 *              tags:
 *                  type: array
 *                  description: tags for the course
 * 
 *              category:
 *                  type: string
 *                  description: category for  course
 * 
 *              price:
 *                  type: string
 *                  description: price for the course
 * 
 *              discount:
 *                  type: string
 *                  description: discount for the course
 * 
 *              image:
 *                  type: file
 *                  format: binary
 *                  description: pictures of the product
 *              type:
 *                     $ref: '#/components/schemas/Types'
 *      EditProduct:
 *          type: object
 *          properties:
 *
 *              title:
 *                  type: string
 *                  description: title of the product
 *              short_text:
 *                  type: string
 *                  description: title of the product
 *              text:
 *                  type: string
 *                  description: text of the product
 * 
 *              tags:
 *                  type: array
 *                  description: tags of the product
 * 
 *              category:
 *                  type: string
 *                  description: category of the product
 * 
 *              price:
 *                  type: string
 *                  description: price of the product
 * 
 *              discount:
 *                  type: string
 *                  description: discount of the product
 * 
 *              count:
 *                  type: string
 *                  description: count of the product
 *              weight:
 *                  type: string
 *                  description: weight of the product
 *              height:
 *                  type: string
 *                  description: height of the product
 *              length:
 *                  type: string
 *                  description: length of the product
 * 
 *              width:
 *                  type: string
 *                  description: width of the product
 * 
 *              images:
 *                  type: array
 *                  items:
 *                      type: string
 *                      format: binary
 *                  description: pictures of the product
 * 
 *              type:
 *                     $ref: '#/components/schemas/Types'
 *              colors:
 *                     $ref: '#/components/schemas/Color'  
 */



/**
 * @swagger
 *  /admin/courses/list:
 *      get:
 *          tags: [Course(AdminPanel)]
 *          summary: get All courses
 *          parameters:
 *              -   in: query
 *                  name: search
 *                  type: string
 *                  description: search in the the courses
 *          responses:
 *              200:
 *                  description : success
 *                
 * 
 */
router.get('/list', CourseController.getAllCourses )

/**
* @swagger
*  /admin/courses/add:
*      post:
*          tags: [Course(AdminPanel)]
*          summary: Add a new course
*          requestBody:
*              required: true
*              content:
*                      multipart/form-data:
*                          schema:
*                              $ref: '#/components/schemas/Course'
*          responses:
*              201:
*                  description : success
*                
* 
*/
router.post("/add", uploadFile.single("image"), StringToArray("tags") ,CourseController.addCourse)


/**
 * @swagger
 *  /admin/courses/{id}:
 *      get:
 *          tags: [Course(AdminPanel)]
 *          summary: get All courses
 *          parameters:
 *              -   in: path
 *                  name: id
 *                  type: string
 *                  description: id for the course
 *          responses:
 *              200:
 *                  description : success
 *                
 * 
 */
router.get('/:id', CourseController.getCourseById )
module.exports = {
    CourseAdminApiRoutes : router
}