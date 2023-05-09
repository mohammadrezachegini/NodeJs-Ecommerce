const Controller = require('../controllers');
const {CourseModel} = require('../../../models/course');
const {StatusCodes: HttpStatus} = require('http-status-codes')
class CourseController extends Controller {
    async getAllCourses(req, res, next) {
        try {
            const {search} = req.query;
            let courses;
            if(search) courses = await CourseModel.find({$text: {$search: search}}).sort({_id : -1})
            else courses = await CourseModel.find({}).sort({_id : -1})
            return res.status(HttpStatus.OK).json({
                status:HttpStatus.OK,
                message: 'Courses fetched successfully',
                data:{
                    courses
                }
            })
            
        } catch (error) {
            next(error);
        }
    }
}

module.exports = {
    CourseController : new CourseController()
}