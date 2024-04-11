// inputs
var inptBinary = document.getElementById("binaryInput");
var inptDecimal = document.getElementById("decimalInput");

// div with information about limitations
var infoBinary = document.getElementById("infoBinary");
var infoDecimal = document.getElementById("infoDecimal");

// convert binary to decimal
inptBinary.addEventListener("input", () => {
  let binaryNum = inptBinary.value;
  let lastDigit = parseInt(binaryNum.charAt(binaryNum.length - 1));

  binaryNum = binaryNum.replace(/[^0-1]/g, '');
  inptBinary.value = binaryNum;

  if(binaryNum.length > 8){
    binaryNum = binaryNum.substr(0, 8);
    inptBinary.value = binaryNum;
  }

  if(lastDigit != 0 && lastDigit != 1 && isNaN(lastDigit) == false){
    showInfoBinary();
    return;
  }

  if(binaryNum == "" && isNaN(lastDigit) == true){
    hideInfo();
    inptDecimal.value = "";
    return;
  }

  let decimalNum = parseInt(binaryNum, 2).toString();

  inptDecimal.value = decimalNum;
});

// convert decimal to binary
inptDecimal.addEventListener("input", () => {
  let decimalNum = inptDecimal.value;

  decimalNum = decimalNum.replace(/[^0-9]/g, '');
  inptDecimal.value = decimalNum;

  if (decimalNum < 0){
    showInfoDecimal();
    decimalNum = 0;
    inptDecimal.value = 0;
  }

  if (decimalNum > 255){
    showInfoDecimal()
    decimalNum = 255;
    inptDecimal.value = 255;
  }

  if(decimalNum == ""){
    hideInfo();
    inptBinary.value = "";
    return;
  }

  let binaryNum = Number(decimalNum).toString(2);

  inptBinary.value = binaryNum;
});

// hide all information divs
function hideInfo() {
  infoBinary.style.animation = "fade-out 700ms forwards";
  infoDecimal.style.animation = "fade-out 700ms forwards";

  setTimeout( () => {
    infoBinary.style.display = "none";
    infoDecimal.style.display = "none";
  }, 800);
}

// show binary information div
function showInfoBinary() {
  infoBinary.style.animation = "fade-in 700ms forwards";
  infoBinary.style.display = "flex";
}

// show decimal information div
function showInfoDecimal() {
  infoDecimal.style.animation = "fade-in 700ms forwards";
  infoDecimal.style.display = "flex";
}