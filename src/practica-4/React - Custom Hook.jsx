import { useState, Fragment } from "react";

/* 
    REGLAS DE LOS HOOKS
    1- Deben estar en el nivel más alto de la función (no puede estar dentro de condiciones o bucles)
    2- Solo pueden ser usados en componentes de React y en Hooks personalizados
    3- (RECOMENDACIÓN) Todos los Hooks personalizados deben empezar con use* (ejemplo: useState)
*/
//Hook personalizado que puede ser usado en otros componentes
const useContador = (inicio) => {
    const [contador, setContador] = useState(inicio);
    const actualizarContador = (option) => {
        if (option === 'aumentar'){
            setContador(contador + 1);
        } else if (option === 'disminuir') {
            setContador(contador - 1);
        }
    }
    return [contador, actualizarContador];
}


const MyComponent = () => {
    const [contador, actualizarContador] = useContador(0);
    const [myText, setMyText] = useState('Buenos días');
    return (
        <Fragment>
            <div>
                <p>Contador: {contador}</p>
                <button onClick={() => actualizarContador('disminuir')}>Disminuir valor</button>
                <button onClick={() => actualizarContador('aumentar')}>Incrementar valor</button>
            </div>
            <div>
                <h1>{myText}</h1>
                <button onClick={() => setMyText(myText === 'Buenos días' ? 'Buenas tardes' : 'Buenos días')}>Update text</button>
            </div>
        </Fragment>
    )
}

const Index = () => {
    return (
        <MyComponent />
    )
}

export default Index;