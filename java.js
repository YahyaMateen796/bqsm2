function appendToDisplay(value) {
    document.getElementById('display').value += value
}

function clearDisplay(value) {
    document.getElementById('display').value = ''
}

function calculate(value) {
    try {
        let result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (erro) {
        document.getElementById('display').value = 'ERROR'
    }
}