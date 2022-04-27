console.log('JavaScript Inicialized');


var  AreaDeuncuadrado,
     perimetroDeunCuadrado;
   
function Cuadrado(lado) {
    AreaDeuncuadrado = (lado * lado);
    perimetroDeunCuadrado = (lado * 4);
    
    console.log('Area del cuadrado:'+ AreaDeuncuadrado);
    console.log('perimetro de un cuadrado:'+ perimetroDeunCuadrado);
    
    
}    

Cuadrado(8);