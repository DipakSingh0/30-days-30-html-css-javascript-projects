

const colourDisplaySection = document.getElementById("color-display");
const newColourBtnElement = document.getElementById("color-button");
// const colourCodeElement = document.getElementById("current-colour-code");
const colorCodeSection = document.getElementById("current-color-code");

const hexValues = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

function getRandomHexVlaue() {
  const randomIndexPosition = Math.floor(Math.random() * hexValues.length);
  const randomHexValue = hexValues[randomIndexPosition];
  return randomHexValue;
}

function getRandomHexString(stringLength) {
  let hexString = "";
  for (let i = 0; i < stringLength; i++) {
    hexString += getRandomHexVlaue();
  }
  return hexString;
}

newColourBtnElement.addEventListener("click", function () {
  const randomHexString = "#" + getRandomHexString(6);
  document.body.style.setProperty("background-color", randomHexString);
  //   colourCodeElement.textContent = randomHexString;

  colorCodeSection.textContent = randomHexString;
  colourDisplaySection.style.borderColor = randomHexString;
});
