// const httpClient = require('http-client');

// const API_KEY = 'a85f761421msh65a962779ee7936p16e90ajsn6148cf831c75';
// const API_URL = 'https://cricket-live-data.p.rapidapi.com/series';

// function getCricketData() {
//   try {
//     const options = {
//       url: API_URL,
//       method: 'GET',
//       headers: {
//         'X-RapidAPI-Key': API_KEY,
//       },
//     };

//     const response = await httpClient.fetch(options);
//     const data = JSON.parse(response.body);

//     const seriesList = data.map((series) => {
//       return {
//         id: series.id.toString(),
//         name: series.name,
//       };
//     });

//     return {
//       series: seriesList,
//     };
//   } catch (error) {
//     console.error('Error fetching cricket data:', error);
//     throw error;
//   }
// }

// module.exports = {
//   getCricketData: getCricketData,
// };

var http = require('http')
var console = require('console')
var config = require('config')
module.exports.function = function getCricketData() {
  // Instead of hard coding the URL, you can read the remote.url value
  // from capsule.properties, this would look like this
  // var response = http.getUrl(config.get('remote.url') + '/shoes', { format: 'json' });

  var response = http.getUrl('https://cricket-live-data.p.rapidapi.com/series', { format: 'json' });
  console.log ("response = " + response)
  return response;
}