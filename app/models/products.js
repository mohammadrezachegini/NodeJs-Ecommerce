const {default: mongoose} = require("mongoose")
const {CommentSchema} = require("./public.schema")
const ProductSchema = new mongoose.Schema({

    title : {type: String, required: true},
    short_dec : {type: String, required: true},
    full_desc : {type: String, required: true},
    images : {type: [String], required: true},
    tags : {type: [String], required: true},
    category : {type: mongoose.Types.ObjectId, required: true},
    comments : {type: [CommentSchema], default: []},
    like : {type: [mongoose.Types.ObjectId], default: []},
    dislike : {type:  [mongoose.Types.ObjectId], default: []},
    bookmark : {type:  [mongoose.Types.ObjectId], default: []},
    price : {type: Number, default: 0},
    discount : {type: Number, default: 0},
    count : {type: Number},
    type : {type: String, required: true},
    time : {type: String},
    format : {type: String},
    instructor : {type:  mongoose.Types.ObjectId, required: true},
    features : {type: Object, default: {
        length: "",
        height: "",
        width: "",
        weight:"",
        color: [],
        models: [],
        madein: ""
    }}

});
ProductSchema.index({title: "text", short_text: "text", text: "text",
module.exports = {
    ProductModel: mongoose.model("product", ProductSchema)
}