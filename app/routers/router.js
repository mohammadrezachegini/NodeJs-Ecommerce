const redisClient = require("../../utils/init_redis");
const { HomeRoutes }  = require("./api");
const { userAuthRoutes } = require("./user/auth");
const {DeveloperRoutes} = require("../routers/developers.routes");
const router = require("express").Router();

(async() => {
    await redisClient.set("key", "value");
    const value = await redisClient.get("key");
    console.log(value);
})()

router.use("/user", userAuthRoutes)
router.use("/", HomeRoutes)
router.use("/developer", DeveloperRoutes)

module.exports = {
    AllRoutes : router
}