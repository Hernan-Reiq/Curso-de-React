import React, { Component } from "react";

class Button extends Component {
    render() {
        console.log('El método RENDER actualiza el componente cada vez que se cambia el estado del mismo o de su padre');
        return (
            <button className="btn btn-outline-primary">Componente</button>
        )
    }
}

class Index extends Component {
    state = {
        valor: 1
    }
    render() {
        console.log(this.state)
        return (
            <React.Fragment>
                <div className="container">
                    <h1>Esto es un componente basado en clases hecho en React por Hernan Demorizi Ureña (Hernan.Reiq)</h1>
                    <Button />
                    <button onClick={() => this.setState({ valor: 3 })} className="btn btn-outline-primary">Enviar</button>
                </div>
            </React.Fragment>
        )
    }
}

export default Index;