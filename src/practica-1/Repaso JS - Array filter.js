const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr2 = ['Gato', 'Perro', 'Tortuga', 'Gato', 'Conejo', 'Caballo', 'Gato', 'Tortuga', 'Gallina']

const filtr = arr.filter(result => result > 4); // devuelve un arreglo que cumpla con la condicion
const filtr2 = arr.filter((result, i) => {
    console.log(i); // imprime las iteraciones
    return result > 4;
})

//console.log(filtr2)


const filtr3 = arr2.filter((result, i)=> {
    console.log(i, result)
    return result === 'Gato'
});
console.log(filtr3)