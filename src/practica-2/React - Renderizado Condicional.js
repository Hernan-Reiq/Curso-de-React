import './practica-2/css/main.css';
import Button from "./practica-2/Reutilizar Componentes/button";

const App = () => {
  const AmorPorProgramar = true;
  if (AmorPorProgramar) {
    console.log('Amas programar');
    return (
      <div>
        <h1 onClick={(e) => {
          console.log(e)
          if (e.altKey) {
            console.log('Hiciste click presionando la tecla Alt')
          }
        }}>CRUD</h1>
        <Button onClick={() => { console.log('CREATE') }}>CREATE</Button>
        <Button onClick={() => { console.log('READ') }}>READ</Button>
        <Button onClick={() => { console.log('UPDATE') }}>UPDATE</Button>
        <Button onClick={() => { console.log('DELETE') }}>DELETE</Button>
      </div>
    )
  } else {
    console.log('No amas programar')
  }
}

export default App;
