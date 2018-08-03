import React from 'react';

import Button from '../../generic/Button/Button'

export default class TableHeroes extends React.Component {

    renderTableContent() {
        return this.props.heroes.map((item) => {
            return <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.alterEgo}</td>
                <td>{item.team}</td>
                <td>
                    <Button 
                    onClick={() => this.props.onDelete(item.id)} 
                    classButton="danger" 
                    text="Excluir"/>
                </td>
            </tr>
        })
    }

    renderTable() {
        return <table className="table">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Alter Ego</th>
                    <th>Time</th>
                </tr>
            </thead>
            <tbody>
                {this.renderTableContent()}
            </tbody>
        </table>
    }

    render() {
        return this.renderTable()
    }
}