import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';
import countryCard from './country-card.hbs';
import matchingCountries from './matching-countries.hbs';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const refs = {
    input: document.querySelector('#search-box'),
    country_list: document.querySelector('.country-list'),
    country_info: document.querySelector('.country-info'),
}

refs.input.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(evt) {
    const value = evt.target.value.trim();
    clearPage();

    fetchCountries(value).then(country => {
        const countryLength = country.length;

        inputCheckingValue(value);
        clearPage();

        if (!countryLength) {
            Notiflix.Notify.failure("Oops, there is no country with that name");

        } else if (countryLength >= 2 && countryLength <= 10) {
            refs.country_list.insertAdjacentHTML('beforeend', matchingCountries(country));

        } else if (countryLength === 1) {
            refs.country_info.insertAdjacentHTML('beforeend', countryCard(country));

        } else if (countryLength > 10) {
            Notiflix.Notify.info("Too many matches found. Please enter a more specific name.");
        }
    })
}

function clearPage() {
    refs.country_list.innerHTML = '';
    refs.country_info.innerHTML = '';
}

function inputCheckingValue(value) {
    if (value === '') {
        Notiflix.Notify.info("Please entry country name!");
    }
}