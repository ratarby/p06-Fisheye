export class Lightbox {
  constructor(){
    this.listMedias = [];
    this.index = 0;
    this.onKeyUp();
    const next = document.querySelector(".lightbox_next");
    next.addEventListener("click", () => {
      this.next();
    });
    const prev = document.querySelector(".lightbox_prev");
    prev.addEventListener("click", () => {
      this.prev();
    });
    const close = document.querySelector(".lightbox_close");
    close.addEventListener("click", () => {
      this.close();
    });
  }

  displayMedia() {
    // ------------------------------------------------------------------- main
    const main = document.getElementById("main");
    // ------------------------------------------------------------------- lightbox
    const lightbox = document.getElementById("lightbox");
    // ------------------------------------------------------------------- lightbox_close
    const lightboxClose = document.querySelector(".lightbox_close");
    main.setAttribute("aria-hidden", "true");
    lightbox.setAttribute("aria-hidden", "false");
    lightboxClose.focus();
    if (this.listMedias[this.index].image) { // grab image from listMedias 
      // ------------------------------------------------------------------- image
      const img = this.listMedias[this.index].image;
      // ------------------------------------------------------------------- lightbox
      const lightbox = document.querySelector("#lightbox");
      // ------------------------------------------------------------------- container
      const container_img = document.querySelector(".lightbox_container");
      // ------------------------------------------------------------------- photo
      const photo = document.createElement("img");
      photo.setAttribute("src", "assets/images/" + img);
      // ------------------------------------------------------------------- title
      let the_title = this.listMedias[this.index].title;
      // ------------------------------------------------------------------- title_photo
      let title_photo = document.getElementById("titre_photo");
      photo.setAttribute("alt", the_title);
      // ------------------------------------------------------------------- title_photo
      title_photo.innerHTML = the_title;
      if (container_img.firstChild !== null) {
        container_img.removeChild(container_img.firstChild);
      }
      container_img.appendChild(photo);
      lightbox.style.display = "block";
    } else {
      // ------------------------------------------------------------------- video
      const video = this.listMedias[this.index].video;
      // ------------------------------------------------------------------- lightbox
      const lightbox = document.querySelector("#lightbox");
      // ------------------------------------------------------------------- container
      const container_img = document.querySelector(".lightbox_container");
      // ------------------------------------------------------------------- video
      const the_video = document.createElement("video");
      the_video.controls = true;
      // ------------------------------------------------------------------- source
      const s_video = document.createElement("source");
      s_video.setAttribute("src", "assets/images/" + video);
      s_video.setAttribute("type", "video/mp4");
      the_video.appendChild(s_video);
      // ------------------------------------------------------------------- title
      let the_title = this.listMedias[this.index].title;
      // ------------------------------------------------------------------- title_photo
      let title_photo = document.getElementById("titre_photo");
      title_photo.innerHTML = the_title;
      if (container_img.firstChild !== null) {
        container_img.removeChild(container_img.firstChild);
      }
      container_img.appendChild(the_video);
      the_video.play();
      lightbox.style.display = "block";
    }
  }
  // ---------------------------------------------------------------------- display
  play(position) {
    this.index = position;
  }
  // ---------------------------------------------------------------------- onKeyUp
  onKeyUp() {
    document.addEventListener("keyup", (e) => {
      if (e.key === "Escape") {
        this.close();
      } else if (e.key === "ArrowRight") {
        this.next();
      } else if (e.key === "ArrowLeft") {
        this.prev();
      }
    });
  }

  next() {
    if (this.index >= this.listMedias.length - 1) {
      this.index = -1;
    } else {
      this.index++;
    }
    this.displayMedia();
  }

  prev() {
    if (this.index <= 0) {
      this.index = this.listMedias.length;
    } else {
      this.index--;
    }
    this.displayMedia();
  }
  
  close() {
    const lightbox = document.querySelector("#lightbox");
    lightbox.style.display = "none";
    document.removeEventListener("keyup", this.onKeyUp);
  }
}
