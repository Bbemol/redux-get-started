import store from "./store/index.js"
import { addArticleAction, changeCheckboxState } from "./actions/index";
const handleChangeCheckbox = () => {
  console.log(store.getState())
  if(store.getState().checkboxes.checkbox1 && store.getState().checkboxes.checkbox2){
    document.querySelector('.js-submit').disabled = false;
  } else {
    document.querySelector('.js-submit').disabled = true;
  }
}

store.subscribe(handleChangeCheckbox)

document.querySelector('#check1').addEventListener('click', () => {
  store.dispatch(changeCheckboxState({id: 1}))
  
})
document.querySelector('#check2').addEventListener('click', () => {
  store.dispatch(changeCheckboxState({id: 2}))
})
document.querySelector('.js-addarticle').addEventListener('click', () => {
  store.dispatch(addArticleAction({content:'Je suis l\'article'} ))
})

window.store = store;
window.addArticle = addArticleAction;