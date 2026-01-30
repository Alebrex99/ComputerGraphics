import './App.css';
import InteractiveMap from './InteractiveMap';
import React, {createContext, useReducer} from 'react';
import {reducer, initialState} from "./reducer";
import ControlPanel from "./ControlPanel"
//STATO APPLICAZIONE
/*organizzo lo stato:
  1) lo stato iniziale sarà dato da un obj {} con
     - venduti : [{seatID: , prezzo: } , {} , ]
     - carrello: [{seatID: , prezzo:} , {} , ]
     - incasso totale : valore
     una poltrona specifica sarà un obj = {seatID:... , prezzo:...}

     - selezionando (select) una poltrona (onCLick) -> aggiorno carrello, aggiungo posto
     - deselezionando (unselect) una poltrona (onClick) -> tolgo posto da carrello
     - deselezionando tutto (unselect_all) ("annulla")(onClick) -> carrello diventa []
     - vendendo i posti selezionati (sell) ("conferma")(onClick) -> carrello: [] , aggiungo a  venduti: [{} ,..]
                                                          -> incasso totale: valore+valore aggiorno
     - cambiando tariffa di elemento carrello (change) (onCLick) -> cambio campo prezzo della poltrona in carrello

   2) all'inizio :
     - poltrone vendutre: []
     - carrello: []
     - incasso totale: 0
     - incasso parziale: 0

*/
export const StateContext = createContext();

function App() {
    const value = useReducer(reducer, initialState); //value={value}
    return (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            <div className="App">
                <div className="Sinistra">
                    <InteractiveMap/>
                </div>

                <div className="Destra">
                    <ControlPanel/>
                </div>
            </div>
        </StateContext.Provider>
    );
}

export default App;
