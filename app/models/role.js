const mongoose = require('mongoose')

const RoleSchema = new mongoose.Schema({
    title: {type: String, unique: true},
    permission: {type: [mongoose.Types.ObjectId], ref: 'permissions', default:[]}},
    {
        toJSON: {virtual: true}
    })

module.exports = {
    RoleModel: mongoose.model('role', RoleSchema) 
}