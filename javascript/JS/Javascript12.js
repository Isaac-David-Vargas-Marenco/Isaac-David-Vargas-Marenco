console.log('JavaScript Inicialized');

var Areadeunrectangulo,
    perimetroDeunrectangulo;

function  rectangulo(ancho,alto) {
    Areadeunrectangulo = ancho * alto;
    perimetroDeunrectangulo = (ancho * 2) + (alto * 2);
    
    console.log('Area del rectangulo:'+ Areadeunrectangulo);
    console.log('perimetro de un rectangulo:'+ perimetroDeunrectangulo);
}

rectangulo(10, 20)