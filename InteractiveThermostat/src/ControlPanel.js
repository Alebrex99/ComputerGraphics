import {FormGroup, FormLabel} from "react-bootstrap";
import {Button, FormControl, Row, Col} from "react-bootstrap";
import React, {useContext, useState} from "react";
import {StateContext} from "./App";
import {Container} from "react-bootstrap/cjs";
import {Link} from "react-router-dom";
import {imposta, replica} from "./actions";
import {temperatureC, temperatureF} from "./reducer";
import Grafico from "./Grafico";

export default function ControlPanel(){
    const [giorno, setGiorno] =useState("lunedì");
    const [ora, setOra] =useState(0);
    const [temp, setTemp]= useState(20);
    const [state, dispatch] = useContext(StateContext);
    const impostazioni = state.impostazioni;
    console.log(state.riscaldamento)
    console.log(giorno)
    console.log(ora)
    console.log(temp)
    console.log(state)
    return (
        <Container className="controlPanel">
            <Row className="justify-content-center">
                <h1 style={{color: "coral", fontWeight: "bold"}}>ControlPanel</h1>
                <Col xs={10}>
                    <FormGroup>
                        <Row className="justify-content-center m-5">
                            <FormGroup as={Col} xs={5} style={{border:" solid 5px black", padding: "10px", backgroundColor: "lightBlue"}}>
                                <FormLabel>Funzionamento</FormLabel>
                                <FormControl as="select" defaultValue="impostare..."
                                             onChange={e => dispatch(imposta(e.target.value==="riscaldamento" ? true: false))}>
                                    <option>impostare...</option>
                                    <option>raffreddamento</option>
                                    <option>riscaldamento</option>
                                </FormControl>
                            </FormGroup>
                        </Row>


                        <Row className="mt-5" style={{border: "solid 5px black", padding: "10px", backgroundColor: "yellow"}}>
                            <FormGroup as={Col}>
                                <FormLabel>Giorno</FormLabel>
                                <FormControl as="select" id="giorno" value={giorno}
                                             onChange={e => setGiorno(e.target.value)}>

                                    {impostazioni.map(imp => {
                                        return (<option key={imp.id}>{imp.giorno}</option>)
                                    })}
                                </FormControl>
                            </FormGroup>

                            <FormGroup as={Col}>
                                <FormLabel>Ora</FormLabel>
                                <FormControl as="select" value={ora}
                                             onChange={e => setOra(Number(e.target.value))}>

                                    {impostazioni[0].temp.map(temp => {
                                        return <option key={temp.ora}>{temp.ora}</option>
                                    })}
                                </FormControl>
                            </FormGroup>

                            <FormGroup as={Col}>
                                <FormLabel>Temperatura</FormLabel>
                                <FormControl as="select" value={temp}
                                             onChange={e => setTemp(e.target.value)}>

                                    {state.riscaldamento
                                        ? state.temperatureC.map(tc => <option key={tc}>{tc}</option>)
                                        : state.temperatureF.map(tf => <option key={tf}>{tf}</option>)}
                                </FormControl>
                            </FormGroup>

                            <Col xs={12}>
                                <Button variant="danger" size="lg"
                                        onClick={() => dispatch(imposta(state.riscaldamento, giorno, ora, temp))}>Imposta</Button>
                            </Col>
                            <Col xs={12} className="mt-3">
                                <Button variant="danger" size="lg"
                                onClick={() => dispatch(replica(state.riscaldamento, ora, temp))}>Replica comportamento</Button>
                            </Col>

                        </Row>
                    </FormGroup>
                </Col>

                <Grafico giorno={giorno} ora={ora} temp={temp}/>
            </Row>
            <Col className="m-5">
                <footer>
                    <Link to={{pathname: "/"}}>HomePage</Link>
                </footer>
            </Col>

        </Container>


    )
}
