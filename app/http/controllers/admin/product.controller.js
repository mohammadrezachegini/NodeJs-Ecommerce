const Controller = require("../controllers");

class ProductController extends Controller {
    async addProduct(req, res, next) {
        try {

        } catch (error) {
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