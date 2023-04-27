const router = require("express").Router();
const {CategoryController} = require("../../http/controllers/admin/category.controller");





/**
 * @swagger
 *  /admin/category/add:
 *      post:
 *          summary: Add Category
 *          tags: [Admin-Panel] 
 *          description :  add Category
 *          parameters:
 *              -   in: formData
 *                  required: true
 *                  type: string
 *                  name: title
 *              -   in: formData
 *                  required: false
 *                  type: string
 *                  name: parent    
 *          responses:
 *              201:
 *                  description : success
 *             
*/
router.post("/add", CategoryController.addCategory )

module.exports = {
    CategoryRoutes: router
}