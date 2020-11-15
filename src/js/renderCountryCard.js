import getRefs from './get-refs';
import API from './fetchApi';
import { markupCountry, markupCountriesList,renderCountryCovidCard } from './countryMarkup';
 import { debounce } from 'lodash';
import { noticeError } from './infoNotify';

const refs = getRefs()

refs.searchInput.addEventListener('input', debounce(onSearchInputReguest, 500));

function onSearchInputReguest(e) {   

  e.preventDefault();

  const searchQuery = e.target.value.trim();
    if (searchQuery.length === 0) {
        return;
    }

    clearCountryCardContainer();

    API.fetchCountries(searchQuery)
        .then(receivedDataHandler)
        .catch(onFetchError);
}
 
function receivedDataHandler(data) {
    if (data.length > 10) {
        noticeError(
        `Too many matches found: ${data.length}. Please enter a more specific query! `,
        'error',
        );
    } else if (data.status === 404) {
        noticeError(
         `Sorry. No country has been found!`,
         'error',
        );
    } else if (data.length === 1) {
        markupCountry(data);
        getRestData(data[0].name.toLowerCase().split(" ").join(''));
     
    } else if (data.length <= 10) {
        markupCountriesList(data);
     refs.covidCardContainer.classList.add('hide');
    }
}
function clearCountryCardContainer() {
  refs.countryCardContainer.innerHTML = '';
}
function onFetchError() {
    clearCountryCardContainer();
    noticeError(
        `Please enter a country name! `,
        'error',
        );
}
 
function getRestData(country) {
    return fetch(`https://coronavirus-19-api.herokuapp.com/countries/${country}`)
        .then(response => {
            response.json()
                .then(renderCountryCovidCard)
                .catch(err => { console.log('err :>> ', err); })
        });
}
