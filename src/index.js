import './styles.css';

import {debounce} from 'lodash'
import fetch from './fetch.js';
import country from './handlebar/item.hbs'
import list from './handlebar/item.hbs'
import {error} from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

const inputText = document.querySelector('#input');
const itemText = document.querySelector('#box');

inputText.addEventListener('input', debounce(sergCountry, 1000));


function sergCountry() {
    const searchValue = input.value;
    if (searchValue === ''){
        return;
    }
    fetch(searchValue).then((data) => {
        if (!data) {
            error({ text: "Not found" });
            return;
            }
        if (data.length !== 1 && data.length<= 10  ){
        list(data)
        itemText.insertAdjacentHTML('beforeend', list(data))
    }
    if(data.length === 1){
       country(data);
       itemText.insertAdjacentHTML('beforeend', country(data))
    }
    if(data.length> 10) {
            error({text: 'To many requests'})
        }
    })
    if (searchValue === '') {
        itemText.innerHTML = '';
    }
}