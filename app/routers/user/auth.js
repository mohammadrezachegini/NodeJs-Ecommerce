const {authController, UserAuthController} = require("../../http/controllers/user/auth/auth.controller")

const router = require("express").Router()


/**  
 * @swagger
 * tags: 
 *  name: User-Authentication
 *  description : User authentication section
 *      
*/

/**
 * @swagger
 *  /user/login:
 *      post:
 *          summary: index of routes
 *          tags: [User-Authentication] 
 *          description :  get all data that need for index page
 *          parameters:
 *          -   name: mobile
 *              description: CA phone number
 *              in: formData
 *              required: true
 *              type: string         
 *          responses:
 *              201:
 *                  description : success
 *              400:
 *                  description: Bad Request
 *              401:
 *                  description: Unauthorization
 *              500:
 *                  description: internal Server Error
*/


router.post("/login", UserAuthController.login)

module.exports = {
    userAuthRoutes: router
}