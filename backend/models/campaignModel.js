const { Schema, model } = require('../connection');

const mySchema = new Schema({
    name : String,
    title:String,
    description:String,
<<<<<<< HEAD
    coverImage : Array,
=======
    Image : Array,
>>>>>>> 1e1488bc9e4dcea8a7a1adb2bdded739ed891464
    postedOn : Date,
    incentive : {type : String, default : 0}
});

module.exports = model('campaign', mySchema);