// objeto de arrays de platos
const platos = {
    "pizzas": [
        { nombre: "Margarita", descfripcion: "Pizza con tomate, queso y albahaca", precio: 8.99 },
        { nombre: "Pepperoni", descfripcion: "Pizza con tomate, queso y pepperoni", precio: 9.99 },
        { nombre: "Hawaiana", descfripcion: "Pizza con tomate, queso, jamón y piña", precio: 10.99 },
        { nombre: "Cuatro Quesos", descfripcion: "Pizza con mezcla de cuatro quesos", precio: 11.49 }
    ],
    "hamburguesas": [
        { nombre: "Clásica", descfripcion: "Hamburguesa con carne, lechuga, tomate y cebolla", precio: 6.99 },
        { nombre: "Doble Queso", descfripcion: "Hamburguesa con doble carne y doble queso", precio: 8.99 },
        { nombre: "Vegetariana", descfripcion: "Hamburguesa con garbanzos, lechuga y tomate", precio: 7.99 },
        { nombre: "BBQ", descfripcion: "Hamburguesa con salsa barbacoa, bacon y queso cheddar", precio: 9.49 }
    ],
    "ensaladas": [
        { nombre: "César", descfripcion: "Ensalada con lechuga, pollo, crutones y aderezo César", precio: 5.99 },
        { nombre: "Caprese", descfripcion: "Ensalada con tomate, mozzarella y albahaca", precio: 6.49 },
        { nombre: "Griega", descfripcion: "Ensalada con pepino, tomate, cebolla y queso feta", precio: 6.99 },
        { nombre: "Mediterránea", descfripcion: "Ensalada con atún, huevo, aceitunas y pimientos", precio: 7.29 }
    ]
}

function renderSeccion(platos) {
    const container = document.getElementById('platos');
    if (!container) return;
    container.innerHTML = '';

    Object.keys(platos).forEach(seccion => {
        const seccionDiv = document.createElement('div');
        seccionDiv.className = 'seccion';
        seccionDiv.innerHTML = `<h2>${seccion.charAt(0).toUpperCase() + seccion.slice(1)}</h2>`;

        // Nuevo div para la lista de platos
        const listaDiv = document.createElement('div');
        listaDiv.className = 'lista-platos';

        platos[seccion].forEach(plato => {
            const platoDiv = document.createElement('div');
            platoDiv.className = 'plato';
            platoDiv.innerHTML = `
                <h3>${plato.nombre}</h3>
                <p>${plato.descfripcion}</p>
                <p>Precio: $${plato.precio.toFixed(2)}</p>
            `;
            listaDiv.appendChild(platoDiv);
        });

        seccionDiv.appendChild(listaDiv);
        container.appendChild(seccionDiv);
    });
}

async function init() {
    renderSeccion(platos);
}

init()