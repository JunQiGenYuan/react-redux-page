'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _const = require('./const');

function concatActionTypePrefixIfNeed(actionType) {
  return actionType && actionType.indexOf(_const.ACTION_PREFIX) !== 0 ? _const.ACTION_PREFIX + 'actionType' : actionType;
}

exports.default = function (pageId, reducer) {
  return function (action) {
    var _action = action;
    if (typeof action === 'string') {
      _action = {
        type: action
      };
    }

    return Object.assign({}, _action, {
      type: concatActionTypePrefixIfNeed(_action.type),
      _pageId: pageId,
      _reducer: reducer
    });
  };
};