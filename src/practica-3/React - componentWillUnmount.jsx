import React, { Component } from "react";

class Button extends Component {
    constructor(props) {
        super(props)
        console.log('constructor', props)
    }

    //Se ejecuta cuando se desmonta un componente
    componentWillUnmount() {
        console.log('componentWillUnmount', this.props, this.state);
    }

    render() {
        //console.log('El método RENDER actualiza el componente cada vez que se cambia el estado del mismo o de su padre');
        return (
            <button className="btn btn-outline-primary" onClick={() => this.setState({ dev: true })}>Componente</button>
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
                    {this.state.valor === 1 ?
                        <Button love={true} /> : null
                    }
                    <button onClick={() => this.setState({ valor: 3 })} className="btn btn-outline-primary">Enviar</button>
                </div>
            </React.Fragment>
        )
    }
}

export default Index;