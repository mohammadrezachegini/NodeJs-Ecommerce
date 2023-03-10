const {default: mongoose} = require("mongoose")

const ProductSchema = new mongoose.Schema({

    title : {type: String, required: true},
    short_dec : {type: String, required: true},
    full_desc : {type: String, required: true},
    images : {type: [String], required: true},
    tags : {type: [String], required: true},
    category : {type: mongoose.Types.ObjectId, required: true},
    comments : {type: [], default: []},
    like : {type: [mongoose.type.ObjectId], default: []},
    dislike : {type:  [mongoose.type.ObjectId], default: []},
    bookmark : {type:  [mongoose.type.ObjectId], default: []},
    price : {type: Number, default: 0},
    discount : {type: Number, default: 0},
    count : {type: Number},
    type : {type: String, required: true},
    time : {type: String},
    format : {type: String},
    instructor : {type:  mongoose.type.ObjectId, required: true},
    features : {type: Object, default: {
        length: "",
        height: "",
        width: "",
        weight:"",
        color: [],
        models: [],
        madein: ""
    }},

});

module.exports = {
    ProductModel: mongoose.model("product", ProductSchema)
}