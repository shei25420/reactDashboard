"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var UserSchema = new _mongoose["default"].Schema({
  name: {
    type: String,
    required: true,
    min: 2,
    max: 100
  },
  email: {
    type: String,
    required: true,
    unique: true,
    max: 50
  },
  password: {
    type: String,
    required: true,
    min: 5
  },
  city: String,
  state: String,
  country: String,
  occupation: String,
  phoneNumber: String,
  transactions: Array,
  role: {
    type: String,
    "enum": ["user", "admin", "superadmin"],
    "default": "admin"
  }
}, {
  timestamps: true
});

var User = _mongoose["default"].model("User", UserSchema);

var _default = User;
exports["default"] = _default;