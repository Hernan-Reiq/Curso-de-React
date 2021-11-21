import { useState, useEffect, useReducer, useRef, Fragment } from "react";

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
        if (option === 'aumentar') {
            setContador(contador + 1);
        } else if (option === 'disminuir') {
            setContador(contador - 1);
        }
    }
    return [contador, actualizarContador];
}

//useReducer
const inicial = { contador: 0 }

const reducer = (state, action) => {
    switch (action.type) {
        case 'aumentar':
            return { contador: state.contador + 1 }
        case 'disminuir':
            return { contador: state.contador - 1 }
        case 'set':
            return { contador: action.payload }
        default:
            return state
    }
}

//useRef
const RefComponent = ({ love }) => {
    const ref = useRef();
    const inputRef = useRef();
    const clickComponent = () => {
        console.log(ref.current)
        console.log(love)
        inputRef.current.focus()
    }
    return (
        <div onClick={clickComponent} ref={ref} >
            <h1>Te doy la bienvenida {love}</h1>
            <input ref={inputRef} />
        </div>
    )
}

const MyComponent = () => {
    const [state, dispatch] = useReducer(reducer, inicial);
    const [valor, setValor] = useState(0);
    const [contador, actualizarContador] = useContador(0);
    const [myText, setMyText] = useState('Buenos días');
    useEffect(() => { // Se ejecuta siempre que haya un cambio en la variable pasada en el array del segundo parámetro
        document.title = `Nuevo contador: ${contador}`;
    }, [contador]); // si el array está vacío se ejecuta 1 sola vez. Si no existe un array entonces se ejecuta siempre que haya un cambio en el componente
    return (
        <Fragment>
            <RefComponent love={"a este proyecto"} />
            <div>
                <h2>useReducer</h2>
                <p>Contador: {state.contador}</p>
                <button onClick={() => dispatch({ type: 'disminuir' })}>Menos</button>
                <button onClick={() => dispatch({ type: 'aumentar' })}>Más</button> <br />
                <input value={valor} onChange={e => setValor(e.target.value)} />
                <button onClick={() => dispatch({ type: 'set', payload: parseInt(valor) })}>Set</button>
            </div>
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
        <Fragment>
            <MyComponent />
        </Fragment>
    )
}

export default Index;