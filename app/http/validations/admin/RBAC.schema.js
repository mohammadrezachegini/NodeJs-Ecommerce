const Joi = require("@hapi/joi")
const { MongoIDPattern } = require("../../../../utils/constans")

const addRoleSchema = Joi.object({
    title: Joi.string().min(3).max(30).error(new Error("Your role is invalid")),
    permissions: Joi.array().items(Joi.string().pattern(MongoIDPattern)).error(new Error("Your permission is invalid")),
});



module.exports = {
    addRoleSchema,
}