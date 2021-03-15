const initialState = {
  count: 0,
};

export default (state = initialState, action) => {
  switch(action.type) {
    case 'increment_count':
      return {
        count: state.count + 1,
      };
    case 'reset_count':
      return {
        count: 0,
      };
    default:
      return state;
  }
};
