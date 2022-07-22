import React from "react";
import { Form, Row, Col, Button } from 'react-bootstrap';

class FormInserimento extends React.Component {
    constructor(props) {
        super(props)

        this.handleSave = this.handleSave.bind(this);

        //nome, cognome, email, telefono, targa
        this.nome = null
        this.setNome = element => {
            this.nome = element;
        }

        this.cognome = null
        this.setCognome = element => {
            this.cognome = element;
        }

        this.email = null
        this.setEmail = element => {
            this.email = element;
        }

        this.telefono = null
        this.setTelefono = element => {
            this.telefono = element;
        }

        this.targa = null
        this.setTarga = element => {
            this.targa = element;
        }

    }

    handleSave() {
        this.props.callBack(
            {
                nome: this.nome.value,
                cognome: this.cognome.value,
                email: this.email.value,
                telefono: this.telefono.value,
                targa: this.targa.value,
                colore: null
            })
        //console.log(this.nome.value)
    }

    render() {
        return (
            <div>
                <div className="ContainerForm">
                    <Form>
                        <p className="TitoloForm"> Inserimento dati veicolo </p>
                        <Row className="justify-content-md-center" style={{ marginBottom: "2vh" }} >
                            <Col md={6}>
                                <Form.Group >
                                    <Form.Label>Nome:</Form.Label>
                                    <Form.Control type="text" placeholder="nome" ref={this.setNome} />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Cognome:</Form.Label>
                                    <Form.Control type="text" placeholder="cognome" ref={this.setCognome} />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="justify-content-md-center" style={{ marginBottom: "2vh" }} >
                            <Col md={6}>
                                <Form.Group >
                                    <Form.Label>Email:</Form.Label>
                                    <Form.Control type="text" placeholder="email" ref={this.setEmail} />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Telefono:</Form.Label>
                                    <Form.Control type="number" placeholder="telefono" ref={this.setTelefono} />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="justify-content-md-center" style={{ marginBottom: "3vh" }} >
                            <Col >
                                <Form.Group>
                                    <Form.Label>Targa:</Form.Label>
                                    <Form.Control type="text" placeholder="targa" ref={this.setTarga} />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="justify-content-md-center" md={4}>
                            <Button variant="outline-light" onClick={this.handleSave} >
                                SALVA
                            </Button>
                        </Row>
                    </Form>
                </div>
            </div>
        )
    }

}

export default FormInserimento