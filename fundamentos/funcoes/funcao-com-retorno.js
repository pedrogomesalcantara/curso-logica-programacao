function sempreRetornaUm() {
    return 1;
}

function textoOuNumero(retornaTexto) {

    if(retornaTexto) {
        return "Sou um Texto";
    }   else {
        return 123;
    }

}


let valor = sempreRetornaUm() + 999;
console.log(valor);

let resultado = textoOuNumero(ture);
console.log(valor);

console.log(textoOuNumero)(false);

