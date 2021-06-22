const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=c1eca29973f45eb7744647e0a82b4f1d"

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById("current-temp").textContent = jsObject.main.temp;
  });