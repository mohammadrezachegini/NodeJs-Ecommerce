
const Controller = require('../../controllers');
const {StatusCodes: HttpStatus} = require('http-status-codes')
const path = require('path');
const createHttpError = require('http-errors');
const { default: mongoose } = require('mongoose');
const {CourseModel} = require('../../../../models/course');
class ChapterController extends Controller {


    async addChapter(req, res, next) {
        try {
            const {id, title, text} = req.body;
            const course = await CourseModel.findById(id);
            if(!mongoose.isValidObjectId(id)) throw createHttpError.BadRequest("Invalid course id")
            if(!course) throw createHttpError.NotFound('Course not found')
            const savedChapterResult = await CourseModel.updateOne({_id: id}, {
                $push: {
                    chapters: {
                        title,
                        text,
                        episodes: []
                    }
                }
            })
            if(savedChapterResult.modifiedCount == 0 ) throw createHttpError.InternalServerError('Chapter not added')
            
            return res.status(HttpStatus.CREATED).json({
                statusCode:HttpStatus.CREATED,
                
                data:{
                    message: 'Chapter added successfully',
                    course,
                    savedChapterResult
                }
            })
        } catch (error) {
            next(error);
        }
    }


    async getChapterById(req, res, next) {
        try {
            const {id} = req.params;
            const course = await this.getChapterOfCourse(id)
            return res.status(HttpStatus.OK).json({
                statusCode:HttpStatus.OK,
                
                data:{
                    message: 'Chapter found successfully',
                    course,
                }
            })
        } catch (error) {
            next(error);
        }
    }

    async removeChapterById(req, res, next) {
        try {
            const {chapterID} = req.params;
            const chapter = await this.getOneChapter(chapterID)
            const removeChapterResult = await CourseModel.updateOne({"chapters._id": chapterID}, {
                $pull: {
                    chapters: {
                        _id: chapterID
                    }
                } 
            })
            if(removeChapterResult.modifiedCount == 0 ) throw createHttpError.InternalServerError('chapter not removed')
            return res.status(HttpStatus.OK).json({
                statusCode:HttpStatus.OK,

                data:{
                    message: 'Chapter removed successfully',
                    chapter,
                    removeChapterResult
                }
            })

        } catch (error) {
            next(error);
        }
    }

    async getChapterOfCourse(id) {
        const chapters = await CourseModel.findOne({_id: id},{chapters: 1, title: 1})
        if(!chapters) throw createHttpError.NotFound('Course not found')
        return chapters
    }

    async getOneChapter(id) {

        try {
            const chapters = await CourseModel.findOne({"chapters._id": id},{"chapters.$": 1})
            if(!chapters) throw createHttpError.NotFound('Chapter not found')
            return chapters
        } catch (error) {
            next(error);
        }
    }
}

module.exports = {
    ChapterController : new ChapterController()
}