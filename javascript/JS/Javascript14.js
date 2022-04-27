console.log('JavaScript Inicialized');

const salarioinicial = 1000;

var 
    personasInvitadas,
    bono,
    salarioConBono;
   
  
 function empresa() {

    personasInvitadas=prompt('cuantas personas invito a la empresa:');

    console.log('cantida de personas invitada:' + personasInvitadas);

        if ( personasInvitadas >= 15) {
          bono =2500
          console.log('invito a 15 o mas personas su bono total es: ' + bono);
          } else if (personasInvitadas >= 10){
            bono = 1500 
            console.log('invito de 10 a 14 personas su bono total es:' + bono);
          } else if ( personasInvitadas >= 3){
            bono = 500
            console.log('invito de 3 a 9 personas su bono total es: ' + bono);
          }else if (personasInvitadas == 0) {
            bono = -200
            console.log('no invito personas su bono total es' + bono); 
          }
        salarioConBono = salarioinicial + bono;

        console.log('su salario total es de:' + salarioConBono); 
}      
empresa();