function sempreRetornaUm() {
    return 100;
}



function textoOuNumero(retornaTexto) {

    return retornaTexto ? "Sou um Texto!" : 123;

}


let valor = sempreRetornaUm() + 999;
console.log(valor);

let texto = textoOuNumero(true);
console.log(texto);

console.log(textoOuNumero(false));

