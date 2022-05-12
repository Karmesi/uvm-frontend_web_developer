// $: python -m SimpleHTTPServer

/*
const req = new XMLHttpRequest();
req.addEventListener('load', reqListener);

const scriptUrl = document.currentScript.src.replace(location.origin, '').split('/');
scriptUrl.pop();

req.open('GET', scriptUrl.join('/') + '/saludotemplate.html');
req.send();

function reqListener() {
    const template = this.responseText;
    const div = document.createElement('div');
    div.innerHTML = template;

    window.customElements.define('componente-saludo', class extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({ mode: 'open' });
            let content = div.firstChild.content;
            this.shadowRoot.appendChild(content);
        }
    });
}
*/

window.customElements.define('componente-saludo', class extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        let template = `<h1>Hola Mundo</h1>`;
        this.shadowRoot.innerHTML = template;
    }
});