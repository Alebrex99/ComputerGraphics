import React, {useContext} from "react";
import {StateContext} from "./App";
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import Chart from 'react-google-charts';
import {imposta} from "./actions";
/*
* ['Ora', 'Temperatura'],
                    ['Acrocanthosaurus (top-spined lizard)', 12.2],
                    ['Albertosaurus (Alberta lizard)', 9.1],
                    ['Allosaurus (other lizard)', 12.2],
                    ['Apatosaurus (deceptive lizard)', 22.9],
                    ['Archaeopteryx (ancient wing)', 0.9],
                    ['Argentinosaurus (Argentina lizard)', 36.6],
                    ['Baryonyx (heavy claws)', 9.1],
                    ['Brachiosaurus (arm lizard)', 30.5],
                    ['Ceratosaurus (horned lizard)', 6.1],
                    ['Coelophysis (hollow form)', 2.7],
                    ['Compsognathus (elegant jaw)', 0.9],
                    ['Deinonychus (terrible claw)', 2.7],
                    ['Diplodocus (double beam)', 27.1],
                    ['Dromicelomimus (emu mimic)', 3.4],
                    ['Gallimimus (fowl mimic)', 5.5],
                    ['Mamenchisaurus (Mamenchi lizard)', 21.0],
                    ['Megalosaurus (big lizard)', 7.9],
                    ['Microvenator (small hunter)', 1.2],
                    ['Ornithomimus (bird mimic)', 4.6],
                    ['Oviraptor (egg robber)', 1.5],
                    ['Plateosaurus (flat lizard)', 7.9],
                    ['Sauronithoides (narrow-clawed lizard)', 2.0],
                    ['Seismosaurus (tremor lizard)', 45.7],
                    ['Spinosaurus (spiny lizard)', 12.2],
                    ['Supersaurus (super lizard)', 30.5],
                    ['Tyrannosaurus (tyrant lizard)', 15.2],
                    ['Ultrasaurus (ultra lizard)', 30.5],
                    ['Velociraptor (swift robber)', 1.8],
                ]*/

export default function Grafico({giorno, ora, temp}){
    const [state, dispatch] = useContext(StateContext)
    const dati = state.impostazioni.filter(imp => imp.giorno === giorno)[0].temp.map(t => [t.ora, t.valore])
    const dati2 = state.impostazioni.filter(imp => imp.giorno === giorno)[0].temp.map(t => {
        if(t.ora === ora) {return [ora, Number(temp)]}
        else return [t.ora, t.valore]
    })
    console.log(dati2)
    dati2.unshift(["Ora", "temperatura"])
    dati.unshift(["Ora", "temperatura"])



    return (
        <Container>
            <Row className="mt-3">
                <Col xs={12} md={6}>
                    <Chart
                        width={'600px'}
                        height={'400px'}
                        chartType="LineChart"
                        loader={<div>Loading Chart</div>}
                        data={dati}
                        options={{
                            hAxis: {
                                title: 'Ora',
                            },
                            vAxis: {
                                title: 'temperatura',
                            },
                            series: {
                                1: {curveType: 'function'},
                            },
                        }}
                        rootProps={{'data-testid': '2'}}
                    />
                </Col>
                <Col xs={"auto"}  md={12} lg={6}>
                    <label htmlFor={"LineChart"} style={{margin: "10em 10em", fontSize: "20px"}} >
                        <p>Giorno visualizzato:  {giorno}</p>
                    </label>
                </Col>

            </Row>
            <Row>
                <Col xs={12} md={6}>
                    <Chart
                        width={'600px'}
                        height={'400px'}
                        chartType="ScatterChart"
                        data={dati2}
                        options={{
                            hAxis: {
                                title: 'Ora',
                            },
                            vAxis: {
                                title: 'temperatura',
                            },
                            series: {
                                1: {curveType: 'function'},
                            },
                        }}
                        chartEvents={[
                            {
                                eventName: 'select',
                                callback: ({ chartWrapper }) => {
                                    const chart = chartWrapper.getChart()
                                    const selection = chart.getSelection()
                                    if (selection.length === 1) {
                                        const [selectedItem] = selection
                                        const dataTable = chartWrapper.getDataTable()
                                        const { row, column } = selectedItem
                                        dispatch(imposta(state.riscaldamento, giorno, row, dataTable.getValue(row,column)))
                                        alert(
                                            'You selected : ' +
                                            JSON.stringify({
                                                row,
                                                column,
                                                value: dataTable.getValue(row, column),
                                            }),
                                            null,
                                            2,
                                        )
                                    }
                                    console.log(selection)
                                },
                            },
                        ]}
                    />
                </Col>
                <Col xs={"auto"}  md={12} lg={6} className="text-primary">
                    <label style={{margin: "10em 10em"}}>
                        <p>Riscontro del pannello di controllo</p>
                        <p>Ora desiderata: {ora}</p>
                        <p>Temperatura desiderata: {temp}</p>
                    </label>
                </Col>
            </Row>

        </Container>

    )
}