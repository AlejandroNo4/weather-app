import "regenerator-runtime/runtime";

const body = document.body;

async function get(city) {
  let api = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=`;
  try {
    const toFar = (temp) => (parseInt(temp) * 1.8000) + 32
    const res = await fetch(api);
    const json = await res.json();
    if (json.cod === "404"){
      return json
    } else {
      const weather = {
        status: json.weather[0].main,
        statusDesc: json.weather[0].description,
        icon: json.weather[0].icon,
        temp: json.main.temp,
        tempFeeling: json.main.feels_like,
        tempMin: json.main.temp_min,
        tempMax: json.main.temp_max,
        tempFar: toFar(json.main.temp),
        tempFeelFar: toFar(json.main.feels_like),
        tempMinFar: toFar(json.main.temp_min),
        tempMaxFar: toFar(json.main.temp_max),
        full: json
      }
      return weather
    }
  } catch (err) {
    alert(err);
  }
}

get("Cairo").then((result) => {
  if (result.message){
    console.log(result.message)
  } else {
      const icon = document.createElement("img")
  icon.src = `http://openweathermap.org/img/wn/${result.icon}@2x.png`

  body.appendChild(icon)
  console.log(result.status)
  console.log(result.statusDesc)
  console.log(result.temp)
  console.log(result.tempFeeling)
  console.log(result.tempMin)
  console.log(result.tempMax)
  console.log(result.tempFar)
  console.log(result.tempFeelFar)
  console.log(result.tempMinFar)
  console.log(result.tempMaxFar)
  console.log(result.full)
  }

})
