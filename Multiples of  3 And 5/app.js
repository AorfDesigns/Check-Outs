function calculateSum() {
    let num = parseInt(document.getElementById('numberInput').value);
    if (isNaN(num) || num < 0) {
        document.getElementById('result').innerText = "Please enter a valid non-negative number.";
        return;
    }

    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    document.getElementById('result').innerText = `The sum of multiples of 3 or 5 below ${num} is ${sum}.`;
}