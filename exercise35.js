function changeImage() {
  const image = document.querySelector("#image");
  const url = prompt("Enter image URL:");
  const borderColor = prompt("Enter border color (e.g., 'red' or '#ff0000'):");
  const borderWidth = prompt("Enter border width in pixels ");
  const height = prompt("Enter border height in pixels ");
  const borderRudius = prompt("Enter border radius in pixels ");

  image.style.border = `${borderWidth}px solid ${borderColor}`;
  image.style.height = `${height}px`;
  image.style.borderRadius = `${borderRudius}px`;

  image.setAttribute("src", url);
}
