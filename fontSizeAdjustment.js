function fontSizeAdjustment(lowerLimit = 16, upperLimit = 32) {
  const increaseButton = document.getElementById("font-size-increase");
  const decreaseButton = document.getElementById("font-size-decrease");
  const texts = document.getElementsByClassName("font-size");
  console.log(texts);
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
  fontSizeAdjustment();
}

main();
