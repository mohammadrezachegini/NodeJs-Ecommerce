const { createBlogSchema } = require("../../validations/admin/blog.schema")
const Controller = require("../controllers")
const path = require("path")
const { BlogModel } = require("../../../models/blogs")
const { deleteFileInPublic } = require("../../../../utils/function")

class BlogController extends Controller {
    async createBlog(req,res,next){
        try {

            const blogDataBody = await createBlogSchema.validateAsync(req.body)
            // return res.json(req.body)
            req.body.image = path.join(blogDataBody.fileUploadPath, blogDataBody.filename)
            req.body.image = req.body.image.replace(/\\/g, "/")
            const author = req.user._id
            const {title,text,short_text,tags,category} = blogDataBody
            const image = req.body.image
            const blog = await BlogModel.create({author,title,text,short_text,tags,category,image})
            return res.status(201).json({
                statusCode: 201,
                message: "success",
                data: {
                    blog
                }
            })
            
            
        } catch (error) {
            deleteFileInPublic(req.body.image)
            next(error)
        }
    }
    async getBlogById(req,res,next){
        try {

            
        } catch (error) {
            next(error)
        }
    }
    async getAllBlogs(req,res,next){
        try {

            // const blogs = await BlogModel.find({})
            const blogs = await BlogModel.aggregate([
                {
                    $match :{}
                },
                {
                    $lookup : {
                        from: "users",
                        localField: "author",
                        foreignField: "_id",
                        as: "author"
                    }
                },
                {
                    $unwind : "$author"
                },
                {
                    $lookup : {
                        from: "categories",
                        localField: "category",
                        foreignField: "_id",
                        as: "category"
                    }
                },
                {
                    $unwind : "$category"
                },
                {
                    $project: {
                        "author.__v": 0,
                        "category.__v": 0,
                        "author.otp": 0,
                        "author.roles": 0,
                        "author.discount": 0,
                        "author.bills": 0,
                    }
                }
            ])
            return res.status(200).json({
                statusCode: 200,
                message: "success",
                data: {
                    blogs
                }
            })
        } catch (error) {
            next(error)
        }
    }
    async getCommentsOfBlog(req,res,next){
        try {
            
        } catch (error) {
            next(error)
        }
    }
    async deleteBlogById(req,res,next){
        try {
            
        } catch (error) {
            next(error)
        }
    }
    async updateBlogById(req,res,next){
        try {
            
        } catch (error) {
            next(error)
        }
    }

}

module.exports = {
    AdminBlogController: new BlogController()
}