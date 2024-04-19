const { Schema, model } = require('../connection');

const mySchema = new Schema({
    username : {type : String, required : true},
    email:String,
    password:String,
    image : Array,
    postedOn : Date,
});

module.exports = model('user', mySchema);