const {default: mongoose} = require("mongoose")

const UserSchema = new mongoose.Schema({

    first_name: {type:String},
    last_name: {type:String},
    username: {type:String, lowercase: true},
    mobile: {type:String, required: true},
    email: {type:String, lowercase: true},
    password: {type:String},
    otp: {type: Object, default: {
        code: 0,
        expiresIn: 0 //new Date().getDate() + 120
    }},
    bills: {type: [], default: []},
    discount: {type: Number, default: 0},
    birthday: {type: String},
    roles: {type: [String], default: ["USER"]}

});

module.exports = {
    UserModel: mongoose.model("user", UserSchema)
}