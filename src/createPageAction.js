import ACTION_PREFIX from './const';

export default ({type, ...rest}) => ({
  type: ACTION_PREFIX + type,
  ...rest
});
