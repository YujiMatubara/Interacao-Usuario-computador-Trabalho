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

  leftArrow.addEventListener("keypress", (event) => {
    if (event.key === "Enter" || event.key == " " || event.key == "Spacebar") {
      event.preventDefault();
      leftArrow.click();
    }
  });

  rightArrow.addEventListener("keypress", (event) => {
    if (event.key === "Enter" || event.key == " " || event.key == "Spacebar") {
      event.preventDefault();
      rightArrow.click();
    }
  });
}

function carousel() {
  const products = document.getElementById("carousel-content");
  const leftArrow = document.getElementById("carousel-left-arrow");
  const rightArrow = document.getElementById("carousel-right-arrow");

  Array.from(products.children).forEach((value, index, array) => {
    value.tabIndex = (index < 4) ? "0" : "-1";
    value.setAttribute("aria-hidden", !(index < 4));
  });

  leftArrow.addEventListener("click", () => {
    products.style.transform = "translateX(0%)";
    Array.from(products.children).forEach((value, index, array) => {
      value.tabIndex = (index < 4) ? "0" : "-1";
      value.setAttribute("aria-hidden", !(index < 4));
    });
  });

  rightArrow.addEventListener("click", () => {
    products.style.transform = "translateX(-50%)";
    Array.from(products.children).forEach((value, index, array) => {
      value.tabIndex = !(index < 4) ? "0" : "-1";
      value.setAttribute("aria-hidden", index < 4);
    });
  });

  leftArrow.addEventListener("keypress", (event) => {
    if (event.key === "Enter" || event.key == " " || event.key == "Spacebar") {
      event.preventDefault();
      leftArrow.click();
    }
  });

  rightArrow.addEventListener("keypress", (event) => {
    if (event.key === "Enter" || event.key == " " || event.key == "Spacebar") {
      event.preventDefault();
      rightArrow.click();
    }
  });
}

function dropdown() {
  const dropdownElements = [
    {
      button: document.getElementById("dogs"),
      dropdown: document.getElementById("dogs-dropdown")
    },
    {
      button: document.getElementById("cats"),
      dropdown: document.getElementById("cats-dropdown")
    },
    {
      button: document.getElementById("birds"),
      dropdown: document.getElementById("birds-dropdown")
    },
  ];

  dropdownElements.forEach((value, index, array) => {
    value.button.addEventListener("mouseover", () => {
      value.dropdown.style.display = "block";
      value.dropdown.setAttribute("aria-hidden", "false");
      value.button.setAttribute("aria-pressed", "true");
      value.button.setAttribute("aria-expanded", "true");
    });

    value.button.addEventListener("mouseout", () => {
      value.dropdown.style.display = "none";
      value.dropdown.setAttribute("aria-hidden", "true");
      value.button.setAttribute("aria-pressed", "false");
      value.button.setAttribute("aria-expanded", "false");
    });
    
    value.button.addEventListener("keypress", (event) => {
      if (event.key === "Enter" || event.key == " " || event.key == "Spacebar") {
        event.preventDefault();
  
        const pressed = value.button.getAttribute("aria-pressed") === "true";
        value.dropdown.style.display = (!pressed) ? "block" : "none";
        value.dropdown.setAttribute("aria-hidden", pressed);
        value.button.setAttribute("aria-pressed", !pressed);
        value.button.setAttribute("aria-expanded", !pressed);
      }
    });
  });
}

function fontSizeAdjustment(lowerLimit = 16, upperLimit = 32) {
  const increaseButton = document.getElementById("font-size-increase");
  const decreaseButton = document.getElementById("font-size-decrease");
  const texts = document.getElementsByClassName("font-size");

  increaseButton.addEventListener("click", () => {
    for (let i = 0; i < texts.length; i++) {
      const currentFontSize = Number(
        window
          .getComputedStyle(texts[i])
          .getPropertyValue("font-size")
          .slice(0, 2)
      );

      if (currentFontSize + 4 <= upperLimit) {
        texts[i].style.fontSize = `${currentFontSize + 4}px`;
      }
    }
  });

  decreaseButton.addEventListener("click", () => {
    for (let i = 0; i < texts.length; i++) {
      const currentFontSize = Number(
        window
          .getComputedStyle(texts[i])
          .getPropertyValue("font-size")
          .slice(0, 2)
      );

      if (currentFontSize - 4 >= lowerLimit) {
        texts[i].style.fontSize = `${currentFontSize - 4}px`;
      }
    }
  });
}

function main() {
  banner();
  carousel();
  dropdown();
  fontSizeAdjustment();
}

main();
