
let botaoAdd = document.getElementById('display')
function mostrarElemento(element) {
    botaoAdd.value += element // += itera o novo numero sem subscrever o outro
}
function limpar() {
    botaoAdd.value = ''
}
function apagar() {
    botaoAdd.value = botaoAdd.value.slice(0, -1)
}

function calcular() {

    try {
        botaoAdd.value = eval(botaoAdd.value)
    }
    catch {
        botaoAdd.value = 'erro'
    }
}
