export default class TabInfo {
  constructor({ name, media, info }) {
    this.name = name;
    this.media = media;
    this.info = info;



    return this.render();
  }
  render() {
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("tabDiv");

    const heading = document.createElement("h1");
    const headingText = document.createTextNode(this.name);
    heading.append(headingText);
    const line = document.createElement("hr");

    const closeButton = document.createElement("i");
    closeButton.classList.add("bi", "bi-x");
    mainDiv.append(heading, line, closeButton);

    closeButton.addEventListener("click", () => {
      mainDiv.remove();
      document.querySelector('main').classList.remove("displayNone")
      document.querySelector('main').classList.add("displayFlex")
    })
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
    this.info.forEach(el => {
      const par = document.createElement("p");
      const parText = document.createTextNode(el);
      par.append(parText);
      mainDiv.append(par);
    });

    return mainDiv;
  }
}