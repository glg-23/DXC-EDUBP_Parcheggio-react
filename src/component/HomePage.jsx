import React from "react";
import ListaAuto from "./ListaAuto";
import FormInserimento from "./FormInserimento";

class HomePage extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            listaAuto: [
                {
                    nome: "Nome 1",
                    cognome: "Cognome 1",
                    email: "persona1@gmail.com",
                    telefono: "111111111",
                    targa: "AA111AA",
                    colore: null
                },
                {
                    nome: "Nome 2",
                    cognome: "Cognome 2",
                    email: "persona2@gmail.com",
                    telefono: "222222222",
                    targa: "AA222AA",
                    colore: null
                }
            ]
        }

        this.verificaTarga();
    }

    verificaTarga() {
        //targa pari o dispari
        for (var elem in this.state.listaAuto) {
            //console.log(this.state.listaAuto[elem].targa)

            var coloreRiga;
            var str = this.state.listaAuto[elem].targa.substring(4, 5);
            //console.log(str)

            if (str % 2 == 0) {
                coloreRiga = "TargaPari";
            } else {
                coloreRiga = "TargaDispari";
            }
            //console.log(coloreRiga)

            let lista = this.state.listaAuto[elem];
            //console.log(typeof lista)

            Object.assign(lista, { colore: coloreRiga });
        }

        this.addAuto = this.addAuto.bind(this);
    }

    addAuto(auto) {
        let lista = this.state.listaAuto;
        lista.push(auto);
        //console.log(lista)

        this.setState({ listaAuto: lista });
        this.verificaTarga();
    }

    render() {
        return (
            <div>

                <div className="ContainerHome">
                    <h2 className="TitoloHome">Applicazione per inserimento ed elenco di automobili</h2>
                    <h6 className="DescrizioneHome">Una volta inseriti i dati del veicolo nel form, l'app si occuperà di aggiungerli alla tabella. </h6>
                    <h6 className="DescrizioneHome">Se il numero di targa è pari, la riga corrispondente verrà evidenziata in verde, altrimenti se il numero di targa è dispari, la riga verrà evidenziata in rosso. </h6>
                </div>

                <FormInserimento callBack={this.addAuto} />
                <ListaAuto listaAuto={this.state.listaAuto} />

                <div className="ContainerHome">
                    <h6 className="DescrizioneHome"> Gianluigi D'AntimI</h6>
                    <h6 className="DescrizioneHome"> Corso REACT JS FUNDAMENTAL - EduBP srl</h6>
                    <h6 className="DescrizioneHome"> 13/01/2022 - 21/01/2022</h6>
                </div>
            </div>
        )
    }

}

export default HomePage