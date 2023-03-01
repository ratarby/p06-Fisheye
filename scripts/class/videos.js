export class Videos {
  constructor(data) {
    this.title = data.title;
    this.likes = data.likes;
    this.video = data.video;
    this.price = data.price;
    this.date = data.date;
    this.liked = false;
  }

  getVideoCardDOM() {
    // ------------------------------------------------------------ div
    const divVideoContent = document.createElement("div");
    divVideoContent.setAttribute("class", "videoContent");
    // ------------------------------------------------------------ video path
    const video = `assets/images/${this.video}`;
    // ------------------------------------------------------------ a
    const linkVideo = document.createElement("a");
    // ------------------------------------------------------------ i
    const play = document.createElement("i");
    play.className = "fas fa-play-circle";
    play.setAttribute("title", "icone lecture video");
    play.id = "play";
    linkVideo.appendChild(play);
    // ------------------------------------------------------------ video content
    const videoContent = document.createElement("video");
    videoContent.className = "media_photographe";
    // ------------------------------------------------------------ source video
    const sourceVideo = document.createElement("source");
    videoContent.appendChild(sourceVideo);
    sourceVideo.setAttribute("src", video);
    sourceVideo.setAttribute("type", "video/mp4");
    videoContent.appendChild(sourceVideo);
    linkVideo.appendChild(videoContent);
    divVideoContent.appendChild(linkVideo);
    // ------------------------------------------------------------ div
    const titleVideo = document.createElement("div");
    // --
    const h3 = document.createElement("h3");
    h3.className = "titreMedia";
    h3.textContent = this.title;
    titleVideo.appendChild(h3);
    divVideoContent.appendChild(titleVideo);
    // ------------------------------------------------------------ div
    const likeVideo = document.createElement("div");
    likeVideo.id = "mediaLike";
    // ------------------------------------------------------------ p
    const allLikes = document.createElement("p");
    // ------------------------------------------------------------ i
    const iconHeart = document.createElement("i");
    allLikes.textContent = this.likes;
    allLikes.className = "total_like";
    iconHeart.className = "fas fa-heart";
    iconHeart.setAttribute("title", "nombre de like du media");
    iconHeart.addEventListener("click", (e) => {
      e.preventDefault();
      let increment_total_like = document.getElementById("tout_les_likes");
      if (this.liked) {
        parseInt(allLikes.innerHTML--);
        parseInt(increment_total_like.innerHTML--);
      } else {
        parseInt(allLikes.innerHTML++);
        parseInt(increment_total_like.innerHTML++);
      }
      this.liked = !this.liked;
    });
    likeVideo.appendChild(allLikes);
    likeVideo.appendChild(iconHeart);
    divVideoContent.appendChild(likeVideo);
    return divVideoContent;
  }
}

