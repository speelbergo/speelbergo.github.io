const requestURL = "./directory.json";

fetch(requestURL)
  .then(function (response) {
      return response.json();

  })
  .then(function (jsonObject) {

    const businesses = jsonObject["businesses"];
    for (let i=0; i < businesses.length; i++) { 
      let card = document.createElement("section");
      let name = document.createElement("h2");
      let address = document.createElement("h3");
      let url = document.createElement("h4");
      let slogan = document.createElement("h5");
      let imageurl = document.createElement("img")

      name.textContent = businesses[i].name;
      imageurl.src = businesses[i].imageurl;
      address.textContent = businesses[i].address;
      url.textContent = businesses[i].url;
      slogan.textContent = businesses[i].slogan;

      card.appendChild(name);
      card.appendChild(address);
      card.appendChild(url);
      card.appendChild(slogan);
      card.appendChild(imageurl);

   document.querySelector("div.cards").appendChild(card);   
    }
  });