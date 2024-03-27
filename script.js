let videoGames = ['Switch', 'PS4', 'Xbox'];

videoGames[0];
videoGames[2];

//Métodos e propriedades de um Array
videoGames.pop(); // Remove o último item e retorna ele 
videoGames.push('3DS'); // Adiciona ao final do array
videoGames.length; // 3

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