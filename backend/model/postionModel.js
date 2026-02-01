const mongoose = require('mongoose');
const positionSchema = require('../schemas/positionSchema');

const PositionModel = mongoose.model('Position', positionSchema);
module.exports = { PositionModel };