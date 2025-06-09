import { store } from "./store.js";
store.load();

const ordersSection = document.getElementById('orders');

function renderOrders() {
    ordersSection.innerHTML = '';
    if (store.platos.length === 0) {
        ordersSection.innerHTML = '<p>No hay platos guardados.</p>';
        return;
    }
    const ul = document.createElement('ul');
    store.platos.forEach(plato => {
        const li = document.createElement('li');
        li.textContent = typeof plato === 'string' ? plato : plato.nombre || JSON.stringify(plato);
        // Crear botón de eliminar
        const btn = document.createElement('button');
        btn.textContent = 'Eliminar';
        btn.addEventListener('click', () => {
            const nombre = typeof plato === 'string' ? plato : plato.nombre;
            store.removePlato(nombre);
            renderOrders();
        });
        li.appendChild(btn);
        ul.appendChild(li);
    });
    ordersSection.appendChild(ul);
}

renderOrders();