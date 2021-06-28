const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=c1eca29973f45eb7744647e0a82b4f1d"

fetch(forecastURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {

console.log(jsonObject);
    const prestonweather = jsonObject["list"];

    for (let i = 0; i < prestonweather.length; i++) { 

    if (prestonweather[i].dt_txt.includes("18:00:00"))

    {
      let card = document.createElement("section");
      let temp = document.createElement("p")

      temp.textContent =  prestonweather[i].main.temp;

      card.appendChild(temp);


      document.querySelector("div.flex-col").appendChild(card);


    }

  }

  });



