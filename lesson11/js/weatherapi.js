const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=c1eca29973f45eb7744647e0a82b4f1d"

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    // console.log(jsObject);

    var fahren = ((jsObject.main.temp - 273.15) * 9/5 + 32)

    document.getElementById("current-temp").textContent = fahren;

  });

  