/*
    Función impura: cada vez que es llamada devuelve un valor distinto
*/

const FnImpura = () => new Date().toLocaleString();

console.log(FnImpura());


// Función pura: nunca cambia el valor de retorno
const MyComponent = ({ love }) => {
    return (
        <div>
            {love ?
                <h1>I love programming</h1> :
                <h1>I hate wasting time</h1>
            }
        </div>
    )
}

const Index = () => {
    return (
        <MyComponent love={true} />
    )
}

export default Index;