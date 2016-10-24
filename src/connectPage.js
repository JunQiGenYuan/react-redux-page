import React, { Component, PropTypes } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import uuid from 'uuid';
import { INIT_PAGE } from './const';
import config from './config';
import _createPageAction from './_createPageAction';

export default (reducer, mapStateToProps, mapActionsToProps) => Comp => {
  const pageId = uuid.v4().toUpperCase();

  class PageConnected extends Component {

    componentDidMount() {
      this.props._initPage();
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
    page: config.getPageFromState(state, pageId),
    ...mapStateToProps(state)
  });

  function initPageActionCreator() {
    return _createPageAction(pageId, reducer)(INIT_PAGE);
  }

  const mapPageActionsToProps = dispatch => {
    const pageDispatch = action =>
      dispatch(Object.assign({_pageId: pageId, _reducer: reducer}, action));
    const pageActions = bindActionCreators({_initPage: initPageActionCreator}, dispatch);
    const customActions = mapActionsToProps(dispatch, pageDispatch)
    return Object.assign(pageActions, customActions);
  };

  return connect(mapPageStateToProps, mapPageActionsToProps)(PageConnected);
};
