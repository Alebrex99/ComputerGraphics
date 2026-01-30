import {select, unselect, change, sell, unselectAll} from "./actions";
import {SELECT, UNSELECT, CHANGE, SELL, UNSELECTALL} from "./actions";

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

const initialState ={
    venduti: [],
    cart: [],
    incasso: 0,
    fares:[{tariffa: "intero", price:8 },{tariffa: "ridotto Anziani", price:6.40}, {tariffa: "ridotto Giovani", price:5.60}, {tariffa: "omaggio", price:0}]
}

function reducer(state, action){
    switch(action.type){
        case SELECT:{
            const selected= action.seatID;
            const price = action.price;
            if(selected===undefined) return state;
            else return {...state, cart: [...state.cart, {seatID: selected, price: price}]}
        };

        case UNSELECT:{
            const unselected = action.seatID;
            if(unselected===undefined) return state;
            else return {...state, cart: state.cart.filter(seat => seat.seatID !== unselected)}
        };

        case CHANGE:{
            const changed = action.price;
            const selected = action.seatID;
            if(changed===undefined) return state;
            else return {...state, cart: state.cart.map(seat => {            //quando cerco un elemento specifico che devo cambiare, uso MAP
                if(seat.seatID === selected) return {...seat, price: changed};
                else return seat;
                })};
        }

        case UNSELECTALL:{
            return {...state, cart: []}
        }

        case SELL:{
            const cart = state.cart;
            if(cart.length ===0) return state;
            else return {...state, venduti: [...state.venduti, ...cart], cart: [], incasso: cart.map(seat => seat.price).reduce((a,b)=>a+b)}}
            //i 3 puntini ... vogliono dire:
            /* 1) mantieni stesso oggetto specifico
               2) aggiungi la copia di un intero oggetto [...state.venduti, ...cart]
            */

        default: return state;
    }
}


export {initialState, reducer};