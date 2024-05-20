function doubleArray() {
    let input = document.getElementById('arrayInput').value;
    let array = input.split(',').map(Number);
    if (array.some(isNaN)) {
        document.getElementById('result').innerText = "Please enter a valid array of integers.";
        return;
    }
    let doubledArray = array.map(x => x * 2);
    document.getElementById('result').innerText = `Doubled array: [${doubledArray.join(', ')}]`;
}