const MAIN_URL = 'https://restcountries.com/v3.1/name';

export function fetchCountries(name) {
    return fetch(`${MAIN_URL}/${name}/?fields=name,capital,population,flags,languages`)
        .then(response => {
        return response.json();
        })
        .catch(() => {
        console.log('Error')
    });
}