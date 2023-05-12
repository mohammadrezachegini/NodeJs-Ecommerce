/**
 * @swagger
 *  /admin/users/list:
 *      get:
 *          tags: [User(AdminPanel)]
 *          summary: get All courses
 *          parameters:
 *              -   in: query
 *                  name: search
 *                  type: string
 *                  description: id for the course
 *          responses:
 *              200:
 *                  description : success
 *                  content:
 *                     application/json:
 *                          schema:
 *                              $ref: '#/definitions/ListOfCourses'
 * 
 */