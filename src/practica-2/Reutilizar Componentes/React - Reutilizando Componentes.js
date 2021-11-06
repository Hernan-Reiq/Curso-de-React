import './practica-2/css/main.css';
import Button from "./practica-2/Reutilizar Componentes/button";

const App = () => {
  return (
    <div>
      <h1>CRUD</h1>
      <Button onClick={()=>{console.log('CREATE')}}>CREATE</Button>
      <Button onClick={()=>{console.log('READ')}}>READ</Button>
      <Button onClick={()=>{console.log('UPDATE')}}>UPDATE</Button>
      <Button onClick={()=>{console.log('DELETE')}}>DELETE</Button>
    </div>
  )
}

export default App;
