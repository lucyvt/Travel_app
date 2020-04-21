/* Global Variables */
let baseURL = 'http://api.geonames.org/searchJSON?q=';
let userName = '&maxRows=10&username=lucytodd96';
let weatherApiURL = 'https://api.weatherbit.io/v2.0'
let forecast = '/forecast/daily?'
let current = '/current?'
let APIKey = '&key=' + 'adacfc74bd4544efb229106ed8762086'


// Create an on click action for the generate button

document.getElementById("generate").addEventListener("click", performAction);

function performAction(e) {
  // In here we can add the photo and update the inner HTML of the photo section.
  getTripInfo();
}

function getTripInfo(){
  //get the inputted values
  const city = document.getElementById('city').value;
  // since we need to be able to evaluate when the trip is taking place with respect to the current date, lets also get the time (since jan2001)
  const date = new Date(document.getElementById('date').value).getTime();
  // get the days till trip
  const days = Client.daysCount(date);
  //need to now use the getLatAndLon to put into next API
  getLatAndLon(baseURL, city, userName)
    .then(function(data){
      console.log(data);
      let lat = 'lat=' + data.geonames[0].lat;
      let lng = '&lon=' + data.geonames[0].lng;
      let country = data.geonames[0].countryName;
      console.log('lat=', lat, 'lng= ', lng, 'country =', country);
    // using these we can now get the weather from the API using the long and lat
    document.getElementById('day').innerHTML = 'Your trip to ' + city + ' is ' + days + ' days away'
    if(days <= 7){
      console.log(current);
      getWeather('http://localhost:8081/trip/weather', data = {url: weatherApiURL + current + lat + lng + APIKey})
      .then(
      function (data) {
      console.log(data);
      })
    } else {
      console.log(forecast);
      getWeather('http://localhost:8081/trip/weather', data = {url: weatherApiURL + forecast + lat + lng + APIKey})
      .then(
      function (data) {
      console.log(data);
      })
    }
    
    })
}


// need to fetch the api to get the lattitude and the longitude to then send into next one
// API 1
const getLatAndLon = async (baseURL, city, userName) => {
  const res = await fetch(baseURL + city + userName)
  try {
      const data = await res.json();
      console.log(data)
      return data;
  } catch (error) {
      console.log('error', error)
  }
}

// need to get weather 
// API 2
const getWeather = async (url = '', data = {}) => {
  console.log(data);
  const response = await fetch(url, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
  });

  try {
      const newData = await response.json();
      console.log(newData);
      return newData;
  } catch (error) {
      console.log("error", error);
  }
}


export { performAction };
