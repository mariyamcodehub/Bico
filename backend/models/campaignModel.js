const { Schema, model, Types } = require('../connection');

const mySchema = new Schema({
    name: String,
    title: String,
    description: String,
    image: Array,
    incentive: { type: String, default: 0 },
    requiredFollowers: Number,
    postedOn: { type: Date, default: Date.now }
});

module.exports = model('campaign', mySchema);