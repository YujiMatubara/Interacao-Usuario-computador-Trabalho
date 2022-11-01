function banner() {
  const bannerSrcs = ["img/banner-dog.png", "img/banner-cat.png"];
  const bannerAlts = [
    "Imagem de um cachorro usando óculos",
    "Imagem de um gato escovando os dentes",
  ];
  let currentIdx = 0;

  const bannerImg = document.getElementById("banner");
  const bannerText = document.getElementById("banner-text");
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

    if (bannerImg.getAttribute("src") === "img/banner-dog.png") {
      bannerText.style.opacity = 1;
    } else {
      bannerText.style.opacity = 0;
    }
  });

  rightArrow.addEventListener("click", () => {
    if (currentIdx < bannerSrcs.length - 1) {
      currentIdx++;
    } else {
      currentIdx = 0;
    }

    bannerImg.src = bannerSrcs[currentIdx];
    bannerImg.alt = bannerAlts[currentIdx];

    if (bannerImg.getAttribute("src") === "img/banner-dog.png") {
      bannerText.style.opacity = 1;
    } else {
      bannerText.style.opacity = 0;
    }
  });
}

function carousel() {
  const products = document.getElementById("carousel-content");
  const leftArrow = document.getElementById("carousel-left-arrow");
  const rightArrow = document.getElementById("carousel-right-arrow");

  leftArrow.addEventListener("click", () => {
    products.style.transform = "translateX(0%)";
  });

  rightArrow.addEventListener("click", () => {
    products.style.transform = "translateX(-50%)";
  });
}

function dropdown() {
  const dogsButton = document.getElementById("dogs");
  const catsButton = document.getElementById("cats");
  const birdsButton = document.getElementById("birds");

  const dogsDropdown = document.getElementById("dogs-dropdown");
  const catsDropdown = document.getElementById("cats-dropdown");
  const birdsDropdown = document.getElementById("birds-dropdown");

  dogsButton.addEventListener("mouseover", () => {
    dogsDropdown.style.display = "block";
  });
  dogsButton.addEventListener("mouseout", () => {
    dogsDropdown.style.display = "none";
  });

  catsButton.addEventListener("mouseover", () => {
    catsDropdown.style.display = "block";
  });
  catsButton.addEventListener("mouseout", () => {
    catsDropdown.style.display = "none";
  });

  birdsButton.addEventListener("mouseover", () => {
    birdsDropdown.style.display = "block";
  });
  birdsButton.addEventListener("mouseout", () => {
    birdsDropdown.style.display = "none";
  });
}

function main() {
  banner();
  carousel();
  dropdown();
}

main();
