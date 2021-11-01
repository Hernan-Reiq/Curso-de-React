//Spread Operator

const func = (a, b, c) => console.log(a + b + c);

const arr = [2, 5, 8];

//Forma "normal" de pasar los parametros en una función
//func(arr[0], arr[1], arr[2]);

//Forma utilizando el Spread Operator
//func(...arr); //El array pasado debe tener 3 o más elementos dentro para que funcione correctamente

const arr1 = [11, 14];

// Unir 2 array
//const arr2 = arr.concat(arr1);

const arr2 = [...arr, ...arr1] // el spread operator hacer copia del array
const arr3 = arr; // aqui toma el array con los cambios hechos mas adelante
arr[0] = "Mi nombre es Hernan"; // cambio hecho despues de definir arr3
//console.log(arr, arr2, arr3)

/*
    SPREAD OPERATOR PARA OBJETOS
*/

const obj1 = {a: 1, b: 2}
const obj2 = {b: 3, c: 5}

const obj3 = {...obj1, ...obj2} // los valores del ultimo reemplazan los valores de sus anteriores si es que comparten la misma propiedad

// console.log(obj3)

const obj4 = {
    ...obj1,
    status: 'Feliz',
    data: {
        name: "Hernan",
        age: 22
    },
    changeStatus: function (newStatus) {
        this.status = newStatus;
    }
}

obj4.changeStatus('Muy Felíz');

console.log(obj4)