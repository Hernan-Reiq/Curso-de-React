const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr2 = ['Gato', 'Perro', 'Tortuga', 'Gato', 'Conejo', 'Caballo', 'Gato', 'Tortuga', 'Gallina'];

const mapped = arr.map((result) => result * 3);

// console.log(mapped)

const mapped2 = arr2.map((result, i) => {
    return `<h1>${i + ':' + result}</h1>`
})

console.log(mapped2)