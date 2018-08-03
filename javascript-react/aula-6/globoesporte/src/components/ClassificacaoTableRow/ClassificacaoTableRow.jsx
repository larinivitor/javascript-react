
import React from 'react'

import './ClassificacaoTableRow.css'

export default class ClassificacaoTableRow extends React.Component {

    render() {
        return <tr className="ClassificacaoTableRow">
            <td className="ClassificacaoTableRow--time">
                <b>{this.props.posicao}</b> - {this.props.time}
            </td>
            <td className="ClassificacaoTableRow--pontos">
                {this.props.pontuacao}
            </td>
        </tr>
    }
}