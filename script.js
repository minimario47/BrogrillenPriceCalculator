const menu = [
    { number: 1, name: "Margareta", price: 115.00 },
    { number: 2, name: "Al Fungi", price: 125.00 },
    { number: 3, name: "Vesuvio", price: 125.00 },
    { number: 4, name: "Capricciosa", price: 125.00 },
    { number: 5, name: "Hawaii", price: 125.00 },
    // Add more items as needed
];

document.getElementById('search-input').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const results = menu.filter(item => 
        item.name.toLowerCase().includes(query) || item.number.toString().includes(query)
    );
    
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    results.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `${item.name} - ${item.price} kr <button data-price="${item.price}">+</button>`;
        resultsContainer.appendChild(li);
    });
});

document.getElementById('results').addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON') {
        const price = parseFloat(e.target.getAttribute('data-price'));
        const totalPriceElement = document.getElementById('total-price');
        const currentTotal = parseFloat(totalPriceElement.textContent.split(' ')[0]);
        const newTotal = currentTotal + price;
        totalPriceElement.textContent = `${newTotal.toFixed(2)} kr`;
    }
});

document.getElementById('reset-button').addEventListener('click', function() {
    document.getElementById('search-input').value = '';
    document.getElementById('results').innerHTML = '';
    document.getElementById('total-price').textContent = '0.00 kr';
});
