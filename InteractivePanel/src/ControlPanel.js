import {useContext} from "react";
import {StateContext} from "./App";
import shortid from 'shortid';
import './App.css'
import './ControlPanel.css'
import {change, sell, unselectAll} from "./actions";

function ControlPanel(){
    const [state, dispatch] = useContext(StateContext);
    const incasso = state.incasso;
    let parziale = 0;
    const cart = state.cart;
    const fares = state.fares;
    for (let seat of cart){
        parziale += seat.price;
    }
    console.log(state.cart);
    return(
        <div>
            <div key={shortid()} className="text">
                <h1>Incassi totali: {incasso} $</h1>
                <h2>Emissione Biglietti</h2>
                <div className="container1">
                    <p className='item'>Posizione</p>
                    <p className='item'>Tariffa</p>
                    <p className='item'>Prezzo</p>
                </div>
            </div>
            <div key={shortid()} className="biglietti">
                {cart.map(seat => {

                    return (
                        <div key={shortid()} className="container1">

                            <div key={shortid()} className='item'>{seat.seatID}</div>

                            <select key={shortid()} id={seat.seatID+1} className='item' defaultValue={fares.filter(fare => fare.price===seat.price)[0].tariffa}
                                    onChange={() =>
                                        dispatch(change(seat.seatID, fares.filter(fare =>{
                                            const selectValue = document.getElementById(seat.seatID+1)
                                            console.log(selectValue.value);
                                            return fare.tariffa===selectValue.value;
                                        })[0].price))}>

                                {fares.map(fare =>{
                                    //nome della tariffa allegata al costo del prezzo del posto messo nel cart
                                    const tariffa = fares.filter(fare => fare.price===seat.price)[0].tariffa;
                                    if(tariffa === fare.tariffa) //mi fa  comparire l'opzione di quella tariffa === nome della tariffa trovato
                                        return <option key={shortid()} id={fare.price}>{fare.tariffa}</option>
                                    else //solo se coincide lo lascia selezionato
                                        return <option key={shortid()} id={fare.price}>{fare.tariffa}</option>
                                    })
                                }
                            </select>

                            <div key={shortid()} className='item'>{seat.price}</div>

                        </div>
                    )})
                }

                <div className="container2">
                    <p className="parziale">Totale parziale: {parziale} $</p>
                    <div className="bottoni">
                        <div className="col1">
                            <button onClick={() => dispatch(unselectAll())}>Annulla</button>
                        </div>
                        <div className="col2">
                            <button onClick={() => dispatch(sell())}>Acquista</button>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default ControlPanel;