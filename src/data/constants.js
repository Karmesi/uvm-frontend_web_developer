const apisData = {
  // Doc: https://jsonplaceholder.typicode.com/
  comments: {
    list: 'https://jsonplaceholder.typicode.com/comments/',
  },
  // Doc: https://jsonplaceholder.typicode.com/
  users: {
    list: 'https://jsonplaceholder.typicode.com/users',
  },
  // Doc: https://www.thecocktaildb.com/api.php
  mixology: {
    search: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s={{query}}', // Sample: https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
  },
  // Doc: https://www.visualcrossing.com/resources/documentation/weather-api/timeline-weather-api/
  weather: {
    search: 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/{{query}}/{{date}}/?key={{key}}', // Sample: https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/New york/2022-08-11/?key=8WFYD5H5YGXV6FAX64NDJASCZ
    key: '8WFYD5H5YGXV6FAX64NDJASCZ',
  },
};

export default apisData;
