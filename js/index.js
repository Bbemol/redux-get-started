import store from "./store/index.js"
import { addArticle, changeCheckboxState } from "./actions/index";
const handleChangeCheckbox = () => {
  console.log('checkbox changed')
  if(store.getState().checkbox1 && store.getState().checkbox2){
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

window.store = store;
window.addArticle = addArticle;