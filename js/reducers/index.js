import { ADD_ARTICLE, UPDATE_CHECKBOX } from "../constants/action-types";
import { combineReducers } from 'redux'

/*
InitialState will look like this:

const initialState = {
  articles: [],
  checkboxes: {
    checkbox1: document.querySelector('#check1').checked,
    checkbox2: document.querySelector('#check2').checked
  }
};

*/

function updateObject(oldObj, newObj) {
  return Object.assign({}, oldObj, newObj)
}

function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}

function addArticle(articlesState, action) {
  return articlesState.concat(action.payload)
}

function updateCheckbox(checkboxesState, action) {
  const checkboxId = action.payload.id
  const newState = {}
  newState['checkbox'+checkboxId] = document.querySelector('#check'+checkboxId).checked
  return updateObject(checkboxesState, newState)
}

const addArticleReducer = createReducer([], {
  ADD_ARTICLE: addArticle
})

const updateCheckboxReducer = createReducer({
    checkbox1: document.querySelector('#check1').checked,
    checkbox2: document.querySelector('#check2').checked
  },
  {
    UPDATE_CHECKBOX: updateCheckbox
  }
)

const appReducer = combineReducers({
  articles: addArticleReducer,
  checkboxes: updateCheckboxReducer
})

export default appReducer;

