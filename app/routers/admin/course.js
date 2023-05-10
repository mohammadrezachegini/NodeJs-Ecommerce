const { uploadFile } = require('../../../utils/multer');
const { CourseController } = require('../../http/controllers/admin/course/course.controller');
const { StringToArray } = require('../../http/middleware/StringToArray');

const router = require('express').Router();

router.get('/list', CourseController.getAllCourses )
router.post("/add", uploadFile.single("image"), StringToArray("tags") ,CourseController.addCourse)
router.get('/:id', CourseController.getCourseById )

module.exports = {
    CourseAdminApiRoutes : router
}