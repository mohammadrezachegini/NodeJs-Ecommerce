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
            const {title,short_text,tags,category} = blogDataBody
            const image = req.body.image
            const blog = await BlogModel.create({title,short_text,tags,category,image})
            return res.json({blog})
            
            
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
            return res.status(200).json({
                statusCode: 200,
                message: "success",
                data: {
                    blogs: []
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