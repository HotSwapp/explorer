var mongoose = require('mongoose')
  , Schema = mongoose.Schema;
 
var TxSchema = new Schema({
  txid: { type: String, lowercase: true, unique: true},
  vin: { type: Array, default: [] },
  vout: { type: Array, default: [] },
  total: { type: Number, default: 0 },
  timestamp: { type: Number, default: 0 },
  blockhash: { type: String },
  blockindex: {type: Number, default: 0},
});

module.exports = mongoose.model('Tx', TxSchema);

/*
vin = [ 'RLUaYda3MHp862W4ftLbYAkXEAGyqChymX', ... , ...]
vout = [ { 'addresses': ['RLUaYda3MHp862W4ftLbYAkXEAGyqChymX',...], 'amount': '0.390625', 'index': 0}, ... , ...]
*/