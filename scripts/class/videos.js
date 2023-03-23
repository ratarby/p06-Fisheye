export class Videos {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.likes = data.likes;
    this.video = data.video;
    this.price = data.price;
    this.date = data.date;
    this.liked = false;
  }

  getVideoCardDOM() {
    // -------------------------------------------------------------------------- div
    const divVideoContent = document.createElement("div");
    divVideoContent.setAttribute("class", "videoContent");
    divVideoContent.setAttribute("aria-label", "videoContent");
    // -------------------------------------------------------------------------- a
    const linkVideo = document.createElement("a");
    linkVideo.setAttribute("href", "/photographer.html" + "?" + `id=${this.id}`);
    linkVideo.setAttribute("title", "voir le media");
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
    videoContent.className = "media_photographe";
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
    const likeVideo = document.createElement("div");
    likeVideo.id = "mediaLike";
    // -------------------------------------------------------------------------- p
    const allLikes = document.createElement("p");
    // -------------------------------------------------------------------------- i
    const iconHeart = document.createElement("i");
    allLikes.textContent = this.likes;
    allLikes.className = "total_like";
    // -------------------------------------------------------------------------- div>p>i
    iconHeart.className = "far fa-heart";
    iconHeart.setAttribute("title", "nombre de like du media");
    // -------------------------------------------------------------------------- event click (iconHeart)
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
    // -------------------------------------------------------------------------- div>div>div>p>i
    likeVideo.appendChild(allLikes);
    likeVideo.appendChild(iconHeart);
    divVideoContent.appendChild(likeVideo);
    return divVideoContent;
  }
}

