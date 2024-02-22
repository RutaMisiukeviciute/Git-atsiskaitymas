export default class TabInfo {
  constructor({ name, media, paragraph }) {
    this.name = name;
    this.media = media;
    this.paragraph = paragraph;

    return this.render();
  }
  render() {
    const mainDiv = document.createElement("div");

    const heading = document.createElement("h1");
    const headingText = document.createTextNode(this.name);
    heading.append(headingText);
    const line = document.createElement("hr");
    mainDiv.append(heading, line);
    const mediaEnding = this.media.substring(this.media.length - 3);
    if (mediaEnding === "jpg" || mediaEnding === "png") {
      const img = document.createElement("img");
      img.setAttribute("src", this.media);
      img.setAttribute("alt", `${this.name} part image`);
      mainDiv.append(img);
    } else if (mediaEnding === "mp4" || mediaEnding === "avi") {
      const video = document.createElement("video");
      const videoSrc = document.createElement("source");
      videoSrc.setAttribute("src", this.media);
      video.setAttribute("autoplay", "");
      video.append(videoSrc);
      mainDiv.append(video);
    }
  }
}