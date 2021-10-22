const MiClase = class MC {
    //Expresión de clase, creando la clase e inmediatamente asignandola a una constante (puede ser anónima, sin nombre)
}

// No tiene hoisting, solo puede ser llamada luego de declararla, no antes (como con let)
class MiOtraClase {
    //Declaración de clase, creando una clase que luego puede ser usada en una variable
}

// console.log(OtraClaseMas, 'Es llamada antes de declararla pero está disponible');
function OtraClaseMas() {

}

// console.log(MiOtraClase, OtraClaseMas);

/*
    SOLAMENTE LAS VARIABLES Y LAS FUNCIONES TIENEN HOISTING
*/

class Felicidad {
    //constructor(estado){ // el constructor permite estados o parámetros
    edad = 20;
    #privado;
    static visible = true;
    static #privadoStatic = true;
    constructor(estado = 'triste'){
        this.edad = 22;
        this.nombre = 'Hernán Demorizi Ureña';
        this.visible = false;
        this.#privado = true; //propiedad privada, solo puede ser usada dentro de la clase
        console.log(`Estoy muy ${estado}`);
        console.log(`Tengo ${this.edad} años de edad`);
        if (this.#privado) {
            console.log('Además es privado, pero el qué?...');
        } else {
            console.log('No es privado, entonces qué es?...');
        }
    }
    saludo(persona) {
        console.log(`Hola ${persona}, ¿Cómo estás?`);
    }
    static visibilidad(){ //no puede acceder a propiedades públicas o privadas de la clase
        //console.log('Este método es estático, se debe acceceder a él mediante la clase y no con la instancia');
        console.log(`${this.visible ? 'Es visible' : 'No es visible'}`); // accediendo a una propieda estática
        console.log(`${this.#privadoStatic ? 'Es privado' : 'No es privado'}`); // accediendo a una propiedad privada estática
    }
}

//Felicidad.visibilidad();

// Si instanciamos una clase con 'new' se ejecutará su constructor
//const Feliz = new Felicidad('felíz');
//const Triste = new Felicidad(); // estado indefinido, pero mostrará "triste" porque es su valor por defecto

// Feliz.saludo('Hernán');

//console.log(Feliz); //muestra propiedades
//console.log(Feliz.__proto__) // muestra las funciones (en el navegador, porque nodejs no lo muestra en consola)