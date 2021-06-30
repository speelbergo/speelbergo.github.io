const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 

const towns = jsonObject["towns"];

    let card = document.createElement("section");
    let title = document.createElement("h2");
    let event0 = document.createElement("p");
    let event1 = document.createElement("p");
    let event2 = document.createElement("p");

    title.textContent = "Soda Springs Events\n";
    event0.textContent = towns[0].events[0];
    event1.textContent = towns[0].events[1];
    event2.textContent = towns[0].events[2];

    card.appendChild(title);
    card.appendChild(event0);
    card.appendChild(event1);
    card.appendChild(event2);

    document.querySelector(".events").appendChild(card);


  }

)

