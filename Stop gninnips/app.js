function reverseLongWords() {
    let input = document.getElementById('stringInput').value;
    let result = reverseWords(input);
    document.getElementById('result').innerText = result;
}

function reverseWords(str) {
    return str.split(' ').map(word => {
        return word.length >= 5 ? word.split('').reverse().join('') : word;
    }).join(' ');
}