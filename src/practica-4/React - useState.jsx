import { useState, Fragment } from "react";

/* 
    REGLAS DE LOS HOOKS
    1- Deben estar en el nivel más alto de la función (no puede estar dentro de condiciones o bucles)
    2- Solo pueden ser usados en componentes de React y en Hooks personalizados
    3- (RECOMENDACIÓN) Todos los Hooks personalizados deben empezar con use* (ejemplo: useState)
*/

const MyComponent = () => {
    const [contador, setContador] = useState(0);
    const [myText, setMyText] = useState('Buenos días');
    return (
        <Fragment>
        <div>
            <p>Contador: {contador}</p>
            <button onClick={() => setContador(contador - 1)}>Disminuir valor</button>
            <button onClick={() => setContador(contador + 1)}>Incrementar valor</button>
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