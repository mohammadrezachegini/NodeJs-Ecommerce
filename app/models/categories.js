const {default: mongoose} = require("mongoose")

const CategoriesSchema = new mongoose.Schema({

    title: {type: String, required: true}

});

module.exports = {
    CategoriesModel: mongoose.model("category", CategoriesSchema)
}