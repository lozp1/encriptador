function performOperation() {
  var inputText = document.getElementById("inputText").value.toLowerCase();
  var outputText = "";
  var operation = document.querySelector(
    'input[name="operation"]:checked'
  ).value;

  if (operation === "encrypt") {
    outputText = encryptText(inputText);
  } else {
    outputText = decryptText(inputText);
  }

  document.getElementById("outputText").value = outputText;
}

function encryptText(text) {
  var encryptedText = text
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
  return encryptedText;
}

function decryptText(text) {
  var decryptedText = text
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  return decryptedText;
}

function copyText() {
  var outputText = document.getElementById("outputText");
  outputText.select();
  document.execCommand("copy");
  alert("Texto copiado al portapapeles");
}
