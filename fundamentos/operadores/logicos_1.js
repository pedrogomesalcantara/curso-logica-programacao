// - EXEMPLO #1 -

let temDinheiroNaConta = false;
let estaEnsolarado = true;
let carroEstaNaGaragem = false;


// OPERADOR " E " = && 
// OPERA EM CIMA DE 2 OPERANDOS.

let resultadoE = ' (AND) Vai Pro Shopping?'
resultadoE += temDinheiroNaConta && estaEnsolarado;
console.log(resultadoE);


// OPERADOR " OU " = ||;
//OPERA EM CIMA DE 2 OPERANDOS.


let resultadoOU = '#2 (OR) - Vai Pro Shopping?';
resultadoOU += estaEnsolarado || carroEstaNaGaragem;
console.log(resultadoOU);


//OPERADOR " -E- EXCLUSIVO"

console.log(true != true);
console.log(true != false);
console.log(false != true);
console.log(false != false);


// OPERADOR " NAO VERDADEIRO "

console.log(!true);
console.log(!false);