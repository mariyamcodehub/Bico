const { Schema, model } = require('../connection');

const mySchema = new Schema({
    name : String,
    title:String,
    description:String,
    Image : Array,
    postedOn : Date,
    incentive : {type : String, default : 0}
});

module.exports = model('campaign', mySchema);