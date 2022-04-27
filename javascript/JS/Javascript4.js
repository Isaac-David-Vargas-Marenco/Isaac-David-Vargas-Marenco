console.log('JavaScript Inicialized');



var firstName,
    lastName,
    age,
    firstNameHTML = document.querySelector('#firstName'),
    lastNameHTML = document.querySelector('#lastName'),
    ageHTML = document.querySelector('#age');

 function dataCapture() {

    firstName = prompt('digite su Nombre');
    lastName = prompt('digite su apellido');
    age = prompt('digite su edad');
     
 }

function printScreen() {
    console.log('Nombre Completo:' + firstName + ' ' + lastName);
    console.log( 'Edad:' + age);
    
}

function printHTML() {
    firstNameHTML.innerHTML = firstName;
    lastNameHTML.innerHTML = lastName;
     ageHTML.innerHTML = age;
}

dataCapture();
printScreen();
printHTML();


console.log('luzroja');
console.log('luzamarilla');
console.log('luzverde');
console.log('btnroja'); 
console.log('btnamarillo'); 
console.log('btnverde'); 
console.log('btnActivar');