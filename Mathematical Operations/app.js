function basicOperation(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            if (value2 !== 0) {
                return value1 / value2;
            } else {
                return 'Error: Division by zero';
            }
        default:
            return 'Error: Invalid operation';
    }
}

function performOperation() {
    const operation = document.getElementById('operation').value;
    const value1 = parseFloat(document.getElementById('value1').value);
    const value2 = parseFloat(document.getElementById('value2').value);

    if (!isNaN(value1) && !isNaN(value2)) {
        const result = basicOperation(operation, value1, value2);
        document.getElementById('result').innerText = `Result: ${result}`;
    } else {
        document.getElementById('result').innerText = 'Please enter valid numbers.';
    }
}