import React, { Component } from 'react';
export default class ComponenteClasse extends Component {
    render() {
        return (
            <h1>Valor da props de classe: {this.props.valor || 'teste'}</h1>
        )
    }
}
