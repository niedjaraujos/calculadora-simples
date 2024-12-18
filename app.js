let inputDisplay = document.querySelector('input');
let currentNumber = '';


function takeValue(calculator) {
    currentNumber += calculator
    inputDisplay.value = currentNumber;
    // Adiciona valores ao visor
}

function cleanLast() {
    currentNumber = currentNumber.slice(0, -1); // Remove o último caractere
    inputDisplay.value = currentNumber; // Atualiza o visor
}

function calculate() {
    try {
        let result = eval(currentNumber); // Avalia a expressão
        inputDisplay.value = result.toFixed(2); // Mostra o resultado com 2 casas decimais
        currentNumber = ''; // Reseta o número atual
    } catch {
        inputDisplay.value = 'Erro'; // Exibe erro se a expressão for inválida
        currentNumber = ''; // Reseta o número atual
    }
}

function cleanDisplay() {
    inputDisplay.value = ''; // Reseta o valor do visor
    currentNumber = ''; // Reseta o número atual
}