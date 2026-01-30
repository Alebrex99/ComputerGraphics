

//AZIONI CHE L'UTENTE FINALE PUO COMPIERE
/*1) SELEZIONARE UN POSTO: SELECT
     acquisto biglietto: slezione poltrone che cambiano colore :
     - grigio-> arancione
     riempie una lista temporanea di elementi selezionati,
  2) DESELEZIONARE UN POSTO: UNSELECT
     cambio idea: deselezionare un posto
     una poltrona colore arancione: cambio colore
     - arancione -> grigio
     la lista perde l'elemento (ID) associato
  3) CAMBIARE LA TARIFFA: CHANGE
     sull'onClick della postazione selezionata compare una tendina per selezionare il prezzo.
     selezionando il prezzo,
     - aumenta il totale parziale
  4) DESELEZIONARE TUTTO: UNSELECT_ALL
     pulsante "Annulla" : deseleziono tutto
     tutto ciò che è arancione cambia:
     - arancione -> gridio
     la lista temporanea perde tutti gli elementi: stato iniziale per la schermata destra:
     - totale parziale = 0 ,
     - incassi totale = stato precedente
  5) VENDITA DI POSTI SELEZIONATI: SELL
     pulsante "Conferma" :
     tutto ciò che ho selezionato e che ora è arancione: onCLick
     - arancione -> rosso
     postazioni rosse ora non hanno più onCLick.
     - la lista paraziale si svuota da tutti i posti arancioni
*/
export const SELECT = "select";
export const UNSELECT = "unselect";
export const CHANGE = "change";
export const UNSELECTALL="unselectAll";
export const SELL = "sell";

export function select(seatID, price){
    return {type: SELECT, seatID, price};
}

export function unselect(seatID){
    return {type: UNSELECT, seatID};
}

export function change(seatID, price){
    return {type: CHANGE, seatID, price};
}

export function unselectAll(){
    return {type: UNSELECTALL};
}

export function sell(){
    return {type: SELL};
}