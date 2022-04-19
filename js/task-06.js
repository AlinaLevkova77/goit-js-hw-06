const inputElements = document.querySelector('#validation-input');
const totalLength = inputElements.getAttribute('data-length');
const inputData = parseInt(totalLength, 10);

inputElements.addEventListener('blur',onInputLength);

function onInputLength(event) {
    if (event.currentTarget.value.length === inputData) {
        event.currentTarget.classList.add('valid');
        event.currentTarget.classList.remove('invalid');
    } else {
        event.currentTarget.classList.add('invalid');
        event.currentTarget.classList.remove('valid');
      
    }
};
