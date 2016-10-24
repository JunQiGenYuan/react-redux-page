'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _const = require('./const');

var PAGE_ACTION_REGEXP = new RegExp('^' + _const.ACTION_PREFIX);

exports.default = function () {
  return function (next) {
    return function (action) {
      var pageId = action._pageId;
      var reducer = action._reducer;
      var result = next(action);
      if (!pageId) {
        return result;
      }
      return Object.assign({
        type: result.type.replace(PAGE_ACTION_REGEXP, _const.ACTION_PREFIX + pageId),
        _pageId: pageId,
        _reducer: reducer
      }, result);
    };
  };
};