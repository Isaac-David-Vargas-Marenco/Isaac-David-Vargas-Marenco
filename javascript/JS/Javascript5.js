console.log('JavaScript Inicialized');

var divContenedor = document.querySelector('#contenedor');
textArea = document.querySelector('#texto');
SelectColores = document.querySelector('#colores');
btnAgregar = document.querySelector('.btn')

function crearElementos() {
    var texto = document.createElement('p');

    texto.innerHTML = textArea.value;
    texto.classList.add(SelectColores.value);
    divContenedor.appendChild(texto);

 console.log(SelectColores.value)

    textArea.value ='';
    textArea.focus();
}

btnAgregar.addEventListener('click', crearElementos);