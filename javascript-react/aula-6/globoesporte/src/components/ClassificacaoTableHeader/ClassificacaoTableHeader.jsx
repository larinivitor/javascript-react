
import React from 'react'

import './ClassificacaoTableHeader.css'

export default class ClassificacaoTableHeader extends React.Component {
    render() {
        return <thead>
            <tr>
                <th className="ClassificacaoTableHeader">Classificacao</th>
                <th className="ClassificacaoTableHeader">Pontos</th>
            </tr>
        </thead>

    }
}