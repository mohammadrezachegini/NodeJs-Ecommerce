const router = require('express').Router();
const { ChapterController } = require('../../http/controllers/admin/chapter/chapter.controller');


router.put("/add", ChapterController.addChapter)
router.get("/list/:id", ChapterController.getChapterById)



module.exports = {
    ChapterAdminApiRoutes : router
}