import React, { Component } from "react";

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <main>
                    <div className="container">
                        <h1 className="display-1 text-center">Práctica 1</h1>
                        <h2>Repaso de JavaScript - Variables</h2>
                        <pre>
                            <code>
                                var variable = 'Su declaración se mueve al inicio pero su valor se asigna en la línea donde se declaró o más adelante.'
                                <br />
                                let variable = 'Su declaración se queda en el mismo lugar y su valor se asigna en la línea donde se declaró o más adelante.'
                                <br />
                                const constante = 'Su valor no puede ser cambiado una vez haya sido asignado'
                            </code>
                        </pre>
                    </div>
                </main>
            </React.Fragment>
        )
    }
}

export default Index;