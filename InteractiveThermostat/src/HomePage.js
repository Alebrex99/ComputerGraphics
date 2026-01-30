import {useContext, useEffect, useReducer, useState} from "react";
import {Row, Col, Container, Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import {StateContext} from "./App";
import Grafico from "./Grafico";

function HomePage(){
    const [date, setData] = useState(new Date());
    const [state, dispatch] = useContext(StateContext);
    useEffect(()=> {
        let timer = setInterval(() => setData(new Date()), 1000)
        return () => clearInterval(timer)
    })
    let risc;
    if(state.riscaldamento) risc= "non impostato";
    console.log(state.impostazioni.filter(imp=> imp.id===date.getDay())[0].temp.filter(t => t.ora===date.getHours())[0].valore)
    return(
        <Container>
            <Row className="justify-content-center">
                <h1 style={{color: "coral", fontWeight: "bold"}}>HomePage</h1>
                <Col xs={12} className="mt-5">
                    <Table striped bordered hover variant="dark">
                        <thead>
                        <tr>
                            <th>Modalità di funzionamento</th>
                            <th>giorno</th>
                            <th>ora</th>
                            <th>temperatura</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>{state.riscaldamento? "riscaldamento": "raffreddamento"}</td>
                            <td>{date.toLocaleDateString()}</td>
                            <td>{date.toLocaleTimeString()}</td>
                            <td>{state.impostazioni.filter(imp=> imp.id===date.getDay())[0].temp.filter(t => t.ora===date.getHours())[0].valore}</td>
                        </tr>
                        </tbody>
                    </Table>
                </Col>


            </Row>
            <Row className="align-items-end">
                <Col>
                    <Link to={{pathname: "/ControlPanel"}} style={{fontWeight: "bold"}}>ControlPanel</Link>
                </Col>
            </Row>

        </Container>


    )
}




export default HomePage;