import React, { Component } from "react";

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
                    <button onClick={() => this.setState({valor: 3})} className="btn btn-outline-primary">Enviar</button>
                </div>
            </React.Fragment>
        )
    }
}

export default Index;