const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 

const towns = jsonObject["towns"];

const threetowns = towns.filter(town => town.name == "Preston" || town.name == "Soda Springs" || town.name == "Fish Haven");

threetowns.forEach(towns => { 

let card = document.createElement("section");
let title = document.createElement("h2");
let mottoh = document.createElement ("p");
let founded = document.createElement("p");
let population = document.createElement("p");
let annual = document.createElement("p");
let pix = document.createElement("img");
let carddiv = document.createElement("div");

title.textContent = towns.name;
mottoh.textContent = towns.motto;
founded.textContent = "Founded in " + towns.yearFounded;
population.textContent = "Population: " + towns.currentPopulation;
annual.textContent = "Annual Rainfall: " + towns.averageRainfall;
pix.setAttribute('src', `images/${towns.photo}`);
pix.setAttribute('alt', `The colony of ${towns.name}!`);
pix.className = "cardimg";
carddiv.className = "cardtext";

carddiv.appendChild(title);
carddiv.appendChild(mottoh);
carddiv.appendChild(founded);
carddiv.appendChild(population);
carddiv.appendChild(annual);

card.appendChild(pix);
card.appendChild(carddiv);
document.querySelector(".card1").appendChild(card);

})

  });