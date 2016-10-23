import { ACTION_PREFIX } from './const';

export default (action) => {
  return Object.assign({
    type: ACTION_PREFIX + action.type
  }, action);
};
