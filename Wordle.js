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
  var inputFields = document.getElementsByClassName("grid-item");
  for (var i = inputFields.length - 1; i >= 0; i--) {
    var text = inputFields[i].textContent;
    if (text.length > 0) {
      inputFields[i].classList.remove("black-border");
      inputFields[i].textContent = text.slice(0, -1);

      break;
    }
  }
}

// Check if correct word function

document.querySelector(".enter").addEventListener("click", function () {
  isCorrect();
});

function isCorrect() {
  const dictionary = ["HELLO", "EARTH", "PLANE", "HOUSE", "AUDIO", "PHONE"];

  const randomWord = dictionary[Math.floor(Math.random() * dictionary.length)];

  // Get all the grid items
  const gridItems = document.querySelectorAll(".grid-item");
  // Get the current word as a string
  const currentWord = Array.from(gridItems)
    .map((item) => item.innerHTML)
    .join("");

  // Check if the current word is in the dictionary
  const isCorrect = dictionary.includes(currentWord);
  if (isCorrect) {
    // Loop through each letter in the current word
    for (let i = 0; i < currentWord.length; i++) {
      const letter = currentWord[i];
      // Check if the letter is included in the correct word
      if (dictionary[0].includes(letter)) {
        // Add a class to the corresponding grid item and style it with a green background
        gridItems[i].classList.add("correct");
        gridItems[i].style.backgroundColor = "green";
      }
    }
  } else {
    console.log("Try again!");
  }
}
