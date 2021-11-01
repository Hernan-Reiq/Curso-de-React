// REST OPERATOR
const rest1 = (...args) => {
    console.log(args)
}

const rest2 = (a, b, ...args) => { // Rest operator siempre debe ser el último parámetro
    console.log(a, b);
    console.log(args);
}

//rest1(1, 3, 5, 7);
//rest2(1, 3, 5, 7);

const obj1 = {
    a: 1,
    b: 3,
    c: 5,
    d: 7,
    e: 9
}

//Destructuring y Rest operator con objetos
//const { a, b, ...otros } = obj1;

//console.log(a, b, otros);

//Destructuring con array
const arr1 = ['Estoy felíz', 'Estoy muy felíz', 'Estoy repasando JavaScript', 'Nunca hay que dejar de aprender'];

//const [a, b, ...otros] = arr1;

//console.log(a, b, otros)


//Destructuring con funciones de flecha

const func = () => ['Hernan', () => { }];

console.log(func());

const [nombre] = func();

console.log(nombre)