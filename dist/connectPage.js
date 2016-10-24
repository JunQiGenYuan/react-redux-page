'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

var _const = require('./const');

var _createPageAction2 = require('./_createPageAction');

var _createPageAction3 = _interopRequireDefault(_createPageAction2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (reducer, mapStateToProps, mapActionsToProps) {
  return function (Comp) {
    var pageId = _uuid2.default.v4().toUpperCase();

    var PageConnected = function (_Component) {
      _inherits(PageConnected, _Component);

      function PageConnected() {
        _classCallCheck(this, PageConnected);

        return _possibleConstructorReturn(this, (PageConnected.__proto__ || Object.getPrototypeOf(PageConnected)).apply(this, arguments));
      }

      _createClass(PageConnected, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          this.props._initPage();
        }
      }, {
        key: 'render',
        value: function render() {

          return _react2.default.createElement(Comp, this.props);
        }
      }]);

      return PageConnected;
    }(_react.Component);

    PageConnected.propTypes = {
      actions: _react.PropTypes.object.isRequired
    };

    var mapPageStateToProps = function mapPageStateToProps(state) {
      return _extends({
        page: state.pages && state.pages[pageId]
      }, mapStateToProps(state));
    };

    function initPageActionCreator() {
      return (0, _createPageAction3.default)(pageId, reducer)(_const.INIT_PAGE);
    }

    var mapPageActionsToProps = function mapPageActionsToProps(dispatch) {
      var pageDispatch = function pageDispatch(action) {
        return dispatch(Object.assign({ _page: pageId, _reducer: reducer }, action));
      };
      var pageActions = (0, _redux.bindActionCreators)({ _initPage: initPageActionCreator }, dispatch);
      var customActions = mapActionsToProps(dispatch, pageDispatch);
      return Object.assign(pageActions, customActions);
    };

    return (0, _reactRedux.connect)(mapPageStateToProps, mapPageActionsToProps)(PageConnected);
  };
};