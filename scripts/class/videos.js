export class Videos {
  constructor(data) {
    this.id = data.id;
    this.photographerId = data.photographerId;
    this.title = data.title;
    this.likes = data.likes;
    this.video = data.video;
    this.price = data.price;
    this.date = data.date;
    this.liked = false;
    this.inc = this.inc.bind(this);
    console.log(this.photographerId);
  }

  getVideoCardDOM() {
    // -------------------------------------------------------------------------- div
    const divVideoContent = document.createElement("div");
    divVideoContent.setAttribute("class", "videoContent");
    divVideoContent.setAttribute("aria-label", "videoContent");
    // -------------------------------------------------------------------------- a
    const linkVideo = document.createElement("a");
    linkVideo.setAttribute("href", "/photographer.html" + "?" + `id=${this.photographerId}`);
    linkVideo.setAttribute("title", "voir le videoMedia");
    // -------------------------------------------------------------------------- video 
    const video = `assets/images/${this.video}`; // ----------------------------- video from data
    // -------------------------------------------------------------------------- i
    const play = document.createElement("i");
    play.className = "fas fa-play-circle";
    play.setAttribute("title", "icone lecture video");
    play.id = "play";
    linkVideo.appendChild(play);
    // -------------------------------------------------------------------------- video content
    const videoContent = document.createElement("video");
    videoContent.className = "videoMedia_photographe";
    videoContent.setAttribute("alt", this.title); // ---------------------------- alt title from data
    videoContent.setAttribute("aria-label", "videoMedia_photographe");
    // -------------------------------------------------------------------------- source video
    const sourceVideo = document.createElement("source");
    videoContent.appendChild(sourceVideo);
    sourceVideo.setAttribute("src", video);
    sourceVideo.setAttribute("type", "video/mp4");
    videoContent.appendChild(sourceVideo);
    linkVideo.appendChild(videoContent);
    divVideoContent.appendChild(linkVideo);
    // -------------------------------------------------------------------------- div
    const titleVideo = document.createElement("div");
    // -------------------------------------------------------------------------- h3
    const h3 = document.createElement("h3");
    h3.className = "titreMedia";
    h3.textContent = this.title;
    // -------------------------------------------------------------------------- div>h3
    titleVideo.appendChild(h3);
    divVideoContent.appendChild(titleVideo);
    // -------------------------------------------------------------------------- div
    const likeVideo = document.createElement("button");
    likeVideo.id = "videoMediaLike";
    likeVideo.setAttribute("title", "videoMediaLike");
    likeVideo.setAttribute("aria-label", "videoMediaLike");
    likeVideo.setAttribute("role", "button");
    // -------------------------------------------------------------------------- p
    const allLikes = document.createElement("p");
    allLikes.textContent = this.likes;
    allLikes.className = "total_like";
    allLikes.setAttribute("title", "nombre de like videoMedia");
    allLikes.setAttribute("aria-label", "nombre de like videoMedia");
    // -------------------------------------------------------------------------- i
    const iconHeart = document.createElement("i");
    iconHeart.className = "far fa-heart";
    iconHeart.setAttribute("title", "like videoMedia");
    iconHeart.setAttribute("aria-label", "like videoMedia");
    // -------------------------------------------------------------------------- button>p>i
    divVideoContent.appendChild(likeVideo);
    likeVideo.appendChild(allLikes);
    likeVideo.appendChild(iconHeart);
    // -------------------------------------------------------------------------- event click (iconHeart)
    likeVideo.addEventListener("click", (e) => {
      e.preventDefault();

      let increment_total_like = document.getElementById("tout_les_likes");
      if (this.liked) {
        parseInt(allLikes.innerHTML--);
        parseInt(increment_total_like.innerHTML--);
        allLikes.className = "total_like";
        iconHeart.className = "far fa-heart";
      } else {
        parseInt(allLikes.innerHTML++);
        parseInt(increment_total_like.innerHTML++);
        allLikes.className = "total_like";
        iconHeart.className = "fas fa-heart";
      }
      this.liked = !this.liked;
    });
    // -------------------------------------------------------------------------- div>div>div>p>i
    likeVideo.appendChild(allLikes);
    likeVideo.appendChild(iconHeart);
    divVideoContent.appendChild(likeVideo);
    return divVideoContent;
  }

  inc(iconHeart, allLikes) {
    iconHeart.addEventListener("click", (e) => {
      e.preventDefault();
      let increment_total_like = document.getElementById("tout_les_likes");
      if (this.liked) {
        parseInt(allLikes.innerHTML--);
        parseInt(increment_total_like.innerHTML--);
        iconHeart.className = "far fa-heart";
      } else {
        parseInt(allLikes.innerHTML++);
        parseInt(increment_total_like.innerHTML++);
        iconHeart.className = "fas fa-heart";
      }
      this.liked = !this.liked;
    });
    allLikes.addEventListener("click", (e) => {
      e.preventDefault();
      let increment_total_like = document.getElementById("tout_les_likes");
      if (this.liked) {
        parseInt(allLikes.innerHTML--);
        parseInt(increment_total_like.innerHTML--);
        allLikes.className = "total_like";
        iconHeart.className = "far fa-heart";
      } else {
        parseInt(allLikes.innerHTML++);
        parseInt(increment_total_like.innerHTML++);
        allLikes.className = "total_like";
        iconHeart.className = "fas fa-heart";
      }
      this.liked = !this.liked;
    });
  }
}

