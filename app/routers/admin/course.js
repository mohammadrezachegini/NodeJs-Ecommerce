const { CourseController } = require('../../http/controllers/admin/course.controller');

const router = require('express').Router();

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
module.exports = {
    CourseAdminApiRoutes : router
}