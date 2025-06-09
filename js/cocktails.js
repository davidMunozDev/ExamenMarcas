import { store } from "./store.js";

function httpService(url) {
    return fetch(url)
        .then(response => {
            return response.json();
        })
}

function renderCocktails(cocktails) {
    const container = document.getElementById('coctails');
    if (!container) return;
    container.innerHTML = '';
    cocktails.forEach(cocktail => {
        const card = document.createElement('div');
        card.className = 'cocktail-card';
        card.innerHTML = `
            <h2>${cocktail.strDrink || 'Unnamed Cocktail'}</h2>
            <p>${cocktail.strInstructions || ''}</p>
            <img src="${cocktail.strDrinkThumb || ''}" alt="${cocktail.name || 'Cocktail'}" />
        `;
        card.addEventListener('click', () => {
            store.addPlato(cocktail.strDrink)
        });
        container.appendChild(card);
    });
}

async function init() {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';
    const data = await httpService(url)
    renderCocktails(data.drinks);
}

init()