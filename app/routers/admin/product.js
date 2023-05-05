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
 * 
 *              image:
 *                  type: file
 *                  description: title of the product
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
router.post("/add", uploadFile.single("image") ,ProductController.addProduct)
// router.patch()
// router.delete()
// router.get()
// router.get()

module.exports = {
    ProductAdminApiRoutes : router
}