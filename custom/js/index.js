(function () {
  BannerVideo = "banner.mp4";

  // 视频banner
  banner = document.querySelector("#banner");
  let isPlayVideo = false;
  // let isPlayVideo = JSON.parse(localStorage.getItem("play-video"));
  if (isPlayVideo) {
    banner.style.position = "relative";
    bannerVideo = document.createElement("video");
    bannerVideo.controls = false;
    bannerVideo.loop = true;
    bannerVideo.muted = true;
    bannerVideo.classList.add("banner-video");
    bannerSource = document.createElement("source");
    bannerSource.src = `/videos/${BannerVideo}`;
    bannerSource.type = "video/mp4";
    bannerVideo.appendChild(bannerSource);
    banner.prepend(bannerVideo);
    bannerVideo.play();
  }
})();
