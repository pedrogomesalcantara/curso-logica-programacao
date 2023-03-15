 // VAR "IDENTIFICADOR" "=" - ATRIBUIÇÃO - "VALOR/DADO"

 // VAR/LET - IDADE = 3;

 // ISSO É UMA ANATOMIA DE UMA VARIAVEL.

 let preco = 19.90; // usado 'let' ao inves do 'var'
 let desconto = 0.4;

 console.log(19.90 * 0.6);  // valores Literais

let precoComDesconto = preco * (1 - desconto);

 console.log(preco * (1 - desconto));   // valores com as variaveis

 let nome = "Caderno"; // STRING (TEXTO) - CONJUNTO DE SIMBOLOS
 
 let categoria = "Papelaria";
 console.log("Produto: " + nome
 + ", Categoria: " + categoria
 + ", Preço: " + preco
 + ", Desconto: " + desconto);