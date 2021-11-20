import { useState, useEffect, Fragment, Component } from "react";

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


//Desuscribiendose de un efecto para que solamente se ejecute como está en su último estado y no desde le inicio
// const Interval = ({ contador }) => {
//     useEffect(() => {
//         const inter = setInterval(() => console.log(contador), 1500);
//         return () => clearInterval(inter);
//     }, [contador])

//     return(
//         <p>Intervalo</p>
//     )
// }

// useEffect basado en clases
class Interval extends Component {
    invervalo = '';
    componentDidMount(){
        this.invervalo = setInterval(()=> console.log(this.props.contador), 1000);
    }
    componentWillUnmount(){
        clearInterval(this.invervalo);
    }
    render(){
        return(
            <p>Intervalo</p>
        )
    }
}


const MyComponent = () => {
    const [contador, actualizarContador] = useContador(0);
    const [myText, setMyText] = useState('Buenos días');
    useEffect(() => { // Se ejecuta siempre que haya un cambio en la variable pasada en el array del segundo parámetro
        document.title = `Nuevo contador: ${contador}`;
    }, [contador]); // si el array está vacío se ejecuta 1 sola vez. Si no existe un array entonces se ejecuta siempre que haya un cambio en el componente
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
                <Interval contador={contador} />
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