import { obtenerChiste } from "./http-provider";

const body = document.body;
let olList,btnOtro;

const crearChisteHtml = () => {

    const html = `
        <h1 class="mt-5">Chistes</h1>
        <hr>

        <button class="btn btn-primary">Otro chiste</button>

        <ol class="mt-2 list-group">
           
        </ol>
    `;

    const divChistes = document.createElement('div');
    divChistes.innerHTML = html;

    body.append(divChistes);
}

const eventos = () => {

    olList = document.querySelector('ol');
    btnOtro = document.querySelector('button');

    btnOtro.addEventListener('click', async() => {
        
        btnOtro.disable = true;
        dibujarChiste( await obtenerChiste());
        btnOtro.disable = false;
    });

}

// Chiste { id, value }
const dibujarChiste = ( chiste ) => {

    const olItem = document.createElement('li');
    olItem.innerHTML = `<b>${ chiste.id }</b>: ${ chiste.value }`;
    olItem.classList.add('list-group-item');

    olList.append(olItem);
}

export const init = () => {
    crearChisteHtml();
    eventos();
} 