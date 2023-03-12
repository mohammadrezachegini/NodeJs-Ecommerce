const HomeController = require("../../http/controllers/api/home.contollers");

const router = require("express").Router();


/**  
 * @swagger
 * /: 
 *  get:
 *      summary: index of routes
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