function tempValue(temp, min, max) {
  this.tempC = temp + "°C";
  this.minC = "Min: " + min + "°C";
  this.maxC = "Max: " + max + "°C";
  this.tempF = Math.round(parseInt(temp) * 1.8 + 32) + "°F";
  this.minF = "Min: " + Math.round(parseInt(min) * 1.8 + 32) + "°F";
  this.maxF = "Max: " + Math.round(parseInt(max) * 1.8 + 32) + "°F";
}

const dataContainer = (cityName, temp, icon, min, max, description) => {
  const capitalize = (str) =>
    str
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.substring(1).toLowerCase())
      .join(" ");

  let temperature = new tempValue(temp, min, max);

  const cityCapitalized = capitalize(cityName);
  const mainContainer = document.createElement("div");
  mainContainer.classList.add("main-container");

  const topContainer = document.createElement("div");

  const imgAndPlaceWrapper = document.createElement("div");
  imgAndPlaceWrapper.classList.add("d-flex", "img-and-place");

  const placeIcon = document.createElement("i");
  placeIcon.classList.add("fas", "fa-map-marker-alt", "place");

  const place = document.createElement("h1");
  place.classList.add("place");
  place.innerText = cityCapitalized;

  const iconStat = document.createElement("img");
  iconStat.src = `images/${icon}.png`;
  iconStat.classList.add("icon");

  imgAndPlaceWrapper.appendChild(placeIcon);
  imgAndPlaceWrapper.appendChild(place);
  imgAndPlaceWrapper.appendChild(iconStat);

  const minMax = document.createElement("div");
  minMax.classList.add("min-max");
  const minPara = document.createElement("p");
  minPara.classList.add("margin-sides");
  minPara.innerText = temperature.minC;
  const maxPara = document.createElement("p");
  maxPara.classList.add("margin-sides");
  maxPara.innerText = temperature.maxC;

  const toggleChangePara = document.createElement("p");
  toggleChangePara.classList.add("margin-sides");
  toggleChangePara.innerText = "Change unit:";

  const toggleLabel = document.createElement("label");
  toggleLabel.classList.add("switch");
  const toggleInput = document.createElement("input");
  toggleInput.type = "checkbox";
  const toggleSpan = document.createElement("span");
  toggleSpan.classList.add("slider", "round");
  toggleLabel.appendChild(toggleInput);
  toggleLabel.appendChild(toggleSpan);

  minMax.appendChild(minPara);
  minMax.appendChild(maxPara);
  minMax.appendChild(toggleChangePara);
  minMax.appendChild(toggleLabel);

  topContainer.appendChild(imgAndPlaceWrapper);
  topContainer.appendChild(minMax);

  const temperatureCont = document.createElement("p");
  temperatureCont.classList.add("temperature");
  temperatureCont.innerText = temperature.tempC;

  toggleSpan.addEventListener("click", () => {
    if (temperatureCont.innerText === temperature.tempC) {
      temperatureCont.innerText = temperature.tempF;
      maxPara.innerText = temperature.maxF;
      minPara.innerText = temperature.minF;
    } else {
      temperatureCont.innerText = temperature.tempC;
      maxPara.innerText = temperature.maxC;
      minPara.innerText = temperature.minC;
    }
  });

  const statsContainer = document.createElement("div");
  const descPara = document.createElement("p");
  descPara.innerText = capitalize(description);
  statsContainer.appendChild(descPara);

  mainContainer.appendChild(topContainer);
  mainContainer.appendChild(temperatureCont);
  mainContainer.appendChild(statsContainer);

  return mainContainer;
};

export { dataContainer };
