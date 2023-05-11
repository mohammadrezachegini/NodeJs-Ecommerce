const { default: getVideoDurationInSeconds } = require("get-video-duration")
const { getTime } = require("../../../../../utils/function")
const { createEpisodeSchema } = require("../../../validations/admin/course.schema")
const {StatusCodes:HttpStatus} = require("http-status-codes")
const Controller = require("../../controllers")


class EpisodeController extends Controller {
    
    async addEpisode(req, res, next) {
        try {
            const {title,text, chapterID, courseID, filename, fileUploadPath} = await createEpisodeSchema.validateAsync(req.body)
            const videoAddress = path.join(fileUploadPath, filename).replace(/\\/g, "/")
            const videoUrl = "http://localhost:5000/" + videoAddress
            const seconds = await getVideoDurationInSeconds(videoUrl)
            const time = getTime(seconds)
            return res.status(HttpStatus.CREATED).json({
                title,text, chapterID, courseID, filename, fileUploadPath,time
            })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = {
    EpisodeController : new EpisodeController()
}