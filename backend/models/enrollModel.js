const { Schema, model, Types } = require('../connection');

const mySchema = new Schema({
    user: { type: Types.ObjectId, ref: 'user' },
    campaign: { type: Types.ObjectId, ref: 'campaign' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = model('enroll', mySchema);