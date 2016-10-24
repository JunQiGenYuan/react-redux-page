'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  var pageId = action._pageId;
  if (!pageId) {
    return state;
  }
  if (!action._reducer) {
    window.console.warn('No Reducer in page action. Please check the connectPage.');
    return state;
  }

  return _config2.default.setPageToPages(state, pageId, action._reducer(state && state[pageId], action));
};