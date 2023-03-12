const HomeController = require("../../http/controllers/api/home.contollers");

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

router.get("/", HomeController.indexPage)

module.exports = {
    HomeRoutes : router
}