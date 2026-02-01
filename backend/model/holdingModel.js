const {model} = require('mongoose');

const HoldingSchema = require('../schemas/HoldingScehma');

const HoldingModel =  new model('Holding', HoldingSchema);

module.exports = {HoldingModel};
