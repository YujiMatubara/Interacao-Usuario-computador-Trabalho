function banner() {
  const bannerSrcs = ["/img/banner-dog.png", "/img/banner-cat.png"];
  const bannerAlts = [
    "Imagem de um cachorro usando óculos",
    "Imagem de um gato escovando os dentes",
  ];
  let currentIdx = 0;

  const bannerImg = document.getElementById("banner");
  const leftArrow = document.getElementById("presentation-left-arrow");
  const rightArrow = document.getElementById("presentation-right-arrow");

  leftArrow.addEventListener("click", () => {
    if (currentIdx > 0) {
      currentIdx--;
    } else {
      currentIdx = bannerSrcs.length - 1;
    }

    bannerImg.src = bannerSrcs[currentIdx];
    bannerImg.alt = bannerAlts[currentIdx];
  });

  rightArrow.addEventListener("click", () => {
    if (currentIdx < bannerSrcs.length - 1) {
      currentIdx++;
    } else {
      currentIdx = 0;
    }

    bannerImg.src = bannerSrcs[currentIdx];
    bannerImg.alt = bannerAlts[currentIdx];
  });
}

function main() {
  banner();
}

main();
