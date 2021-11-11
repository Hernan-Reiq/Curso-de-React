import React, { Component } from "react";

class Button extends Component {
    constructor(props) {
        super(props)
        console.log('constructor', props)
    }

    //Se ejecuta cada vez que haya un cambio en el componente
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate', prevProps, prevState)
    }

    render() {
        //console.log('El método RENDER actualiza el componente cada vez que se cambia el estado del mismo o de su padre');
        return (
            <button className="btn btn-outline-primary" onClick={() => this.setState({dev: true})}>Componente</button>
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
                    <Button love={true} />
                    <button onClick={() => this.setState({ valor: 3 })} className="btn btn-outline-primary">Enviar</button>
                </div>
            </React.Fragment>
        )
    }
}

export default Index;