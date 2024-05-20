function findOutlier() {
    let input = document.getElementById('arrayInput').value;
    let array = input.split(',').map(Number);
    
    if (array.length < 3) {
        document.getElementById('result').innerText = "The array must have at least 3 integers.";
        return;
    }
    
    let outlier = getOutlier(array);
    document.getElementById('result').innerText = `The outlier is: ${outlier}`;
}

function getOutlier(arr) {
    let evens = arr.filter(num => num % 2 === 0);
    let odds = arr.filter(num => num % 2 !== 0);
    
    return evens.length === 1 ? evens[0] : odds[0];
}