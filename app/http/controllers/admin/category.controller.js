const {CategoryModel} = require('../../../models/categories');
const createError = require("http-errors");
const Controller = require('../controllers');
const { addCategorySchema } = require('../../validations/admin/category.schema');
class CategoryController extends Controller {
 
    async addCategory(req, res,next) {
        try {
            await addCategorySchema.validateAsync(req.body);
            const {title, parent} = req.body;
            const Category = await CategoryModel.create({title, parent});
            if(!Category) throw createError.InternalServerError("Internal Server Error")
            return res.status(201).json({
                data:{
                    statusCode:201,
                    message:"Category Created Successfully",
                    Category
                }
            });
        } catch (error) {
            next(error);
        }
    }

    async removeCategory(req, res,next) {
        try {
            
        } catch (error) {
            next(error);
        }
    }
    async updateCategory(req, res,next) {
        try {
            
        } catch (error) {
            next(error);
        }
    }
    async getAllCategory(req, res,next) {
        try {
            
        } catch (error) {
            next(error);
        }
    }
    async getCategoriesById(req, res,next) {
        try {
            
        } catch (error) {
            next(error);
        }
    }
    async getAllCategoriesByParent(req, res,next) {
        try {
            
        } catch (error) {
            next(error);
        }
    }
    async getAllChildCategory(req, res,next) {
        try {
            
        } catch (error) {
            next(error);
        }
    }

}


module.exports = {
    CategoryController : new CategoryController()
}