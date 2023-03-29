export function photographerFactory(data) {
  const { name, portrait, tagline, price, country, city, id } = data;
  console.log(data);
  // -------------------------------------------------------------- picture
  const picture = `assets/photographers/${portrait}`;
  function getUserCardDOM() {
    // ------------------------------------------------------------ article
    const article = document.createElement("article");
    // ------------------------------------------------------------ image
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.setAttribute("alt", "photo du photographe");
    // ------------------------------------------------------------ a
    const a = document.createElement("a");
    a.setAttribute("href", `photographer.html?id=${id}`);
    a.setAttribute("arial-label", "name");
    // ------------------------------------------------------------ h2
    const h2 = document.createElement("h2");
    h2.textContent = name;
    // ------------------------------------------------------------ div
    const divText = document.createElement("div");
    divText.setAttribute("class", "details");
    // ------------------------------------------------------------ h3
    const h3 = document.createElement("h3");
    h3.setAttribute("class", "details__city");
    h3.textContent = city + " " + country;
    // ------------------------------------------------------------ p
    const text = document.createElement("p");
    text.setAttribute("class", "details__tagline");
    text.textContent = tagline;
    // ------------------------------------------------------------ p
    const prix = document.createElement("p");
    prix.textContent = price + "€/jour";
    prix.setAttribute("class", "details_price");

    // ------------------------------------------------------------ article
    article.appendChild(a);
    // ------------------------------------------------------------ a
    a.appendChild(img);
    a.setAttribute("href", `photographer.html?id=${id}`);
    a.setAttribute("class", "presentation");
    a.appendChild(h2);
    // ------------------------------------------------------------ lien
    a.appendChild(divText);
    divText.appendChild(h3);
    divText.appendChild(text);
    divText.appendChild(prix);
    return article;
  }
  return { name, picture, country, city, id, getUserCardDOM };
}
