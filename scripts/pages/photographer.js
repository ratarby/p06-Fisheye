import { Lightbox } from "./../class/lightbox.js";
import { MediaFactory } from "./../class/mediaFactory.js";

// variables
let urlPhotographer = window.location.search;
let searchParams = new URLSearchParams(urlPhotographer);
let id = searchParams.get(`id`);
let url_Photographer = `/data/photographers.json`;
let lightbox = new Lightbox();
let likeArray = [];
let pricePhotographe = 0;

fetch(url_Photographer)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // grab photographer data from json file
    for (let i = 0; i < data.photographers.length; i++) {
      if (id == data.photographers[i].id) {
        const photographer = data.photographers[i];
        console.log(photographer);
        //------------------------------------------------------------------divProfil
        const divProfil = document.getElementById("profil");
        // -----------------------------------------------------------------imgProfil
        const imgProfil = document.createElement("div");
        imgProfil.id = "img_profil";
        imgProfil.innerHTML =
          `<img 
            class = "imgProfil" 
            src = "assets/photographers/${photographer.portrait}" 
            alt="photo du photographe">
          `;
        // -----------------------------------------------------------------profil
        const profil = document.createElement("div");
        profil.className = "monProfil";
        profil.id = "nom_profil";
        profil.innerHTML = `
        <h1 class="photographerName">${photographer.name}</h1> </br> 
        <h2 class="photographerCity">${photographer.city}  ${photographer.country}</h2> </br>
        <p class = "photographerTagline">${photographer.tagline}</p>
        `;
        pricePhotographe = photographer.price;
        divProfil.after(profil);
        divProfil.appendChild(imgProfil);
        // -----------------------------------------------------------------contactForm
        const h2 = document.getElementById('myName');
        h2.innerHTML = `Contactez moi  ${photographer.name}`;
      }
    }
    // grab media data by id then push in Lightbox.listmedia and likeArray
    for (let i = 0; i < data.media.length; i++) {
      if (id == data.media[i].photographerId) {
        const media = data.media[i];
        console.log(media);
        lightbox.listMedias.push(media);
        const likeMedia = media.likes;
        likeArray.push(likeMedia);
      }
    }

    // medias filtreArrow
    const filtreArrow = document.querySelector(".filter-container");
    function Arrow() {
      if (filtreArrow.classList.contains("on")) {
        filtreArrow.classList.remove("on");
      } else {
        filtreArrow.classList.add("on");
      }
      // console.log(filtreArrow);
    }
    filtreArrow.addEventListener("click", Arrow);

    // medias FILTER
    const trier = document.querySelector("#filters-select");
    trier.addEventListener("change", () => {
      // remove all child of mediaContent
      const mediaContent = document.getElementById("photographeMedia");
      while (mediaContent.hasChildNodes()) {
        mediaContent.removeChild(mediaContent.firstChild);
      }
      const trie = trier.options;    
      if (trie.selectedIndex == 0) {
        lightbox.listMedias.sort((a, b) => {
          return b.likes - a.likes;
        });
      }
      if (trie.selectedIndex == 1) {
        lightbox.listMedias.sort((a, b) => {
          return new Date(b.date) - new Date(a.date);
        });
      }
      if (trie.selectedIndex == 2) {
        lightbox.listMedias.sort((a, b) => {
          return (a.title).localeCompare(b.title);
        });
      }
      // call function displayMedia
      displayMedia();
    });

    // FRAME
    // Sum of all media likes with reduce method
    const sommeMediaLike = likeArray.reduce(
      (prevValue, currValue) => prevValue + currValue
    );

    const all_media_like = document.getElementById("tout_les_likes");
    const price_photographe = document.getElementById("pricePhotographe");
    all_media_like.innerHTML = sommeMediaLike;
    price_photographe.innerHTML = pricePhotographe + "€/jour";

    // call function displayMedia
    displayMedia();
  });
console.log(fetch(url_Photographer));

// global function to display media
// if "image = true" then display image else display video
function displayMedia() {
  for (let i = 0; i < lightbox.listMedias.length; i++) {
    const media = lightbox.listMedias[i];
    if (media.image) {
      let type = "image";
      const mediaContent = document.getElementById("photographeMedia");
      const mediaModel = new MediaFactory(media, type);
      const mediaCardDom = mediaModel.getImageCardDOM();
      mediaContent.appendChild(mediaCardDom);
      mediaCardDom.firstChild.addEventListener("click", (e) => {
        e.preventDefault();
        lightbox.play(i);
        lightbox.displayMedia();
      });
    } else {
      let type = "video";
      const mediaContent = document.getElementById("photographeMedia");
      const videoModel = new MediaFactory(media, type);
      const videoCardDom = videoModel.getVideoCardDOM();
      mediaContent.appendChild(videoCardDom);
      videoCardDom.firstChild.addEventListener("click", (e) => {
        e.preventDefault();
        lightbox.play(i);
        lightbox.displayMedia();
      });
    }
  }
}
