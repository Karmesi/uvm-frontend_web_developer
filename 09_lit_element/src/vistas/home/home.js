import { html, LitElement } from "lit-element";
import "./tabla.js";
import "./registro.js";

class Home extends LitElement{
    constructor() {
        super();
        this.lista = [
            { nombre: "Maria", apellidos: "García Pérez", edad: 30 },
            { nombre: "Carlos", apellidos: "González Prado", edad: 58 },
            { nombre: "Juan", apellidos: "Bernal Martínez", edad: 40 }
        ]
    }
    static get properties() {
        return {
            lista: {
                type: Array
            }
        }
    }
    agregarAlista(event) {
        let newLista = Object.assign([], this.lista);
        newLista.push(event.detail);
        this.lista = newLista;
    }
    render() {
        return html`
            <wc-registro @guardaPersona="${this.agregarAlista}"></wc-registro>
            <wc-tabla .lista="${this.lista}"></wc-tabla>
        `;
    }
}
window.customElements.define("wc-home", Home);