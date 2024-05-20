function displayLikes() {
    let input = document.getElementById('namesInput').value;
    let names = input.split(',').map(name => name.trim()).filter(name => name.length > 0);

    let resultText = getLikesText(names);
    document.getElementById('result').innerText = resultText;
}

function getLikesText(names) {
    let count = names.length;
    switch (count) {
        case 0:
            return "No one likes this";
        case 1:
            return `${names[0]} likes this`;
        case 2:
            return `${names[0]} and ${names[1]} like this`;
        case 3:
            return `${names[0]}, ${names[1]} and ${names[2]} like this`;
        default:
            return `${names[0]}, ${names[1]} and ${count - 2} others like this`;
    }
}