const { Schema, model } = require('../connection');

const mySchema = new Schema({
    name: String,
    email: String,
    password: String,
    image: Array,
    joinedOn: Date,
    link: String
});

module.exports = model('user', mySchema);