function getInputValueById(inputFieldId) {
  let inputField = document.getElementById(inputFieldId);
  let inputFieldValueString = inputField.value;
  let inputFieldValue = parseFloat(inputFieldValueString);
  inputField.value = '';
  return inputFieldValue;
}

function getTextElementValueById(elementId) {
  let textElement = document.getElementById(elementId);
  let textElementValueString = textElement.innerText;
  let textElementvalue = parseFloat(textElementValueString);
  return textElementvalue;
}

function setTextElementValueById(elementId, newValue) {
  let textElement = document.getElementById(elementId);
  textElement.innerText = newValue;
}