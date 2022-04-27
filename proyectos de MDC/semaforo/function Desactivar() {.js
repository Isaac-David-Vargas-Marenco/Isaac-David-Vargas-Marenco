var 

btnDesactivar = document.querySelector('.off');


function Desactivar() {
    var rojaTimeOut,
    amarillaTimeOut,
    verdeTimeOut;

amarillaTimeOut = setTimeout(activarLuzamarilla ,6000);
rojaTimeOut = setTimeout(activarLuzRoja , 12000);
verdeTimeOut = setTimeout(activarLuzverde , 18000);

setInterval(Activar,18000);
    luzroja.classList.remove('rojo-encendido');
    luzamarilla.classList.remove('amarillo-encendido');
    luzverde.classList.remove('verde-encendido'); 
}
btnDesactivar.addEventListener('click',Desactivar );