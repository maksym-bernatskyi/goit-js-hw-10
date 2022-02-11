import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const refs = {
    input: document.querySelector('#search-box'),
    country_list: document.querySelector('.country-list'),
    country_info: document.querySelector('.country-info')
}

refs.input.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(evt) {

}

function clearPage() {
    refs.country_list.innerHTML = '';
    refs.country_info.innerHTML = '';
}

function inputCheckingValue(value) {
    if (value === '') {
        Notiflix.Notify.info("Please entry country name!")
    }
}