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
      inputFields[i].textContent = text.slice(0, -1);
      break;
    }
  }
}
