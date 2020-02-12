
import { ADD_ARTICLE, UPDATE_CHECKBOX } from "../constants/action-types";

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}

export function changeCheckboxState(payload) {
  return {type: UPDATE_CHECKBOX, payload}
}