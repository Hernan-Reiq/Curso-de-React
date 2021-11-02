const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr2 = ['Gato', 'Perro', 'Tortuga', 'Gato', 'Conejo', 'Caballo', 'Gato', 'Tortuga', 'Gallina'];
const arr3 = [2, 3, -5, 1, 4];
const arr4 = [
    {id: 1, name: "Hernan"},
    {id: 2, name: "Virgilio"},
    {id: 3, name: "Reiq"},
    {id: 4, name: "Peter"},
    {id: 5, name: "Maria"}
];


//acumulador y valor actual
const redc = arr.reduce((acc, result) => result)

//const redc2 = arr3.reduce((acc, result) => acc + result, 0);
const getMax = (a, b) => Math.max(a, b);

const redc2 = arr3.reduce(getMax, 0); // solo toma en cuenta valores positivos
const redc3 = arr3.reduce(getMax); // toma en cuenta valores positivos y negativos

const redc4 = arr2.reduce((acc, el) => `${acc === '' ? '' : `${acc}, `}${el}`, '')

//la funcion no considera a los usuarios con ID menor a 3
const redc5 = arr4.reduce((acc, el) => {
    if (el.id < 3){ 
        return acc
    } 
    return acc.concat(el);
}, []);

console.log(redc5)