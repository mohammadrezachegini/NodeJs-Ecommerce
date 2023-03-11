const HomeController = require("../../http/controllers/api/home.contollers");

const router = require("express").Router();

router.post("/", HomeController.indexPage)

module.exports = {
    HomeRoutes : router
}