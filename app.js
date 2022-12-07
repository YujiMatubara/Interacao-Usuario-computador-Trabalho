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

  let currentIndex = 0;
  let currentSize = 4;
  let mediaQuery = window.matchMedia("(max-width: 780px)");

  function getNumItems(match) {
    if (match.matches) {
      currentSize = 2;
    } else {
      currentSize = 4;
    }
  }

  getNumItems(mediaQuery);
  mediaQuery.addEventListener("change", getNumItems);

  function productIsShowing(index) {
    return index >= currentIndex && index < currentIndex + currentSize;
  }

  function updateItemsShowing() {
    if (currentIndex + currentSize > products.children.length) {
      currentIndex = products.children.length - currentSize;
    }

    Array.from(products.children).forEach((value, index, array) => {
      value.tabIndex = productIsShowing(index) ? "0" : "-1";
      value.setAttribute("aria-hidden", !productIsShowing(index));
    });
  }

  updateItemsShowing();
  mediaQuery.addEventListener("change", updateItemsShowing);

  leftArrow.addEventListener("click", () => {
    if (currentIndex - currentSize >= 0) {
      currentIndex -= currentSize;
    } else {
      currentIndex = 0;
    }

    products.style.transform = "translateX(" + currentIndex * -12.5 + "%)";
    updateItemsShowing();
  });

  rightArrow.addEventListener("click", () => {
    if (currentIndex + currentSize < products.children.length) {
      currentIndex += currentSize;
    } else {
      currentIndex = products.children.length - currentSize;
    }

    products.style.transform = "translateX(" + currentIndex * -12.5 + "%)";
    updateItemsShowing();
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
      dropdown: document.getElementById("dogs-dropdown"),
    },
    {
      button: document.getElementById("cats"),
      dropdown: document.getElementById("cats-dropdown"),
    },
    {
      button: document.getElementById("birds"),
      dropdown: document.getElementById("birds-dropdown"),
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

    value.button.addEventListener("click", () => {
      const pressed = value.button.getAttribute("aria-pressed") === "true";
      value.dropdown.style.display = !pressed ? "block" : "none";
      value.dropdown.setAttribute("aria-hidden", pressed);
      value.button.setAttribute("aria-pressed", !pressed);
      value.button.setAttribute("aria-expanded", !pressed);
    });

    value.button.addEventListener("keypress", (event) => {
      if (
        event.key === "Enter" ||
        event.key == " " ||
        event.key == "Spacebar"
      ) {
        event.preventDefault();
        value.button.click();
      }
    });
  });
}

function main() {
  banner();
  carousel();
  dropdown();
}

main();
