const {authController, UserAuthController} = require("../../http/controllers/user/auth/auth.controller")
const { VerifyAccessToken } = require("../../http/middleware/VerifyAccessToken")

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
 *  /user/get-otp:
 *      post:
 *          summary: get the otp codes
 *          tags: [User-Authentication] 
 *          description :  get the otp code for authentication
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


router.post("/get-otp", UserAuthController.getOtp)


/**
 * @swagger
 *  /user/check-otp:
 *      post:
 *          summary: check the otp code
 *          tags: [User-Authentication] 
 *          description :  check the otp code for authentication
 *          parameters:
 *          -   name: mobile
 *              description: CA phone number
 *              in: formData
 *              required: true
 *              type: string
 *          -   name: code
 *              description: Enter the otp code
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

router.post("/check-otp",UserAuthController.checkOtp)


/**
 * @swagger
 *  /user/refresh-token:
 *      post:
 *          summary: send refresh token to get new token and refresh token
 *          tags: [User-Authentication] 
 *          description :  Refresh Token
 *          parameters:
 *              -   in: body
 *                  required: true
 *                  type: string
 *                  name: refreshToken    
 *          responses:
 *              200:
 *                  description : success
 *             
*/

router.post("/refresh-token",UserAuthController.refreshToken)

module.exports = {
    userAuthRoutes: router
}