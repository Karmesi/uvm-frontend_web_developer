import { html, LitElement } from "lit-element";

class Registro extends LitElement{
    constructor() {
        super();
        this.nombre = this.apellidos = this.edad = "";
    }
    static get properties() {
        return {
            nombre: {
                type: String
            },
            apellido: {
                type: String
            },
            edad: {
                type: Number
            }
        }
    }
    manejador(nombre) {
        return (event) => {
            let valor = event.target.value;
            this[nombre] = valor;
        }
    }
    guardar() {
        let detail = {
            nombre: this.nombre,
            apellidos: this.apellidos,
            edad: this.edad
        };
        let opciones = {
            detail: detail,
            bubble: true,
            composed: true
        }
        this.dispatchEvent(new CustomEvent("guardaPersona", opciones));
    }
    render() {
        return html`
            <form>
                <label>Nombre <input @input="${this.manejador('nombre')}" .value="${this.nombre}"/></label>
                <label>Apellidos <input @input="${this.manejador('apellidos')}" .value="${this.apellidos}"/></label>
                <label>Edad <input @input="${this.manejador('edad')}" .value="${this.edad}"/></label>
                <button @click="${this.guardar}" type="button">Guardar</button>
            </form>
        `;
    }
}
window.customElements.define("wc-registro", Registro);