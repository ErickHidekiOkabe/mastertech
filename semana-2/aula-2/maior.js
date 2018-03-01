let numeros = [5, 7, 32, 31, 23, 56, 4, 7, 8];
let maior = numeros[0];
for(let numero of numeros){ 
    //comparação
    if (maior < numero){
        maior = numero;
    }
}

console.log(maior);

    