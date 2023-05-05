const { uploadFile } = require("../../../utils/multer");
const { ProductController } = require("../../http/controllers/admin/product.controller");

const router = require("express").Router();

/**
 * @swagger
 * components:
 *  schemas:
 *      Product:
 *          type: object
 *          required:
 *              -   title
 *              -   short_text
 *              -   text
 *              -   tags
 *              -   category
 *              -   price
 *              -   discount
 *              -   count
 *          properties:
 *
 *              title:
 *                  type: string
 *                  description: title of the product
 *              short_text:
 *                  type: string
 *                  description: title of the product
 *              text:
 *                  type: string
 *                  description: text of the product
 * 
 *              tags:
 *                  type: array
 *                  description: tags of the product
 * 
 *              category:
 *                  type: string
 *                  description: category of the product
 * 
 *              price:
 *                  type: string
 *                  description: price of the product
 * 
 *              discount:
 *                  type: string
 *                  description: discount of the product
 * 
 *              count:
 *                  type: string
 *                  description: count of the product
 *              weight:
 *                  type: string
 *                  description: weight of the product
 *              height:
 *                  type: string
 *                  description: height of the product
 *              length:
 *                  type: string
 *                  description: length of the product
 * 
 *              width:
 *                  type: string
 *                  description: width of the product
 * 
 *              images:
 *                  type: array
 *                  items:
 *                      type: string
 *                      format: binary
 *                  description: pictures of the product
 * 
 */
/**
 * @swagger
 *  /admin/products/add:
 *      post:
 *          tags: [Product(AdminPanel)]
 *          summary: Add a new product
 *          requestBody:
 *              required: true
 *              content:
 *                      multipart/form-data:
 *                          schema:
 *                              $ref: '#/components/schemas/Product'
 *          responses:
 *              201:
 *                  description : success
 *                
 * 
 */
router.post("/add", uploadFile.array("images", 10) ,ProductController.addProduct)

/**
 * @swagger
 *  /admin/products/list:
 *      get:
 *          tags: [Product(AdminPanel)]
 *          summary: get All products
 *          responses:
 *              201:
 *                  description : success
 *                
 * 
 */
router.get("/list",ProductController.getAllProducts)

/**
 * @swagger
 *  /admin/products/{id}:
 *      get:
 *          tags: [Product(AdminPanel)]
 *          summary: get one product
 *          parameters:
 *              -   in: path
 *                  name: id
 *                  type: string
 *                  description: id of the product
 *          responses:
 *              201:
 *                  description : success
 *                
 * 
 */
router.get("/:id",ProductController.getProductById)



/**
 * @swagger
 *  /admin/products/remove/{id}:
 *      delete:
 *          tags: [Product(AdminPanel)]
 *          summary: delete one product
 *          parameters:
 *              -   in: path
 *                  name: id
 *                  type: string
 *                  description: id of the product
 *          responses:
 *              201:
 *                  description : success
 *                
 * 
 */
router.delete("/remove/:id",ProductController.removeProductById)
// router.patch()
// router.delete()
// router.get()

module.exports = {
    ProductAdminApiRoutes : router
}