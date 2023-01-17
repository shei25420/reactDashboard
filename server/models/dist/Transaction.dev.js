"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TransactionSchema = new _mongoose["default"].Schema({
  userId: String,
  cost: String,
  products: {
    type: [_mongoose["default"].Types.ObjectId],
    of: Number
  }
}, {
  timestamps: true
});

var Transaction = _mongoose["default"].model("Transaction", TransactionSchema);

var _default = Transaction;
exports["default"] = _default;