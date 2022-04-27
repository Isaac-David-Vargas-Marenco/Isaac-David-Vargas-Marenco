alert ('Esta funcionando')

var invitaron_fiesta,
    hay_queque;
    var papayas = 4;
     var limones = 4;
     var sandias = 2;
    
     function suma_de_frutas (){
         var suma_de_frutas = ( papayas- sandias); 
         console.log ('La cantidad de frutas es:'+ suma_de_frutas); 
 }
    

function fiesta() {
    if (invitaron_fiesta ==true) {
        console.log('si me invitaron a la fiesta');
       if (hay_queque == true) {
          console.log('si ahy queque'); 
       }else{
       console.log('no me invitaron a la fiesta')
       } 
    } 
}   
suma_de_frutas();
fiesta();   