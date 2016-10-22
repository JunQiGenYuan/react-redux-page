import React, { Component, PropTypes } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import generateId from '../utils/generateId';
import { INIT_PAGE } from './const';
import _createPageAction from './_createPageAction';

export default (reducer, mapStateToProps, actions) => Comp => {
  const pageId = generateId().toUpperCase();

  class PageConnected extends Component {

    componentDidMount() {
      this.props.actions._initPage();
    }

    render() {

      return (
        <Comp {...this.props} />
      );
    }
  }

  PageConnected.propTypes = {
    actions: PropTypes.object.isRequired
  };

  const mapPageStateToProps = state => ({
    page: state.pages && state.pages[pageId],
    ...mapStateToProps(state)
  });

  function initPageActionCreator() {
    return _createPageAction(pageId, reducer)(INIT_PAGE);
  }

  const mapActionsToProps = dispatch => {
    /* Populated by react-webpack-redux:action */
    if (!actions) {
      return {};
    }
    const pageDispatch = action =>
      dispatch(Object.assign({_page: pageId, _reducer: reducer}, action));
    const pageActions = Object.assign({_initPage: initPageActionCreator}, actions);
    const actionMap = { actions: bindActionCreators(pageActions, pageDispatch) };
    return actionMap;
  };

  return connect(mapPageStateToProps, mapActionsToProps)(PageConnected);
};
