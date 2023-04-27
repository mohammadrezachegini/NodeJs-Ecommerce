// const { authSchema } = require("../../validations/user/auth.schema");
const Controller = require("../controllers");
const createError = require("http-errors")
module.exports = new class HomeController extends Controller {
    indexPage(req,res,next) {
        try {
            return res.status(200).send("Index Page")
        } catch (error) {
            next(error)
        }
        // 
    }
}