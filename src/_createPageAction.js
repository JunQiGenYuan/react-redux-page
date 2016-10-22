import { ACTION_PREFIX } from './const';

function concatActionTypePrefixIfNeed(actionType) {
  return actionType && actionType.indexOf(ACTION_PREFIX) !== 0
    ? `${ACTION_PREFIX}actionType`
    : actionType;
}

export default (pageId, reducer) => action => {
  let _action = action;
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
