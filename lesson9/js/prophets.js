const requestURL = "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
   // console.table(jsonObject);  temporary checking for valid response and data parsing

    const prophets = jsonObject["prophets"];

    for (let i = 0; i < prophets.length; i++) {
      let card = document.createElement("section");
      let title = document.createElement("h2");
      let cardinale = document.createElement("h3");
      let pix = document.createElement("img");
      let burth = document.createElement("h3");
      let deth = document.createElement("h3");
      let chillun = document.createElement("h4");
      let burthplayce = document.createElement("h4");

      title.textContent = prophets[i].name + " " + prophets[i].lastname;

      var cardin;
      if ( (prophets[i].order) == 1) {
      //  console.log("first");
        cardin = "first";
      }
      else if ((prophets[i].order) == 2) {
        cardin = "second";
      }
      else if ( (prophets[i].order) ==3) {
        cardin = "third"
      }
      else {
        cardin= prophets[i].order + "th" 
      }

    cardinale.textContent = "The " + cardin + " president of the restored church."

      pix.src = prophets[i].imageurl;
      //pix.setAttribute('alt', `portrait of ${prophets[i].name ${prophets[i].lastname}!`);
      burth.textContent = "Born: " + prophets[i].birthdate;
      deth.textContent = "Died: " + prophets[i].death;
      chillun.textContent = "He had " + prophets[i].numofchildren + " children.";
      burthplayce.textContent = "He was born in " + prophets[i].birthplace + " which I hear is very nice this time of year.";

      card.appendChild(title);
      card.appendChild(cardinale);
      card.appendChild(pix);
      card.appendChild(burth);
      card.appendChild(deth);
      card.appendChild(chillun);
      card.appendChild(burthplayce);


      document.querySelector("div.cards").appendChild(card);
    }
  });

