const initialState = {
    articles: []
  };
  
  function rootReducer(state = initialState, action) {

    if(action.type === ADD_ARTICLE) {
      newState = Object.assign({}, state, {
        articles: state.articles.concat(action.payload)
      })
      return newState
    }
    return state;
  };
  
  export default rootReducer;