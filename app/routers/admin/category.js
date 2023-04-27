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

/**
 * @swagger
 *  /admin/category/parents:
 *      get:
 *          summary: get all parent's Category
 *          tags: [Admin-Panel] 
 *          description :  get parent's category
 *          responses:
 *              201:
 *                  description : success
 *             
*/
router.get("/parents",CategoryController.getAllCategoriesByParent )

/**
 * @swagger
 *  /admin/category/children/{parent}:
 *      get:
 *          summary: get all parent's children
 *          tags: [Admin-Panel] 
 *          description :  get children's category
 *          parameters:
 *              -   in: path
 *                  required: true
 *                  name: parent    
 *                  type: string
 *          responses:
 *              201:
 *                  description : success
 *             
*/
router.get("/children/:parent",CategoryController.getAllChildCategory )

/**
 * @swagger
 *  /admin/category/all:
 *      get:
 *          summary: get all Categories
 *          tags: [Admin-Panel] 
 *          description :  get all categories
 *          responses:
 *              201:
 *                  description : success
 *             
*/
router.get("/all",CategoryController.getAllCategory )

/**
 * @swagger
 *  /admin/category/remove/{id}:
 *      delete:
 *          summary: delete  Category
 *          tags: [Admin-Panel] 
 *          description :  delete Category by id
 *          parameters:
 *              -   in: path
 *                  required: true
 *                  type: string
 *                  name: id  
 *          responses:
 *              201:
 *                  description : success
 *             
*/
router.delete("/remove/:id", CategoryController.removeCategory )

module.exports = {
    CategoryRoutes: router
}