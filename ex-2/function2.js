// Scrivere una funzione che prenda in input un array di numeri e restituisca la somma
// dei numeri che si trovano in posizione dispari nell'array.

function sumOdd(array) {
    let sum = 0;
    for (let i = 1; i < array.length; i += 2) {
        sum += array[i];
    }
    return sum;
}

// Esempio
let numbers = [2, 3, 2, 3, 2, 3, 2, 3, 2];
let result = sumOdd(numbers);
console.log(result); // somma i numeri 3 (che sono in posizione dispari) = 12