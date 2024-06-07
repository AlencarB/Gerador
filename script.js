// script.js
document.addEventListener('DOMContentLoaded', () => {
    const generatedNumbers = new Set();
    const numberList = document.getElementById('number-list');
    const generateButton = document.getElementById('generate-button');
    const quantityInput = document.getElementById('quantity');

    function generateUniqueNumber() {
        let number;
        do {
            number = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
        } while (generatedNumbers.has(number));
        generatedNumbers.add(number);
        return number;
    }

    function generateNumbers(quantity) {
        numberList.innerHTML = '';
        generatedNumbers.clear();
        for (let i = 0; i < quantity; i++) {
            const newNumber = generateUniqueNumber();
            addNumberToList(newNumber);
        }
    }

    function addNumberToList(number) {
        const listItem = document.createElement('li');
        listItem.textContent = number;
        numberList.appendChild(listItem);
    }

    generateButton.addEventListener('click', () => {
        const quantity = parseInt(quantityInput.value, 10);
        if (!isNaN(quantity) && quantity > 0 && quantity <= 900000) {
            generateNumbers(quantity);
        } else {
            alert('Por favor, insira um número válido entre 1 e 900000.');
        }
    });
});