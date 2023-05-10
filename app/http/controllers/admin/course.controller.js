const Controller = require('../controllers');
const {CourseModel} = require('../../../models/course');
const {StatusCodes: HttpStatus} = require('http-status-codes')
const path = require('path');
const { createCourseSchema } = require('../../validations/admin/course.schema');
const createHttpError = require('http-errors');
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

    async addCourse(req, res, next) {
        try {
            await createCourseSchema.validateAsync(req.body);
            const {fileUploadPath, filename} = req.body;
            const image =  path.join(fileUploadPath, filename).replace(/\\/g, "/");
            const {title,short_desc, full_desc, tags, category, price, discount,type} = req.body;
            const instructor = req.user._id;
            if(Number(price) > 0 && type === "Free") throw createHttpError.BadRequest("For free courses, price should be 0")
            const course = await CourseModel.create({
                title,
                short_desc, 
                full_desc, 
                tags, 
                category, 
                price, 
                discount, 
                type,
                image,
                time: "00:00:00",
                status: "NotStarted",
                instructor


            })
            if(!course?._id) throw createHttpError.InternalServerError('Course not added')
            return res.status(HttpStatus.CREATED).json({
                statusCode:HttpStatus.CREATED,
                message: 'Course added successfully',
                data:{
                    course
                }
            })


        } catch (error) {
            next(error);
        }
    }

    async getCourseById(req, res, next) {
        try {
            const {id} = req.params;
            const course = await CourseModel.findById(id);
            if(!course) throw createHttpError.NotFound('Course not found')
            return res.status(HttpStatus.OK).json({
                statusCode:HttpStatus.OK,
                message: 'Course fetched successfully',
                data:{
                    course
                }
            })
        } catch (error) {
            
        }
    }
}

module.exports = {
    CourseController : new CourseController()
}