'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

  return Object.assign(_defineProperty({}, pageId, action._reducer(state && state[pageId], action)), state);
};