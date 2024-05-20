function calculateDigitalRoot() {
    let num = parseInt(document.getElementById('numberInput').value);
    if (isNaN(num) || num < 0) {
        document.getElementById('result').innerText = "Please enter a valid non-negative integer.";
        return;
    }

    let digitalRoot = getDigitalRoot(num);
    document.getElementById('result').innerText = `The digital root of ${num} is ${digitalRoot}.`;
}

function getDigitalRoot(n) {
    while (n >= 10) {
        n = n.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
    }
    return n;
}