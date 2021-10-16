const amigos = ['AdvanceX', 'Ryu', 'Anyelo', 'xSergex', 'Divo'];
//export const vecinos = ['Genaro', 'Jisy', 'Pepe', 'Marielis', 'Elsy', 'Misael', 'Diona'];
const vecinos = ['Genaro', 'Jisy', 'Pepe', 'Marielis', 'Elsy', 'Misael', 'Diona'];
const partners = ['Joel', 'Eduardo', 'Guillermo']

const fnFlecha = () => {
    console.log('Soy una función de flecha');
}

function fn() {
    console.log('Soy una función');
}


//module.exports = amigos; //Esta forma solo permite una exportación

//Esta forma permite varias exportaciones
// module.exports = {
//     amigos,
//     vecinos
// }

//Exportando al final y no cuando se declara
export { vecinos, partners, fnFlecha, fn }

//Esta forma es para cuando se utilice con import
export default amigos;