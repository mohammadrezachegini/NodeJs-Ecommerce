const Controller = require("../controllers")


class BlogController extends Controller {
    async createBlog(req,res,next){
        try {
            
        } catch (error) {
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