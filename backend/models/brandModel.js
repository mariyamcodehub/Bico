const { Schema, model } = require('../connection');

const mySchema = new Schema({
    name: String,
    email: String,
    password: String,
    cpassword: String,
    website: String,
    image: Array
});

module.exports = model('brand', mySchema);