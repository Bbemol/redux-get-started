import { ADD_ARTICLE, UPDATE_CHECKBOX } from "../constants/action-types";

const initialState = {
  articles: [],
  checkbox1: document.querySelector('#check1').checked,
  checkbox2: document.querySelector('#check2').checked
};

const maFunc = (payload) => {
  console.log(payload)
  
}

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    maFunc(action.payload)
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  if(action.type === UPDATE_CHECKBOX) {
    const checkboxId = action.payload.id
    const newState = {}
    newState['checkbox'+checkboxId] = document.querySelector('#check'+checkboxId).checked
    return Object.assign({}, state, newState)
  }
  return state;
}

export default rootReducer;
