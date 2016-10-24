import config from './config';

export default initialState => (state=initialState, action) => {
  const pageId = action._pageId;
  if (!pageId) {
    return state;
  }
  if (!action._reducer) {
    window.console.warn('No Reducer in page action. Please check the connectPage.');
    return state;
  }

  return config.setPageToPages(state, pageId, action._reducer(state && state[pageId], action))
};
