// letter input function

function placeLetter(letter) {
  const gridItems = document.querySelectorAll(".grid-item");
  for (let i = 0; i < gridItems.length; i++) {
    const gridItem = gridItems[i];
    if (!gridItem.innerHTML) {
      gridItem.innerHTML = letter;
      gridItem.classList.add("black-border");
      break;
    }
  }
}

// backspace function

function backspaceClicked() {
  let inputKey = document.getElementsByClassName("grid-item");
  for (let i = inputKey.length - 1; i >= 0; i--) {
    let text = inputKey[i].textContent;
    if (text.length > 0) {
      inputKey[i].classList.remove("black-border");
      inputKey[i].textContent = text.slice(0, -1);

      break;
    }
  }
}

// Check if correct word function
function isCorrect() {
  const dictionary = ["HELLO"];
  const randomWord = dictionary[Math.floor(Math.random() * dictionary.length)];

  const gridItems = document.querySelectorAll(".grid-item");
  const currentWord = Array.from(gridItems)
    .map((item) => item.innerHTML)
    .join("");

  for (let i = 0; i < currentWord.length; i++) {
    const letter = currentWord[i];
    if (randomWord.includes(letter)) {
      if (letter === randomWord[i]) {
        gridItems[i].style.backgroundColor = "green";
      } else {
        gridItems[i].style.backgroundColor = "yellow";
      }
    }
  }
}

document.querySelector(".enter").addEventListener("click", function () {
  isCorrect();
});
