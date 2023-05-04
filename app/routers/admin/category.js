const router = require("express").Router();
const {CategoryController} = require("../../http/controllers/admin/category.controller");





/**
 * @swagger
 *  /admin/category/add:
 *      post:
 *          summary: Add Category
 *          tags: [Category(AdminPanel)] 
 *          description :  add Category
 *          parameters:
 *              -   in: header
 *                  type: string
 *                  name: access-token
 *                  example: Bearer Token ...
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
 *          tags: [Category(AdminPanel)] 
 *          description :  get parent's category
 *          parameters:
 *              -   in: header
 *                  type: string
 *                  name: access-token
 *                  example: Bearer Token ...
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
 *          tags: [Category(AdminPanel)] 
 *          description :  get children's category
 *          parameters:
 *              -   in: header
 *                  type: string
 *                  name: access-token
 *                  example: Bearer Token ...
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
 *          tags: [Category(AdminPanel)] 
 *          description :  get all categories
 *          parameters:
 *              -   in: header
 *                  type: string
 *                  name: access-token
 *                  example: Bearer Token ...
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
 *          tags: [Category(AdminPanel)] 
 *          description :  delete Category by id
 *          parameters:
 *              -   in: header
 *                  type: string
 *                  name: access-token
 *                  example: Bearer Token ...
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


/**
 * @swagger
 *  /admin/category/list-of-all:
 *      get:
 *          summary: get  Category without population
 *          tags: [Category(AdminPanel)] 
 *          description :  get Category without population
 *          parameters:
 *              -   in: header
 *                  type: string
 *                  name: access-token
 *                  example: Bearer Token ...
 *          responses:
 *              200:
 *                  description : success
 *             
*/
router.get("/list-of-all", CategoryController.getAllCategoriesWithoutPopulate )

/**
 * @swagger
 *  /admin/category/{id}:
 *      get:
 *          summary: get  Category by id
 *          tags: [Category(AdminPanel)] 
 *          description :  get Category by id
 *          parameters:
 *              -   in: header
 *                  type: string
 *                  name: access-token
 *                  example: Bearer Token ...
 *              -   in: path
 *                  required: true
 *                  type: string
 *                  name: id  
 *          responses:
 *              201:
 *                  description : success
 *             
*/
router.get("/:id", CategoryController.getCategoryById )

/**
 * @swagger
 *  /admin/category/update/{id}:
 *      patch:
 *          summary: edit  Category by id
 *          tags: [Category(AdminPanel)] 
 *          description :  edit Category by id
 *          parameters:
 *              -   in: header
 *                  type: string
 *                  name: access-token
 *                  example: Bearer Token ...
 *              -   in: path
 *                  required: true
 *                  type: string
 *                  name: id  
 *              -   in: formData
 *                  required: true
 *                  type: string
 *                  name: title  
 *          responses:
 *              201:
 *                  description : success
 *              500:
 *                 description : Internal Server error
 *             
*/
router.patch("/update/:id", CategoryController.editCategory )



module.exports = {
    CategoryRoutes: router
}