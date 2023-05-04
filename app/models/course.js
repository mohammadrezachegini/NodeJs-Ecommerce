const {default: mongoose} = require("mongoose")
const {CommentSchema} = require("./public.schema")


const EpisodeSchema = new mongoose.Schema({
    title: {type: String, required: true},
    text: {type: String, required: true},
    type: {type: String, default: "free"},
    time: {type: String, required: true},
})

const ChapterSchema = new mongoose.Schema({
    title: {type: String, required: true},
    text: {type: String, required: true},
    episodes: {type: [EpisodeSchema], default: []},
})

const CourseSchema = new mongoose.Schema({

    title : {type: String, required: true},
    short_dec : {type: String, required: true},
    full_desc : {type: String, required: true},
    image : {type: String, required: true},
    tags : {type: [String], required: true},
    category : {type: mongoose.Types.ObjectId, required: true},
    comments : {type: [CommentSchema], default: []},
    like : {type: [mongoose.type.ObjectId], default: []},
    dislike : {type:  [mongoose.type.ObjectId], default: []},
    bookmark : {type:  [mongoose.type.ObjectId], default: []},
    price : {type: Number, default: 0},
    discount : {type: Number, default: 0},
    type : {type: String, required: true, default: "free"},
    time : {type: String, default: "00:00:00"},
    instructor : {type:  mongoose.type.ObjectId,ref: "user",  required: true},
    chapter: {type:  [ChapterSchema],  default: []},
    students: {type:  [mongoose.type.ObjectId],  default: [], ref: "user"},


});

module.exports = {
    CourseModel: mongoose.model("course", CourseSchema)
}