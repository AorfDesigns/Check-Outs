function calculateHydration() {
    let hours = parseFloat(document.getElementById('hours').value);
    let liters = Math.floor(hours * 0.5);
    document.getElementById('result').innerText = `Nathan will drink ${liters} liters of water.`;
}