let counterValue = 0;

const button = {
    delete: document.querySelector('[data-action="decrement"]'),
    add: document.querySelector('[data-action="increment"]'),
    span: document.querySelector('#value'),
};

const increment = () => {
    counterValue += 1;
    
    button.span.textContent = counterValue;
};
const decrement = () => {
    counterValue -= 1;
    
    button.span.textContent = counterValue;
};



button.add.addEventListener('click', increment);
button.delete.addEventListener('click', decrement);

