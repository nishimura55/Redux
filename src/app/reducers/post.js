const initialState = {
  posts: []
};

export default (state = initialState, action) => {
  switch(action.type) {
    case 'add_post':
      return {
        posts: [
          ...state.posts,
          {
            id: action.id,
            text: action.text,
          },
        ]
      };
    default:
      return state;
  }
};
