// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
//  подставляет его текущее значение в span#name - output.Если инпут пустой, в спане должна отображаться строка "Anonymous".
const refs = {
    yourName: document.querySelector('#name-input'),
    nameOutput: document.querySelector('#name-output'),
};

refs.yourName.addEventListener('input',oninputChange);

function oninputChange (event){
    if (refs.yourName.value === '') {
        refs.nameOutput.textContent = 'Anonymous';
    }
    refs.nameOutput.textContent = event.currentTarget.value;
};





