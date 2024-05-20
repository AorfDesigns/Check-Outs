function calculateCentury() {
    let year = parseInt(document.getElementById('year').value);
    if (isNaN(year) || year < 1) {
        document.getElementById('result').innerText = "Please enter a valid year.";
        return;
    }
    let century = Math.ceil(year / 100);
    document.getElementById('result').innerText = `The year ${year} is in the ${century} century.`;
}