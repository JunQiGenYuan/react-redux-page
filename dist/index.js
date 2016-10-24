'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducer = exports.createPageMiddleware = exports.pageConst = exports.createPageAction = exports.connectPage = undefined;

var _connectPage = require('./connectPage');

var _connectPage2 = _interopRequireDefault(_connectPage);

var _createPageAction = require('./createPageAction');

var _createPageAction2 = _interopRequireDefault(_createPageAction);

var _const = require('./const');

var _const2 = _interopRequireDefault(_const);

var _createPageMiddleware = require('./createPageMiddleware');

var _createPageMiddleware2 = _interopRequireDefault(_createPageMiddleware);

var _reducer = require('./reducer');

var _reducer2 = _interopRequireDefault(_reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.connectPage = _connectPage2.default;
exports.createPageAction = _createPageAction2.default;
exports.pageConst = _const2.default;
exports.createPageMiddleware = _createPageMiddleware2.default;
exports.reducer = _reducer2.default;