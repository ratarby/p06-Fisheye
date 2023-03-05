export class Images {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.likes = data.likes;
    this.image = data.image;
    this.price = data.price;
    this.date = data.date;
    this.liked = false;
  }

  getImageCardDOM() {
    // ----------------------------------------------------------------------- div
    const divImgContent = document.createElement("div");
    divImgContent.className = "imgContent";
    divImgContent.setAttribute("aria-label", "imgContent");
    // ----------------------------------------------------------------------- a
    const linkPicture = document.createElement("a");
    linkPicture.setAttribute("href", "/photographer.html"+"?"+`id=${this.id}`);
    linkPicture.setAttribute("title", "voir le media");   
    // ----------------------------------------------------------------------- img
    const picture = `assets/images/${this.image}`;// ------------------------- img from data
    // ----------------------------------------------------------------------- img content
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.className = "media_photographe";
    img.setAttribute("alt", this.title); // ---------------------------------- alt title from data
    // ----------------------------------------------------------------------- div>a 
    divImgContent.appendChild(linkPicture);
    linkPicture.appendChild(img);
    // ----------------------------------------------------------------------- div
    const titleMedia = document.createElement("div");
    // ----------------------------------------------------------------------- h3
    const h3 = document.createElement("h3");
    h3.className = "titreMedia";
    h3.textContent = this.title;
    // ----------------------------------------------------------------------- div>h3
    titleMedia.appendChild(h3);
    divImgContent.appendChild(titleMedia);
    // ----------------------------------------------------------------------- div
    const likeMedia = document.createElement("div");
    likeMedia.id = "mediaLike";
    // ----------------------------------------------------------------------- p
    let totalLike = document.createElement("p");
    totalLike.textContent = this.likes;
    totalLike.className = "total_like";
    // ----------------------------------------------------------------------- i fas fa-heart (iconHeart)
    const iconHeart = document.createElement("i");
    iconHeart.className = "fas fa-heart";
    iconHeart.setAttribute("title", "nombre de like du media");
    // ----------------------------------------------------------------------- div>p>i
    likeMedia.appendChild(iconHeart);
    likeMedia.appendChild(totalLike);
    // ----------------------------------------------------------------------- event click (iconHeart)
    iconHeart.addEventListener("click", (e) => {
      e.preventDefault();
      let increment_total_like = document.getElementById("tout_les_likes");
      if (this.liked) {
        parseInt(totalLike.innerHTML--);
        parseInt(increment_total_like.innerHTML--);
      } else {
        parseInt(totalLike.innerHTML++);
        parseInt(increment_total_like.innerHTML++);
      }
      this.liked = !this.liked;
    });
    // ---------------------------------------------------------------------- div>div>p>i
    likeMedia.appendChild(totalLike);
    likeMedia.appendChild(iconHeart);
    divImgContent.appendChild(likeMedia);
    return divImgContent;
  }
}
