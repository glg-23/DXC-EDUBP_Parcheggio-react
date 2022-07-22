import React from "react";
import { Table } from 'react-bootstrap';

class ListaAuto extends React.Component {

    constructor(props) {
        super(props)
        //console.log(this.props.listaAuto)

        this.state = {
            arrayAuto: this.props.listaAuto
        }
        //console.log(this.state.arrayAuto)
    }

    aggiungiRiga(auto, index) {
        return (
            <tr key={index} className={auto.colore}>
                <td>{auto.nome}</td>
                <td>{auto.cognome}</td>
                <td>{auto.email}</td>
                <td>{auto.telefono}</td>
                <td>{auto.targa}</td>
            </tr>
        )
    }

    render() {
        return (
            <div className="ContainerLista">
                <Table >
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Cognome</th>
                            <th>Email</th>
                            <th>Telefono</th>
                            <th>Targa</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.arrayAuto.map(this.aggiungiRiga)}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default ListaAuto