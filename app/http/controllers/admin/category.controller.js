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

    async checkExistCategory(id){
        const category = await CategoryModel.findById(id)
        if(!category) throw createError.NotFound("Category Not Found")
        return category
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

            const category = await CategoryModel.aggregate([
                {
                    // $lookup: {
                    //     from: "categories",
                    //     localField: "_id",
                    //     foreignField: "parent",
                    //     as: "children"
                    // }
                    $graphLookup: {
                        from: "categories",
                        startWith: "$$id",
                        connectFromField: "_id",
                        connectToField: "parent",
                        maxDepth:5,
                        depthField: "depth",
                        as: "children"
                    }
                },
                {
                    $project: {
                        __v: 0,
                        "children.__v": 0,
                        "children.parent": 0,
                    }
                },
                {
                    $match : {
                        parent: undefined
                    }
                }
            ])
            return res.status(200).json({
                data:{
                    statusCode:200,
                    message:"All Categories",
                    category
                }
            })
            
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
            const parent = await CategoryModel.find({parent: undefined},{__v:0})
            return res.status(200).json({
                data:{
                    statusCode:200,
                    message:"All Categories",
                    parent
                }
            })
        } catch (error) {
            next(error);
        }
    }
    async getAllChildCategory(req, res,next) {
        try {
            const {parent} = req.params;
            const children = await CategoryModel.find({parent},{__v:0, parent:0})
            return res.status(200).json({
                data:{
                    statusCode:200,
                    message:"All Child Categories",
                    children
                }
            })
        } catch (error) {
            next(error);
        }
    }

    async removeCategory(req, res,next) {
        try {
            const {id} = req.params;
            const category = await this.checkExistCategory(id)
            const deleteResult = await CategoryModel.deleteOne({_id: category._id});
            if(deleteResult.deletedCount == 0) throw createError.InternalServerError("Unsuccessful Delete category")
            return res.status(200).json({
                data:{
                    statusCode:200,
                    message:"Category Deleted Successfully"
                }
            })
        } catch (error) {
            console.log(error);
        }
    }

}


module.exports = {
    CategoryController : new CategoryController()
}