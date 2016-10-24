'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _const = require('./const');

exports.default = function (action) {
  return Object.assign({
    type: _const.ACTION_PREFIX + action.type
  }, action);
};