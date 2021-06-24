import 'regenerator-runtime/runtime';
import dataContainer from './info-show';
import getWeather from './require-weather';

const form = () => {
  const { body } = document;
  const cityForm = document.createElement('form');
  cityForm.classList.add('form');
  cityForm.method = 'get';
  const inputForm = document.createElement('input');
  inputForm.classList.add('input');
  inputForm.placeholder = 'Enter City Name';
  inputForm.maxLength = '65';
  const msj = document.createElement('p');
  msj.classList.add('msj', 'd-none');

  const buttonSend = document.createElement('button');
  buttonSend.classList.add('btn');
  buttonSend.innerText = 'Show';

  body.appendChild(msj);
  cityForm.appendChild(inputForm);
  cityForm.appendChild(buttonSend);

  buttonSend.addEventListener('click', async (event) => {
    event.preventDefault();
    const result = await getWeather(inputForm.value);
    if (inputForm.value === '') {
      msj.innerText = 'Please, add a city';
      msj.classList.remove('d-none');
      msj.classList.add('d-flex');
    } else if (result.message) {
      msj.innerText = result.message[0].toUpperCase() + result.message.substring(1).toLowerCase();
      msj.classList.remove('d-none');
      msj.classList.add('d-flex');
    } else {
      msj.classList.remove('d-flex');
      msj.classList.add('d-none');
      if (body.childNodes[9] !== undefined) {
        body.replaceChild(
          dataContainer(
            inputForm.value,
            result.temp,
            result.icon,
            result.tempMin,
            result.tempMax,
            result.statusDesc,
          ),
          body.childNodes[9],
        );
      } else {
        body.appendChild(
          dataContainer(
            inputForm.value,
            result.temp,
            result.icon,
            result.tempMin,
            result.tempMax,
            result.statusDesc,
          ),
        );
      }
    }
  });

  return cityForm;
};

export default form;
