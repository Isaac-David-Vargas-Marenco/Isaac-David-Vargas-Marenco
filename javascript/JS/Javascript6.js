console.log('JavaScript Inicialized');

var divContenedor = document.querySelector('#contenedor'),
btnAgregarCuadrado = document.querySelector('#Cuadrado'),
btnAgregarCirculo = document.querySelector('#Circulo'),
btnAgregarRectangulo = document.querySelector('#Rectangulo');

function crearCuadrado() {
    var Cuadrado = document.createElement('div');
    
    Cuadrado.classList.add('Cuadrado');
    divContenedor.appendChild(Cuadrado);
}
function crearCirculo() {
    var Circulo = document.createElement('div');
    
    Circulo.classList.add('Circulo');
    divContenedor.appendChild(Circulo);
}
function crearRectangulo() {
    var Rectangulo = document.createElement('div');
    
    Rectangulo.classList.add('Rectangulo');
    divContenedor.appendChild(Rectangulo);
}


btnAgregarCuadrado.addEventListener('click', crearCuadrado);
btnAgregarCirculo.addEventListener('click', crearCirculo);
btnAgregarRectangulo.addEventListener('click', crearRectangulo);