import { html, LitElement } from "lit-element";

class Tabla extends LitElement{
    constructor() {
        super();
    }
    static get properties() {
        return {
            lista: {
                type: Array
            }
        }
    }
    render() {
        return html`
            <h1>Tabla de registros</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Edad</th>
                    </tr>
                </thead>
                <tbody>
                    ${this.lista.map((elemento) => {
                        return html`
                            <tr>
                                <td>${elemento.nombre}</td>
                                <td>${elemento.apellido}</td>
                                <td>${elemento.edad}</td>
                            </tr>
                        `;
                    })}
                </tbody>
            </table>
        `;
    }
}
window.customElements.define("wc-tabla", Tabla);