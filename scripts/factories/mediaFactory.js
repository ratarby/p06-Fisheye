class MediaFactory {
  constructor(data, type) {
    if (type == "image") {
      return new Images(data);
    } else if (type == "video") {
      return new Videos(data);
    } else {
      throw "Unknown type format";
    }
  }
}
