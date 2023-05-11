const { createEpisodeSchema } = require("../../../validations/admin/course.schema")
const Controller = require("../../controllers")


class EpisodeController extends Controller {
    
    async addEpisode(req, res, next) {
        try {
            const {title,time,text, chapterID, courseID} = await createEpisodeSchema.validateAsync(req.body)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = {
    EpisodeController : new EpisodeController()
}