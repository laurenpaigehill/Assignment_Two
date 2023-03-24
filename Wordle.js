function placeLetter(letter) {
  const gridItems = document.querySelectorAll(".grid-item");
  for (let i = 0; i < gridItems.length; i++) {
    const gridItem = gridItems[i];
    if (!gridItem.innerHTML) {
      gridItem.innerHTML = letter;
      break;
    }
  }
}
