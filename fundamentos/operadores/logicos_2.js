//SE A VARIAVEL NÃO FOR ALTERADA - USAR O "CONST" -

const t1 = true;
const t2 = true;

let comprarTV50 = t1 && t2; //AND
console.log('Vamos comprar a TV de 50"?' , comprarTV50);


let comprarTV32 = t1 !== t2;//XOR
console.log('Vamos comprar a TV de 32"?' , comprarTV32);


let tomarSorvete = t1 || t2;//OU
console.log('Vamos comprar Sorvete"?' , tomarSorvete);

let ficarEmCasa = !tomarSorvete//NOT
console.log('Vamos ficar em Casa"?' , ficarEmCasa);



//EXIBINDO - ASPAS NO CONSOLE -
//console.log(" '' ")
//console.log(' " ')