import React, { Component } from "react";

class Input extends Component {
    render() {
        return (
            <input
                value={this.props.value}
                onChange={this.props.onChange}
            />
        )
    }
}

class Index extends Component {
    state = {
        nombre: '',
        apellido: ''
    }

    updateValues = (prop, value) => {
        this.setState({ [prop]: value });
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <h3>Escriba su nombre completo: {`${this.state.nombre} ${this.state.apellido}`}</h3>
                    <Input
                        value={this.state.nombre}
                        onChange={e => this.updateValues('nombre', e.target.value)}
                    />
                    <Input
                        value={this.state.apellido}
                        onChange={e => this.updateValues('apellido', e.target.value)}
                    />
                </div>
            </React.Fragment>
        )
    }
}

export default Index;