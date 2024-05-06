const { Schema, model, Types } = require('../connection');

const mySchema = new Schema({
    brand: { type: Types.ObjectId, ref: 'brand' },
    title: String,
    description: String,
    coverImage: String,
    incentive: { type: String, default: 0 },
    requiredFollowers: Number,
    postedOn: { type: Date, default: Date.now }
});

module.exports = model('campaign', mySchema);