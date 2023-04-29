const Joi = require("@hapi/joi")

const {MongoIDPattern} = require("../../../../utils/constans")

const createBlogSchema = Joi.object({
    title: Joi.string().min(3).max(255).error("Your title is invalid"),
    text: Joi.string().error("Your text is invalid"),
    short_text: Joi.string().min(3).max(255).error("Your text is invalid"),
    image: Joi.string().error("Your image is invalid"),
    tags: Joi.array().min(0).max(20).error("Your tags cannot be more than 20 characters"),
    category: Joi.string().pattern(MongoIDPattern).error("Your category is invalid")
});

const updateCategorySchema = Joi.object({
    title: Joi.string().min(3).max(30).error("Your title is invalid"),

});

module.exports = {
    createBlogSchema,
    updateCategorySchema
}