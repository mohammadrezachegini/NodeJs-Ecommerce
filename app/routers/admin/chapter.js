const router = require('express').Router();
const { ChapterController } = require('../../http/controllers/admin/chapter/chapter.controller');


router.put("/add", ChapterController.addChapter)
router.get("/list/:id", ChapterController.getChapterById)
router.patch("/remove/:id", ChapterController.removeChapterById)



module.exports = {
    ChapterAdminApiRoutes : router
}