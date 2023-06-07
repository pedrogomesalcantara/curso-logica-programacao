const hora = 23 ;
let saudacao;


if(hora < 12) {
    console.log('Bom Dia!');

}   else if(hora < 18) {
            saudacao = 'Boa Tarde!';
}   else if(hora < 22) {
            saudacao = 'Boa Noite!';
    }   else {
        saudacao = 'Tarde de Mais!';
    }
    
    
    


console.log(saudacao);