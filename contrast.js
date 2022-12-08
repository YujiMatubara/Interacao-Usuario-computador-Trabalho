function contrastButton() {
  const contrast = document.getElementById("contrast-button");

  contrast.addEventListener("click", () => {
    document.documentElement.className = (document.documentElement.className !== "contrast") ? "contrast" : "normal";
  });
}

function main() {
  contrastButton();
}

main();
