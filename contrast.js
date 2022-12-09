function contrastButton() {
  const contrast = document.getElementById("contrast-button");
  let isOn = false;

  contrast.addEventListener("click", () => {
    document.documentElement.style.filter = (isOn) ? "" : "grayscale(100%)";
    isOn = !isOn;
  });
}

function main() {
  contrastButton();
}

main();
