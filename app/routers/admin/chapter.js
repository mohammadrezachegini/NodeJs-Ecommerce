const router = require('express').Router();
const { ChapterController } = require('../../http/controllers/admin/chapter/chapter.controller');


router.put("/add", ChapterController.addChapter)


module.exports = {
    ChapterAdminApiRoutes : router
}