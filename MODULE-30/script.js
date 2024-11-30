const codeInput = document.getElementById('code');
const outputDiv = document.getElementById('output');

codeInput.addEventListener('input', () => {
  const code = codeInput.value;
  try {
    const result = eval(code); // Note: Using eval is not recommended in production
    outputDiv.innerText = result;
  } catch (error) {
    outputDiv.innerText = error.message;
  }
});