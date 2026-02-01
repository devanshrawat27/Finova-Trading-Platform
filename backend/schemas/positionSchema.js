const {Schema} = require('mongoose');
const positionSchema = new Schema({
    product:{ type: String, required: true },
    name: { type: String, required: true },
    qty: { type: Number, required: true },
    avg: { type: Number, required: true },
    price: { type: Number, required: true },
    net: { type: String, required: true },
    day: { type: String, required: true },
    isLoss:{ type: Boolean, required: false },
}, { timestamps: true });

module.exports = positionSchema;