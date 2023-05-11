const { getVideoDurationInSeconds } = require('get-video-duration');
const { getTime, getVideoDuration } = require("../../../../../utils/function")
const { createEpisodeSchema } = require("../../../validations/admin/course.schema")
const {StatusCodes:HttpStatus} = require("http-status-codes")
const Controller = require("../../controllers")
const { CourseModel } = require("../../../../models/course")
const createHttpError = require("http-errors")
const path = require("path")
const CircularJSON = require('circular-json');
const { ObjectIdValidator } = require("../../../validations/public.validator");
const episode = require('../../../../routers/admin/episode');

class EpisodeController extends Controller {
    
    async addEpisode(req, res, next) {
        try {
            const {title,text,type, chapterID, courseID, filename, fileUploadPath} = await createEpisodeSchema.validateAsync(req.body)
            const videoAddress = path.join(fileUploadPath, filename).replace(/\\/g, "/")
            console.log("VIDEO ADDRESS", videoAddress);
            const videoUrl = "http://localhost:5000/" + videoAddress
            console.log("VIDEO URL", videoUrl);
            const seconds = await getVideoDuration(videoUrl)
            console.log("SECONDS " + seconds);
            const time = getTime(seconds)
            console.log("TIME " + time);
            const episode = {

                title,
                text,
                type,
                time,
                videoAddress
            }
            console.log("EPISODE", episode);
            const createEpisodeResult = await CourseModel.updateOne({
                _id: courseID,
                "chapters._id": chapterID},
                {$push: {
                    "chapters.$.episodes": episode
                }})
            console.log("CREATE EPISODE RESULT", createEpisodeResult);
            if(createEpisodeResult.modifiedCount == 0) throw new createHttpError.InternalServerError("Episode not added")
            const serializedResult = CircularJSON.stringify(createEpisodeResult);

            return res.status(HttpStatus.CREATED).json({
                statusCode: HttpStatus.CREATED,
                data:{
                    message: "Episode added successfully",
                    createEpisodeResult: serializedResult
                }
            })
        } catch (error) {
            next(error)
        }
    }
    async removeEpisodeByID(req, res, next) {
        try {
            const {id: id} = await ObjectIdValidator.validateAsync({id: req.params.id})
            
            const removeEpisodeResult = await CourseModel.updateOne({
                "chapters.episodes._id": id},
                {$pull: {
                    "chapters.$.episodes": {
                        _id : id
                    }
                }})
            if(removeEpisodeResult.modifiedCount == 0) throw new createHttpError.InternalServerError("Episode not deleted")

            return res.status(HttpStatus.OK).json({
                statusCode: HttpStatus.OK,
                data:{
                    message: "Episode deleted successfully",
                    removeEpisodeResult 
                }
            })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = {
    EpisodeController : new EpisodeController()
}