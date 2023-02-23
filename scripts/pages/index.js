let url = 'data/photographers.json'

async function getPhotographers() {
  // Penser à remplacer par les données récupérées dans le json
  fetch(url)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      const photographersSection = document.querySelector(
        '.photographer_section',
      )
      const photographers = data.photographers
      return photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer)
        const userCardDOM = photographerModel.getUserCardDOM()
        photographersSection.appendChild(userCardDOM)
      })
    })
}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  displayData(photographers)
}
init()
