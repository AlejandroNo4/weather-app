import "regenerator-runtime/runtime";
import { dataContainer } from "./info-show";
import { key } from "./key";
import { getWeather } from "./require-weather";
import { form } from "./form";

const body = document.body;

body.appendChild(form());
