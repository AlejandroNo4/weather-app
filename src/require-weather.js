import "regenerator-runtime/runtime";
import { key } from "./key";

async function getWeather(city) {
  let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`;
  try {
    const res = await fetch(api, { mode: "cors" });
    const json = await res.json();
    if (json.cod === "404") {
      return json
    } else {
      const weather = {
        statusDesc: json.weather[0].description,
        icon: json.weather[0].icon,
        temp: Math.round(json.main.temp),
        tempFeeling: Math.round(json.main.feels_like),
        tempMin: Math.round(json.main.temp_min),
        tempMax: Math.round(json.main.temp_max),
        full: json,
      };
      return weather;
    }
  } catch (err) {
    return err
  }
}

export { getWeather }