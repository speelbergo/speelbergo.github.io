const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&appid=c1eca29973f45eb7744647e0a82b4f1d"

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    // var currentfahren = (((jsObject.main.temp - 273.15) * 9/5 + 32).toPrecision(2));

    document.getElementById("currant").textContent = jsObject.weather[0].description;
    document.getElementById("current-temp").textContent = jsObject.main.temp;
    document.getElementById("humiditah").textContent = jsObject.main.humidity;
    document.getElementById("windspeed").textContent = jsObject.wind.speed;

let t = jsObject.main.temp;
let s = jsObject.wind.speed;

if ( ( t > 50 ) || (s < 3 ) ) {
var windChill =  (35.74 + (.6215 * t) - (35.75 * (Math.pow(s, .16))) + (.4275 * t * (Math.pow(s, .16)) ) )

  document.getElementById("wxhill").textContent = windChill.toPrecision(2);
}
else 
{
  document.getElementById("wxhill").textContent = "N/A";
}
  });
