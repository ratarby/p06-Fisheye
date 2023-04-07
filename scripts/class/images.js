export class Images {
  constructor(data) {
    this.id = data.id;
    this.photographerId = data.photographerId;
    this.title = data.title;
    this.likes = data.likes;
    this.image = data.image;
    this.price = data.price;
    this.date = data.date;
    this.liked = false;
    this.inc = this.inc.bind(this);
    console.log(this.photographerId);
  }

  getImageCardDOM() {
    // ----------------------------------------------------------------------- div
    const divImgContent = document.createElement("div");
    divImgContent.className = "imgContent";
    divImgContent.setAttribute("aria-label", "imgContent");
    // ----------------------------------------------------------------------- a
    const linkPicture = document.createElement("a");
    linkPicture.setAttribute("href", "/photographer.html"+"?"+`id=${this.photographerId}`);
    linkPicture.setAttribute("title", "voir le media");   
    // ----------------------------------------------------------------------- img
    const picture = `assets/images/${this.image}`;// ------------------------- img from data
    // ----------------------------------------------------------------------- img content
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.className = "media_photographe";
    img.setAttribute("alt", this.title); // ---------------------------------- alt title from data
    img.setAttribute("aria-label","media_photographe")
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
    const likeMedia = document.createElement("button");
    likeMedia.id = "mediaLike";
    likeMedia.setAttribute('title', 'mediaLike');
    likeMedia.setAttribute('aria-label', 'mediaLike');
    likeMedia.setAttribute('role', 'button');
    // ----------------------------------------------------------------------- p
    let totalLike = document.createElement("p");
    totalLike.textContent = this.likes;
    totalLike.className = "total_like";
    totalLike.setAttribute("title", "nombre de like media");
    totalLike.setAttribute("aria-label", "nombre de like media");
    // ----------------------------------------------------------------------- i fas fa-heart (iconHeart)
    const iconHeart = document.createElement("i");
    iconHeart.className = "far fa-heart";
    iconHeart.setAttribute("title", "like media");
    iconHeart.setAttribute("aria-label", "like media");
    // ----------------------------------------------------------------------- button>p>i
    divImgContent.appendChild(likeMedia);
    likeMedia.appendChild(iconHeart);
    likeMedia.appendChild(totalLike);
    // ----------------------------------------------------------------------- event click (iconHeart)
    likeMedia.addEventListener("click", (e) => {
      e.preventDefault();
      
      let increment_total_like = document.getElementById("tout_les_likes");
      if (this.liked) {
        parseInt(totalLike.innerHTML--);
        parseInt(increment_total_like.innerHTML--);
        iconHeart.className = "far fa-heart";
        console.log('disliked');
      } else {
        parseInt(totalLike.innerHTML++);
        parseInt(increment_total_like.innerHTML++);
        iconHeart.className = "fas fa-heart";
        console.log('liked');
      }
      this.liked = !this.liked;
    });
    // ---------------------------------------------------------------------- div>div>p>i
    likeMedia.appendChild(totalLike);
    likeMedia.appendChild(iconHeart);
    
    divImgContent.appendChild(likeMedia);
    return divImgContent;
  }

  inc(iconHeart, totalLike) {
    iconHeart.addEventListener("click", (e) => {
      e.preventDefault();
      let increment_total_like = document.getElementById("tout_les_likes");
      if (this.liked) {
        parseInt(totalLike.innerHTML--);
        parseInt(increment_total_like.innerHTML--);
        iconHeart.className = "far fa-heart";
      } else {
        parseInt(totalLike.innerHTML++);
        parseInt(increment_total_like.innerHTML++);
        iconHeart.className = "fas fa-heart";
      }
      this.liked = !this.liked;
    });
    totalLike.addEventListener("click", (e) => {
      e.preventDefault();
      let increment_total_like = document.getElementById("tout_les_likes");
      if (this.liked) {
        parseInt(totalLike.innerHTML--);
        parseInt(increment_total_like.innerHTML--);
        totalLike.className = "total_like";
        iconHeart.className = "far fa-heart";
      } else {
        parseInt(totalLike.innerHTML++);
        parseInt(increment_total_like.innerHTML++);
        totalLike.className = "total_like";
        iconHeart.className = "fas fa-heart";
      }
      this.liked = !this.liked;
    });
    
  }
}
