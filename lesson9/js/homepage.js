const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 

const towns = jsonObject["towns"];

for (let i = 0; i < towns.length; i++) { 

if ((towns[i]) == 1) { 

let card = document.createElement("section");
let title = document.createElement("h2");
let mottoh = document.createElement ("p");
let founded = document.createElement("p");
let population = document.createElement("p");
let annual = document.createElement("p");

title.textContent = towns.name;
mottoh.textContent = towns.motto;


card.appendChild(title);
card.appendChild(mottoh);

document.querySelector("div.card1").appendChild(card);

}
}

  });