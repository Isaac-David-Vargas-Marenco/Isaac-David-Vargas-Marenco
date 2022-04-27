console.log('JavaScript Inicialized');

var
    rojaTimeOut,
    amarillaTimeOut,
    verdeTimeOut;
    luzroja =document.querySelector('.roja'),
    luzamarilla = document.querySelector('.amarillo'),
    luzverde = document.querySelector('.verde'),
    btnroja = document.querySelector('.btn-danger'),
    btnamarillo = document.querySelector('.btn-warning'),
    btnverde = document.querySelector('.btn-success'),
    btnActivar = document.querySelector('.btn-primary');
    btnDesactivar = document.querySelector('.btn-secondary')
    rojaTimeOut,
    amarillaTimeOut,
    verdeTimeOut;

//Activar la luz roja
function activarLuzRoja() {
    luzroja.classList.add('rojo-encendido');
    luzamarilla.classList.remove('amarillo-encendido');
    luzverde.classList.remove('verde-encendido');

    clearTimeout(rojaTimeOut);
}
//Activar luz amarilla
function activarLuzamarilla() {
    luzroja.classList.remove('rojo-encendido');
    luzamarilla.classList.add('amarillo-encendido');
    luzverde.classList.remove('verde-encendido');

    clearTimeout(amarillaTimeOut);
}
//Activar la luz verde
function activarLuzverde() {
    luzroja.classList.remove('rojo-encendido');
    luzamarilla.classList.remove('amarillo-encendido');
    luzverde.classList.add('verde-encendido');

    clearTimeout(verdeTimeOut);
    
}

function Activar() {

    activarLuzverde();
    amarillaTimeOut = setTimeout(activarLuzamarilla ,3000);
    rojaTimeOut = setTimeout(activarLuzRoja , 6000);
    verdeTimeOut = setTimeout(activarLuzverde , 9000);

   lucesInterval = setInterval(Activar,9000);
}

function  Desactivar() {
    clearTimeout(amarillaTimeOut);
    clearTimeout(rojaTimeOut);
    clearInterval(lucesInterval);

    activarLuzverde();
    
}

//Evento de monitereo constane
btnroja.addEventListener('click', activarLuzRoja);
btnamarillo.addEventListener('click' , activarLuzamarilla);
btnverde.addEventListener('click', activarLuzverde );
btnActivar.addEventListener('click', Activar );
btnDesactivar.addEventListener('click', Desactivar)


Activar();
