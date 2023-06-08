const hora = 23 ;
let saudacao;


if (hora < 12) {
    console.log('Bom Dia!');
}   else {
    if (hora < 18) {
        saudacao = 'Boa Tarde!';
}   else {
    if (hora < 22) {
        saudacao = 'Boa Noite!';
}   else {
    saudacao = 'Tarde de Mais!';
}
}

}
    
    
// FUNCIONA DA MESMA FORME QUE A DO EXERCICIO ANTERIOR, O QUE MUDA BASICAMENTE É QUE O CODIGO ESTÁ UM DENTRO DO OUTRO, MAS DO EXERCICIO ANTERIOR FICA MAIS LEGIVEL.

console.log(saudacao);