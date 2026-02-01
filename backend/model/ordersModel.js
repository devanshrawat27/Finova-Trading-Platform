const {model} = require('mongoose');

const OrdersSchema = require('../schemas/orderSchema');

const OrdersModel =new  model('Order', OrdersSchema);

module.exports = {OrdersModel};