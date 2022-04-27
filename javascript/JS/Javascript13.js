console.log('JavaScript Inicialized');

var edad,
    monto,
    descuento,
    total;

function edad18() {
    edad = prompt('Digite su edad');
if (edad >= 18 ) {
        console.log('Es mayor de edad');
    } else{
     console.log('Es menor de edad');
    } 
}

function edad21() {
    edad = prompt('Digite su edad');
    if (edad >= 21 ) {
        console.log('Es mayor de edad en todo el mundo');
    }else if (edad >= 18 ) {
        console.log('Es mayor de edad en Costa Rica');
    } else{
     console.log('Es menor de edad');
    } 
}
function porcentajedescuento () {
    monto = prompt('Ingrese el monto de la factura')
   
    console.log('El monto ingresado ingresa es:' + monto )

           if (monto >= 30000) {
            console.log('Eldescuento de 25%'); 
           descuento = monto * 0.25;
              } else if (monto >= 15000){
                console.log('Eldescuento de 15%'); 
                descuento = monto * 0.15;
              }else{
                console.log('Eldescuento de 5%'); 
                descuento = monto * 0.05;
              }

              console.log('El monto del descuento es de:' + descuento); 
              total = monto - descuento;
              console.log('El monto total a pagar es:' + total); 
}
//porcentajedescuento();
//edad21();