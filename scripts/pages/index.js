import { photographerFactory } from './../factories/photographerFactory.js';

// display data on the page
async function displayData(photographers) {
  const photographersSection = document.querySelector('.photographer_section');
  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}
// grab data from json file
async function getPhotographers() {
  let [response] = await Promise.all([fetch('./../data/photographers.json')]);
  const data = await response.json();
  return data;
}
// initialise la page
async function init() {
  const { photographers } = await getPhotographers();
  displayData(photographers);
}
init();
