export const store = {
    platos: [],
    addPlato(plato) {
        this.platos.push(plato);
        this.save();
    },

    removePlato(nombre) {
        this.platos = this.platos.filter(plato => plato !== nombre);
        this.save();
    },

    save() {
        localStorage.setItem('platos', JSON.stringify(this.platos));
    },

    load() {
        const storedPlatos = localStorage.getItem('platos');
        if (storedPlatos) {
            this.platos = JSON.parse(storedPlatos);
        }
    }
};