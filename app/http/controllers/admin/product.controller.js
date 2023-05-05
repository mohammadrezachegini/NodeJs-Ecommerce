const Controller = require("../controllers");
const {createProductSchema} = require("../../validations/admin/product.schema");
const { deleteFileInPublic } = require("../../../../utils/function");
const { ProductModel } = require("../../../models/products");
const path = require("path");
class ProductController extends Controller {
    
    async addProduct(req, res, next) {
        try {
            const productBody = await createProductSchema.validateAsync(req.body);
            req.body.image = path.join(productBody.fileUploadPath, productBody.filename)
            req.body.image = req.body.image.replace(/\\/g, "/")
            const instructor = req.user._id
            const {title,text,short_text,tags,category,price,count,discount,width,height,weight, length} = productBody
            const image = req.body.image 
            let features = {}, type = "physical"
            if(width || height || weight || length){
                if(!width) features.width = 0
                else features.width = width
                if(!height) features.height = 0
                else features.height = height
                if(!length) features.length = 0
                else features.length = length
                if(!weight) features.weight = 0
                else features.weight = weight
            }
            else{
                type = "digital"
            }
            const product = await ProductModel.create({title,text,short_text,tags,category,price,count,discount,image,features,instructor,type})
            return res.status(201).json({
                status: 201,
                message: "Product Added Successfully",
                data:{
                    product
                }
            })
        } catch (error) {
            deleteFileInPublic(req.body.image)
            next(error);
        }
    }

    async editProduct(req, res, next) {
        try {

        } catch (error) {
            next(error);
        }
    }
    async removeProduct(req, res, next) {
        try {

        } catch (error) {
            next(error);
        }
    }
    async getAllProducts(req, res, next) {
        try {

            const products = await ProductModel.find({})
            return res.status(200).json({
                
                statusCode: 200,
                message: "Products fetched Successfully",
                data:{
                    products
                }
                
            })
        } catch (error) {
            next(error);
        }
    }

    async getProductById(req, res, next) {
        try {

        } catch (error) {
            next(error);
        }
    }
}

module.exports = {
    ProductController : new ProductController()
}