const menu = [
    { number: 1, name: "Margareta", price: 115.00 },
{ number: 2, name: "Al Fungi", price: 125.00 },
{ number: 3, name: "Vesuvio", price: 125.00 },
{ number: 4, name: "Capricciosa", price: 125.00 },
{ number: 5, name: "Hawaii", price: 125.00 },
{ number: 6, name: "Altonno", price: 125.00 },
{ number: 7, name: "Salami", price: 125.00 },
{ number: 8, name: "Mamma Mia", price: 125.00 },
{ number: 9, name: "Romana", price: 125.00 },
{ number: 10, name: "Milanese", price: 125.00 },
{ number: 11, name: "Opera", price: 130.00 },
{ number: 12, name: "Bahamas", price: 130.00 },
{ number: 13, name: "Mexikansk Pizza (Stark)", price: 135.00 },
{ number: 14, name: "Azteka", price: 130.00 },
{ number: 15, name: "Picante", price: 130.00 },
{ number: 16, name: "Cannibale", price: 130.00 },
{ number: 17, name: "Tommaso", price: 130.00 },
{ number: 18, name: "Marinara", price: 130.00 },
{ number: 19, name: "Vegetariana", price: 130.00 },
{ number: 20, name: "Quattro Stagioni", price: 135.00 },
{ number: 21, name: "Tropicana", price: 130.00 },
{ number: 22, name: "Palermo", price: 130.00 },
{ number: 23, name: "Orientale", price: 130.00 },
{ number: 24, name: "Napoli", price: 130.00 },
{ number: 25, name: "Robot Special", price: 130.00 },
{ number: 26, name: "Värmland", price: 130.00 },
{ number: 27, name: "Freden", price: 130.00 },
{ number: 28, name: "Matador", price: 135.00 },
{ number: 29, name: "Gorgonzola", price: 135.00 },
{ number: 30, name: "Afrikana", price: 135.00 },
{ number: 31, name: "Pizza Oscar", price: 135.00 },
{ number: 32, name: "España", price: 135.00 },
{ number: 33, name: "Frutti Di Mare", price: 135.00 },
{ number: 34, name: "Henån Special", price: 135.00 },
{ number: 35, name: "Torino", price: 140.00 },
{ number: 36, name: "Calzone", price: 125.00 },
{ number: 37, name: "Calzone Special", price: 130.00 },
{ number: 38, name: "Ciao Ciao", price: 150.00 },
{ number: 39, name: "Viking Båt (Halvinbakad)", price: 150.00 },
{ number: 40, name: "San Remo (Halvinbakad)", price: 145.00 },
{ number: 41, name: "Disco (Dubbel deg som tefat)", price: 140.00 },
{ number: 42, name: "Taxi Special (Halvinbakad)", price: 140.00 },
{ number: 43, name: "Acapulco (Stark)", price: 150.00 },
{ number: 44, name: "Amadeus", price: 150.00 },
{ number: 45, name: "Vagabond", price: 150.00 },
{ number: 46, name: "Reale", price: 150.00 },
{ number: 47, name: "Milano", price: 150.00 },
{ number: 48, name: "Gourmé", price: 150.00 },
{ number: 0, name: "Liffner Special", price: 160.00 },
{ number: 49, name: "Kebabpizza", price: 135.00 },
{ number: 50, name: "Favoriten", price: 140.00 },
{ number: 51, name: "Provenciale", price: 140.00 },
{ number: 52, name: "Pizza Special", price: 140.00 },
{ number: 53, name: "Testarossa", price: 140.00 },
{ number: 54, name: "Amed", price: 145.00 },
{ number: 55, name: "Orust Special", price: 150.00 },
{ number: 56, name: "Husets Special", price: 150.00 },
{ number: 57, name: "Bombay Special", price: 135.00 },
{ number: 58, name: "La Maffia", price: 135.00 },
{ number: 59, name: "Pollo", price: 140.00 },
{ number: 60, name: "Kyckling Special", price: 140.00 },
{ number: 61, name: "Flygande Jakob", price: 135.00 },
{ number: 62, name: "Primavera", price: 145.00 },
{ number: 63, name: "Pasquala", price: 145.00 },
{ number: 64, name: "Venedig", price: 145.00 },
{ number: 65, name: "La Bella", price: 145.00 },
{ number: 66, name: "Parma", price: 145.00 },
{ number: 0, name: "Standard Pita", price: 125.00 },
{ number: 0, name: "Grekisk Pita", price: 130.00 },
{ number: 0, name: "Mexikansk Pita", price: 130.00 },
{ number: 0, name: "Kebabtallrik", price: 130.00 },
{ number: 0, name: "Kebabrulle", price: 125.00 },
{ number: 0, name: "Kebabrulle Mix", price: 130.00 },
{ number: 0, name: "Kycklingkebab (Hembakat Pitabröd)", price: 130.00 },
{ number: 0, name: "Kycklingrulle", price: 130.00 },
{ number: 0, name: "Kycklingtallrik", price: 135.00 },
{ number: 0, name: "Kycklingtallrik mix", price: 140.00 },
{ number: 0, name: "Amerikansk sallad", price: 130.00 },
{ number: 0, name: "Tonfisksallad", price: 130.00 },
{ number: 0, name: "Kycklingsallad", price: 130.00 },
{ number: 0, name: "Kebabsallad", price: 130.00 },
{ number: 0, name: "Grekisk Sallad", price: 130.00 },
{ number: 0, name: "Du Chef", price: 130.00 },
{ number: 0, name: "Skaldjurssallad", price: 135.00 },
{ number: 0, name: "Räksallad", price: 130.00 },
{ number: 0, name: "Kebabsallad Mix", price: 135.00 },
{ number: 0, name: "Köttbullar 8st", price: 125.00 },
{ number: 0, name: "Ägg & Bacon", price: 145.00 },
{ number: 0, name: "Fish´n Chips", price: 145.00 },
{ number: 0, name: "Pytt I Panna", price: 145.00 },
{ number: 0, name: "Schnitzel", price: 145.00 },
{ number: 0, name: "Lövbiff", price: 145.00 },
{ number: 0, name: "Pasta Alfredo", price: 145.00 },
{ number: 0, name: "Kycklingpasta", price: 145.00 },
{ number: 0, name: "Pasta Riviera", price: 145.00 },
{ number: 0, name: "Pasta Gongonzola", price: 145.00 },
{ number: 0, name: "Lasagne", price: 145.00 },
{ number: 0, name: "Pasta Indiana", price: 145.00 },
{ number: 0, name: "Smal Kokt/Grillad (bröd)", price: 45.00 },
{ number: 0, name: "Smal Kokt/Grillad (mos)", price: 80.00 },
{ number: 0, name: "Smal Kokt/Grillad (pommes)", price: 85.00 },
{ number: 0, name: "Tjock Korv (bröd)", price: 55.00 },
{ number: 0, name: "Tjock Korv (mos)", price: 90.00 },
{ number: 0, name: "Tjock Korv (pommes)", price: 95.00 },
{ number: 0, name: "Hel special", price: 90.00 },
{ number: 0, name: "Halv Special", price: 80.00 },
{ number: 0, name: "Hel Special Tjock", price: 110.00 },
{ number: 0, name: "Halv Special Tjock", price: 90.00 },
{ number: 0, name: "Hamburgare (90 gram)", price: 85.00 },
{ number: 0, name: "Hamburgare (150 gram)", price: 95.00 },
{ number: 0, name: "Ostburgare (90 gram)", price: 90.00 },
{ number: 0, name: "Ostburgare (150 gram)", price: 100.00 },
{ number: 0, name: "Baconburgare (90 gram)", price: 95.00 },
{ number: 0, name: "Baconburgare (150 gram)", price: 105.00 },
{ number: 0, name: "Hawaiiburgare (90 gram)", price: 90.00 },
{ number: 0, name: "Hawaiiburgare (150 gram)", price: 100.00 },
{ number: 0, name: "Västkustburgare (90 gram)", price: 100.00 },
{ number: 0, name: "Västkustburgare (150 gram)", price: 110.00 },
{ number: 0, name: "Dubbelburgare (90 gram)", price: 115.00 },
{ number: 0, name: "Dubbelburgare (150 gram)", price: 125.00 },
{ number: 0, name: "Dubbelburgare Lyx (Västkustsallad) (90 gram)", price: 130.00 },
{ number: 0, name: "Dubbelburgare Lyx (Västkustsallad) (150 gram)", price: 140.00 },
{ number: 0, name: "Hamburgare Meny 90 gram (dricka + strips)", price: 125.00 },
{ number: 0, name: "Hamburgare Meny 150 gram", price: 135.00 },
{ number: 0, name: "Crispy Kyckling Burgare (Med pommes och dricka)", price: 140.00 },
{ number: 0, name: "Chicken Nuggets (6st) Med Pommes", price: 135.00 },
{ number: 0, name: "Chicken Fingers (5st) Med Pommes", price: 135.00 },
{ number: 0, name: "Falafel (pitabröd)", price: 115.00 },
{ number: 0, name: "Falafel (rulle)", price: 115.00 },
{ number: 0, name: "Falafel (tallrik)", price: 120.00 },
{ number: 0, name: "Barnpizza (tillbehör)", price: 10.00 },
{ number: 0, name: "Köttvaror (tillbehör)", price: 25.00 },
{ number: 0, name: "Ost (tillbehör)", price: 20.00 },
{ number: 0, name: "Skaldjur (tillbehör)", price: 25.00 },
{ number: 0, name: "Grönsaker (tillbehör)", price: 20.00 },
{ number: 0, name: "Sås (tillbehör)", price: 15.00 },
{ number: 0, name: "Mosbricka (tillbehör)", price: 60.00 },
{ number: 0, name: "Pommestallrik (tillbehör)", price: 60.00 },
{ number: 0, name: "Västkustsallad (tillbehör)", price: 25.00 },
{ number: 0, name: "Glutenfri pizza (tillbehör)", price: 25.00 },
    // Add more items as needed
];




const cart = {};

document.getElementById('search-input').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const results = menu.filter(item => 
        item.name.toLowerCase().startsWith(query) || item.number.toString().startsWith(query)
    ).slice(0, 5); // Limit to 5 results
    
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    results.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `${item.name} - ${item.price} kr 
            <button class="plus" data-number="${item.number}" data-price="${item.price}">+</button>
            <button class="minus" data-number="${item.number}" data-price="${item.price}">-</button>
            <span class="quantity" id="quantity-${item.number}">0</span>`;
        resultsContainer.appendChild(li);
    });
});

document.getElementById('results').addEventListener('click', function(e) {
    if (e.target.classList.contains('plus')) {
        const price = parseFloat(e.target.getAttribute('data-price'));
        const number = e.target.getAttribute('data-number');

        if (!cart[number]) {
            cart[number] = { name: menu.find(item => item.number == number).name, quantity: 0, price: price };
        }
        cart[number].quantity += 1;

        updateTotalPrice();
        updateQuantityDisplay(number);
        updateSelectedItems();
    }

    if (e.target.classList.contains('minus')) {
        const price = parseFloat(e.target.getAttribute('data-price'));
        const number = e.target.getAttribute('data-number');

        if (cart[number] && cart[number].quantity > 0) {
            cart[number].quantity -= 1;
            if (cart[number].quantity === 0) {
                delete cart[number];
            }
        }

        updateTotalPrice();
        updateQuantityDisplay(number);
        updateSelectedItems();
    }
});

document.getElementById('reset-button').addEventListener('click', function() {
    document.getElementById('search-input').value = '';
    document.getElementById('results').innerHTML = '';
    document.getElementById('total-price').textContent = '0.00 kr';
    document.getElementById('selected-items').innerHTML = '';
    for (let key in cart) {
        updateQuantityDisplay(key, 0);
    }
    Object.keys(cart).forEach(key => delete cart[key]);
});

function updateTotalPrice() {
    const totalPriceElement = document.getElementById('total-price');
    const total = Object.values(cart).reduce((sum, item) => sum + item.quantity * item.price, 0);
    totalPriceElement.textContent = `${total.toFixed(2)} kr`;
}

function updateQuantityDisplay(number, quantity = null) {
    const quantityElement = document.getElementById(`quantity-${number}`);
    if (quantity === null) {
        quantityElement.textContent = cart[number] ? cart[number].quantity : 0;
    } else {
        quantityElement.textContent = quantity;
    }
}

function updateSelectedItems() {
    const selectedItemsContainer = document.getElementById('selected-items');
    selectedItemsContainer.innerHTML = '';

    Object.values(cart).forEach(item => {
        if (item.quantity > 0) {
            const div = document.createElement('div');
            div.textContent = `${item.name}: ${item.quantity} x ${item.price} kr`;
            selectedItemsContainer.appendChild(div);
        }
    });
}

// CSS styles for added items
const style = document.createElement('style');
style.innerHTML = `
    .added {
        background-color: #d4edda;
        color: #155724;
    }
    .quantity {
        margin-left: 10px;
        font-weight: bold;
    }
    #selected-items div {
        margin-top: 5px;
    }
`;
document.head.appendChild(style);

