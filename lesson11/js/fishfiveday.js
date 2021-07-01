const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5585010&units=imperial&appid=c1eca29973f45eb7744647e0a82b4f1d"

fetch(forecastURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {

//console.log(jsonObject);
    const prestonweather = jsonObject["list"];

    for (let i = 0; i < prestonweather.length; i++) { 

    if (prestonweather[i].dt_txt.includes("18:00:00"))

    {
      let card = document.createElement("section");
      let title = document.createElement("h2");
      let wx = document.createElement("h4")
      let temp = document.createElement("p")
      let pix = document.createElement("img");

      temp.textContent =  prestonweather[i].main.temp;
      wx.textContent = prestonweather[i].weather[0].main;
      //pix.src = prestonweather[i].weather[0].icon;
      pix.src = `https://openweathermap.org/img/w/${prestonweather[i].weather[0].icon}.png`;


      card.appendChild(temp);
      card.appendChild(wx);
      card.appendChild(pix);

      document.querySelector("div.cincodia").appendChild(card);


    }

  }

  });



