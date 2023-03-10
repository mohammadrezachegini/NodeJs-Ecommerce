const HomeController = require("../../http/controllers/api/home.contollers");

const router = require("express").Router();

router.get("/", HomeController.indexPage)

module.exports = {
    HomeRoutes : router
}