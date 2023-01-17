"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ProductSchema = new _mongoose["default"].Schema({
  name: String,
  price: Number,
  description: String,
  category: String,
  rating: Number,
  supply: Number
}, {
  timestamps: true
});

var Product = _mongoose["default"].model("Product", ProductSchema);

var _default = Product;
exports["default"] = _default;