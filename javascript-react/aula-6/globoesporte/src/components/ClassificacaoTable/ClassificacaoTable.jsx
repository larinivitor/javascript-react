
import React from 'react'

import ClassificacaoTableHeader from '../ClassificacaoTableHeader/ClassificacaoTableHeader'
import ClassificacaoTableRow from '../ClassificacaoTableRow/ClassificacaoTableRow'

import './ClassificacaoTable.css'


export default class ClassificacaoTable extends React.Component {
    getRows() {
        return this.props.classificacao.map((item, key) => {
            return <ClassificacaoTableRow key={key} posicao={item.posicao} time={item.time} pontuacao={item.pontuacao} />
        })
    }

    render() {
        return <table className="ClassificacaoTable">
            <ClassificacaoTableHeader />
            <tbody>
                {this.getRows()}
            </tbody>
        </table>
    }
}