

function fetchCountries(searchQuery) {
  const BASE_URL = 'https://restcountries.eu/rest/v2';
  return fetch(`${BASE_URL}/name/${searchQuery}`, {
    headers: {
      Accept: 'application/json',
    },
  }).then(response => {
    if (response.ok || response.status === 404) return response.json();
    throw new Error('Error fetching data');
  });
}

export default { fetchCountries };