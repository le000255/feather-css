import { usageInstructions } from './data.js';

const usageElements = document.querySelectorAll('.usage');

usageElements.forEach(element => {
    const id = element.getAttribute('id');
    const instruction = usageInstructions.find(item => item.id === id);
    if (instruction) {
        element.innerHTML = instruction.code;
    }
});