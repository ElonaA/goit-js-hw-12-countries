import countryCardTemplate from '../templates/countries-card.hbs';
import countriesListTemplate from '../templates/countriesList.hbs';
import covidCardTemplate from '../templates/covid-stats.hbs';

import getRefs from './get-refs';
import '../css/country.scss';

const refs = getRefs()

export function markupCountry(country) {
    const markup = countryCardTemplate(country);
  renderCountryCard(markup);

}

export function markupCountriesList(countries) {
    const markup = countriesListTemplate(countries);
    renderCountryCard(markup);
}
export function renderCountryCovidCard(country) {
    const markup = covidCardTemplate(country);
  refs.covidCardContainer.innerHTML = markup;
  
}

function renderCountryCard(markup) {
  refs.countryCardContainer.classList.remove('show');
  refs.covidCardContainer.classList.remove('hide');
 
   setTimeout(() => {
     refs.countryCardContainer.innerHTML = markup;
     refs.countryCardContainer.classList.add('show');
       refs.covidCardContainer.classList.add('show');
    }, 300);
    
}