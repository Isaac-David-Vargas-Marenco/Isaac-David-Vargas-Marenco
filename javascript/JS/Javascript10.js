console.log('JavaScript Inicialized');

const pi = 3.14;

var areaCirculo,
    perimetroCirculo;



function Circulo(radio) {
    areaCirculo = pi * (radio * radio);
    perimetroCirculo = 2 * pi * radio;
    
    console.log('Area del circulo:'+ areaCirculo);
    console.log('perimetro de un circulo:'+ perimetroCirculo);

}     

Circulo(5);