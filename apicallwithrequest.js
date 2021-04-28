//API KEY weather = ff823831ba5d50c95016c10a787ffa3b
//API KEY Geo = pk.eyJ1Ijoic2FnYXJ0aG9yYXQiLCJhIjoiY2tuemh1MWI4MDU0ZTJ3dGR6NXRqZjhwbiJ9.NCegOdMl19E2JjED0uW_dQ
const request = require('request');

//Following API call will get Lattitue and Longitude to pass to Weather API 

const url_geomap = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Melbourne.json?access_token=pk.eyJ1Ijoic2FnYXJ0aG9yYXQiLCJhIjoiY2tuemh1MWI4MDU0ZTJ3dGR6NXRqZjhwbiJ9.NCegOdMl19E2JjED0uW_dQ&limit=1%27;';

//GETTING THE GEOMAP DATA
//request will take 2 params. First is the URL in object format and 2nd is the callback function that runs once we have data back from http req

request({url: url_geomap, json: true},(error,response)=>{

  console.log(response.body)

  if(error){

    console.log ("Unable to connect to Geomap services");

  }
  else if(response.body.features.length == 0){

    console.log("INvalid query: " + response.body.query[0]);
  }
  else {
  const data = response.body.features[0];
  //const data = JSON.parse(response.body); json:true is already parsing body in json
  console.log("The place is " + data.place_name + " with latt/long of: " + data.center[0] + "/" + data.center[1]);
  const lattitude = data.center[0];
  const longitude = data.center[1]
  }
})

const url_weather = 'http://api.weatherstack.com/current?access_key=ff823831ba5d50c95016c10a787ffa3b&query=Melbourne&units=m';
//const url_weather = 'http://api.weatherstack.com/current?access_key=ff823831ba5d50c95016c10a787ffa3b&query';
//GETTING THE WEATHER DATA

request({url: url_weather, json: true},(error,response)=>{

  if(error){

    console.log ("Unable to connect to weather services");

  }
  else if (response.body.error) {

    console.log("Error Code " + response.body.error.code + ". " + response.body.error.info);

  }
  else {
  const data = response.body.current;
  //const data = JSON.parse(response.body); json:true is already parsing body in json
  console.log("The weather is " + data.weather_descriptions[0] + " with temprature: " + data.temperature + " degrees Celcius");
  }

})