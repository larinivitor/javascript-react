import React from 'react'

import ClassificacaoHeader from '../ClassificacaoHeader/ClassificacaoHeader'
import ClassificacaoSubHeader from '../ClassificacaoSubHeader/ClassificacaoSubHeader'
import ClassificacaoTable from '../ClassificacaoTable/ClassificacaoTable'

import './Classificacao'

import './Classificacao.css'

export default class Classificacao extends React.Component {

    render() {
        return <div className="Classificacao" >
            <ClassificacaoHeader />
            <ClassificacaoSubHeader />
            <ClassificacaoTable classificacao={this.props.classificacao} />
        </div >
    }


}