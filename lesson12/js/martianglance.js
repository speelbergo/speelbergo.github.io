// const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5199944&units=imperial&appid=c1eca29973f45eb7744647e0a82b4f1d"

   const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=40.69&lon=-80.01&units=imperial&appid=c1eca29973f45eb7744647e0a82b4f1d"

   

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {

    console.log(jsObject);


    document.getElementById("currant").textContent = jsObject.current.weather[0].description;
    document.getElementById("current-temp").textContent = jsObject.current.temp;
    document.getElementById("humiditah").textContent = jsObject.current.humidity;

    document.getElementById("friday").textContent = jsObject.daily[0].temp.day;
    document.getElementById("saturday").textContent = jsObject.daily[1].temp.day;
    document.getElementById("sunday").textContent = jsObject.daily[2].temp.day;

    // document.getElementById("windspeed").textContent = jsObject.wind.speed;

// let t = jsObject.main.temp;
// let s = jsObject.wind.speed;

// if ( ( t > 50 ) || (s < 3 ) ) {
// var windChill =  (35.74 + (.6215 * t) - (35.75 * (Math.pow(s, .16))) + (.4275 * t * (Math.pow(s, .16)) ) )

//   document.getElementById("wxhill").textContent = windChill.toPrecision(2);
// }
// else 
// {
//   document.getElementById("wxhill").textContent = "N/A";
// }

  });
