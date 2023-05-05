const Controller = require("../controllers");
const {createProductSchema} = require("../../validations/admin/product.schema");
const { deleteFileInPublic, ListOfImagesFromRequest } = require("../../../../utils/function");
const { ProductModel } = require("../../../models/products");
const path = require("path");
const { ObjectIdValidator } = require("../../validations/public.validator");
const createHttpError = require("http-errors");
class ProductController extends Controller {
    
    async addProduct(req, res, next) {
        try {
            const images = ListOfImagesFromRequest(req?.files || [], req.body.fileUploadPath);
            const productBody = await createProductSchema.validateAsync(req.body);
            const instructor = req.user._id
            const {title,text,short_text,tags,category,price,count,discount,width,height,weight, length} = productBody
            let features = {}, type = "physical"
            if(!isNaN(+width) || !isNaN(+height) || !isNaN(+weight) || !isNaN(+length)){
                if(!width) features.width = 0
                else features.width = +width
                if(!height) features.height = 0
                else features.height = +height
                if(!length) features.length = 0
                else features.length = +length
                if(!weight) features.weight = 0
                else features.weight = +weight
            }
            else{
                type = "digital"
            }
            const product = await ProductModel.create({title,text,short_text,tags,category,price,count,discount,images,features,instructor,type})
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
    async removeProductById(req, res, next) {
        try {
            const {id} = req.params
            const product = await this.findProductById(id)
            const removeProduct = await ProductModel.deleteOne({_id : product._id})
            if(!removeProduct.deletedCount == 0) throw createHttpError.InternalServerError("Product not found")
            return res.status(200).json({
                statusCode: 200,
                message: "Product deleted Successfully",
                data:{
                    product
                }
            })

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
            const {id} = req.params
            const product = await this.findProductById(id)
            return res.status(200).json({
                statusCode: 200,
                message: "Product fetched Successfully",
                data:{
                    product
                }
            })

        } catch (error) {
            next(error);
        }
    }

    async findProductById(productID){
        const {id} = ObjectIdValidator.validate({id: productID})
        const product = await ProductModel.findById(id)
        if(!product) throw createHttpError.NotFound("Product Not Found")
        return product
    }
}

module.exports = {
    ProductController : new ProductController()
}