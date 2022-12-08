function buttons() {
  const counters = document.getElementsByClassName("plus-minus");

  Array.from(counters).forEach((value, index, array) => {
    let children = Array.from(value.children);
    let minus = children[0];
    let numberInput = children[1];
    let plus = children[2];

	numberInput.addEventListener("change", (event) => {
      let value = event.target.value <= 1;
	  minus.disabled = value;
      minus.setAttribute("aria-disabled", value);
	  if (numberInput.value < 1) {
        numberInput.value = 1;
	  }
	});

    minus.addEventListener("click", () => {
      if (numberInput.value <= 2) {
        minus.disabled = true;
        minus.setAttribute("aria-disabled", "true");
	  }
	  if (numberInput.value > 1) {
        numberInput.value--;
	  }
    });
    
    plus.addEventListener("click", () => {
      if (numberInput.value <= 1) {
        minus.disabled = false;
        minus.setAttribute("aria-disabled", "false");
      }
	  numberInput.value++;
	});

	minus.addEventListener("keypress", (event) => {
      if (event.key === "Enter" || event.key == " " || event.key == "Spacebar") {
        event.preventDefault();
	    minus.click();
     }
    });

    plus.addEventListener("keypress", (event) => {
      if (event.key === "Enter" || event.key == " " || event.key == "Spacebar") {
        event.preventDefault();
        plus.click();
      }
    });
  });
}

function main() {
  buttons();
}

main();