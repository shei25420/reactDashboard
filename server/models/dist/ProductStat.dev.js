"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ProductStatSchema = new _mongoose["default"].Schema({
  productId: String,
  yearlySalesTotal: Number,
  yearlyTotalSoldUnits: Number,
  year: Number,
  monthlyData: [{
    month: String,
    totalSales: Number,
    totalUnits: Number
  }],
  dailyData: {
    date: String,
    totalSales: Number,
    totalUnits: Number
  }
}, {
  timestamps: true
});

var ProductStat = _mongoose["default"].model("ProductStat", ProductStatSchema);

var _default = ProductStat;
exports["default"] = _default;