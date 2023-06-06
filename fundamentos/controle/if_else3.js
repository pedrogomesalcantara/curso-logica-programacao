const hora = 13;
let saudacao;


if(hora < 12) {
    console.log('Bom Dia!');

}   else {
        if(hora < 18) {
            saudacao = 'Boa Tarde!';
}   else {
            saudacao = 'Boa Noite!';
    }
    
    
}

console.log(saudacao);