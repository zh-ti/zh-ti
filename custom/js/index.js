(function () {
  // 视频banner
  const banner = document.querySelector("#banner");
  let isPlayVideo = true && location.pathname === "/";
  // let isPlayVideo = JSON.parse(localStorage.getItem("play-video"));
  if (isPlayVideo) {
    banner.style.position = "relative";
    bannerVideo = document.createElement("video");
    bannerVideo.controls = false;
    bannerVideo.loop = true;
    bannerVideo.muted = true;
    bannerVideo.classList.add("banner-video");
    bannerVideo.appendChild(createSourceNode('/videos/banner.mp4', 'video/mp4'));
    bannerVideo.appendChild(createSourceNode('/videos/banner.mov', 'video/mp4'));
    banner.prepend(bannerVideo);
    bannerVideo.play();
  }

  function createSourceNode(src, type) {
    let bannerSource = document.createElement("source");
    bannerSource.src = src;
    bannerSource.type = type;
    return bannerSource;
  }

  const mail = document.querySelector(".icon-mail");
  mail.addEventListener("click", (e) => {
    e.preventDefault();
    return false;
  });
})();
