import ACTION_PREFIX from './const';

const PAGE_ACTION_REGEXP = new RegExp(`^${ACTION_PREFIX}`);

export default () => next => action => {
  const pageId = action._pageId;
  const reducer = action._reducer;
  const result = next(action);
  if (!pageId) {
    return result;
  }
  return Object.assign({
    type: result.type.replace(PAGE_ACTION_REGEXP, ACTION_PREFIX + pageId),
    _pageId: pageId,
    _reducer: reducer
  }, result);
};
