let videoGames = ['Switch', 'PS4', 'Xbox', '3DS'];

videoGames[0];
videoGames[2];

/*
//Métodos e propriedades de um Array
videoGames.pop(); // Remove o último item e retorna ele 
videoGames.push('3DS'); // Adiciona ao final do array
videoGames.length; // 3
 */


//For
// Começa declarando o valor de i 
// Verifica se i é menor que 10
// Passa para o corpo do for
// Depois adiciona mais 1 ao valor do i 
// Depois realiza todo o processo novamente
for(let i = 0; i <= 10; i++){
    console.log(i);
}

//While
let i = 0;
while(i < 10){
    console.log(i);
    i = i + 5 ;
}

// For loop passando por array
for(let i = 0; i < videoGames.length; i++){
    console.log(videoGames[i]);
}

// Break
// O loop irá parar caso encontre a palavra break

let videoGames2 = ['PS5', 'Xbox Series S', 'PSP', 'Game Cube'];

for(let i = 0; i < videoGames2.length; i++){
    console.log(videoGames2[i]);
    if(videoGames2[i] === 'PSP'){
        break;
    }
}

// ForEach
// É um método que executa uma função para cada item do Array
// É uma forma mais simples de utilizarmos um loop com arrays (ou array-like)
let legumes = ['Abobrinha', 'Abóbora', 'Chuchu', 'Feijão'];
legumes.forEach(function(item){ // o parâmetro "item" vira dinamicamente o valro do array 
    console.log(item);
})

legumes.forEach(function(item, index){ //Segundo argumento do parâmetro da função forEach é o index do array
    console.log(item, index);
})
// O argumento item será atribuido dinamicamente

// Exercicios

// Crie um array com os anos que o Brasil ganhou a copa 
// 1959, 1962, 1970, 1994, 2002

let brasilCampeao = [1959, 1962, 1970, 1994, 2002];

// Interaja com o array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${brasilCampeao[i]}`.

for(let i = 0; i <= brasilCampeao.length; i++){
    console.log(`O brasil ganhou a copa de ${brasilCampeao[i]}`);
}

brasilCampeao.forEach(function(i){
    console.log(`O brasil ganhou a copa de ${i}`)
})

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera.
let frutas = ['Banana', 'Maça', 'Pera', 'Uva', 'Melância'];

for(let i = 0; i <= frutas.length; i++){
    console.log(frutas[i]);
    if (frutas[i] === 'Pera'){
        break;
    }
}

// Coloque o última fruta do array acima da variável,
// sem remover a mesma do arraay.
let ultimaFruta = frutas[frutas.length -1];