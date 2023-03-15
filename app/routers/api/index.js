const HomeController = require("../../http/controllers/api/home.contollers");
const {VerifyAccessToken} = require("../../http/middleware/VerifyAccessToken")
const router = require("express").Router();


/**  
 * @swagger
 * tags: 
 *  name: IndexPage
 *  description : index page route and data
 *      
*/
/**  
 * @swagger
 * /: 
 *  get:
 *      summary: index of routes
 *      tags: [IndexPage]
 *      description :  get all data that need for index page
 *      responses:
 *          200:
 *              description : success
 *          404:
 *              description: Not found
*/

router.get("/", VerifyAccessToken, HomeController.indexPage)

module.exports = {
    HomeRoutes : router
}