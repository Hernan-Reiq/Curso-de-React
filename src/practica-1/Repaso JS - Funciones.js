//Las funciones declaradas con la palabra "function" también son clases
function Fn() {

    //si se invoca la funcion con new entonces lo que lleva this es una propiedad e ignora el return definido y retorna this
    this.prop = 'Una propiedad';

    //si se invoca la función retorna lo que tenga dentro
    return 'Esto retorna un texto';
}

//funcion de prototipo
Fn.prototype.miPrototipo = function FuncionDePrototipo(){}

//Si usas 'new' se convierte en objeto / clase y toma como propiedad todo lo asignado con this
//const result = new Fn(); // Retorna un objeto

//si se llama a la funcion el valor de la variable será lo que retorne la funcion
//const result2 = Fn(); // Retorna lo que la función pueda retornar 

// console.log(result)

// console.log(result.__proto__) // accediento a la función de prototipo

// console.log(result2);



// Fat Arrow Function 
const fatFn = () => { // no tiene contexto de this
    return 'Fat Arrow Function'
}

//const fatFn = () => 15 // también pueden tener un return implícito

// no se puede llamar con new
const result3 = fatFn(); 

console.log(result3)