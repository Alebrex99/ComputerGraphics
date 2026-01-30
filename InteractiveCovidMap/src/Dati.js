import App from './App'
import useAxios from "axios-hooks";
import Chart from "react-google-charts";
import "./App.css";
import React from "react";
/*per costruire i dati, ossia aggiungere le statistiche, se sulla mappa clicchiamo sull'itali, deve far comparire
  le cose dell'italia.
  quando la mappa è selezionata faccio sapere a i quadratini sotto e li andiamo a prenderci i dati specifici del paese su cui ho fatto click.
  in questi dati dobbiamo passarci un country per sapere di quale posto dobbiamo leggere delle informazioni.
  ci facciamo dare le informazioni presenti sul server :
  mettendo per esempio IT sul sito, puoi copiare la url e sostituire IT con il valore che ti interessa.
  quindi coiperò la url e cambierò IT con {country}

  DATI ha bisogno di una prop da ricevere da chi usa i dati.
  dobbiamo scegliere i tipi di dati: per il singolo paese per esempio far vedere
  i casi recenti , i today deths ecc..
  ma i 3 blocchi sono diversi.
  potremmo quindi aggiungere una prop in più nella funzione con il nome del dato chd vorremo far vedere

 */

function Dati({country, attribute}){
    //attribute = nome del dato che vogliamo visualizzare
    const[{data, loading,error}] = useAxios(`https://disease.sh/v3/covid-19/countries/${country}?strict=true`)
    if(loading)
    {
        return(<div>Loading...</div>);
    }
    if(error)
    { //può darsi che il sito muoia o siamo scollegati dalla rete
        return(<div>Errore(?)</div>);
    }
    console.log("dati prelevati dal SERVER: ", data);
    const d = data[attribute] // non puoi fare: data.attribute, poichè è una variabile!
    return(
        <div className="dati">
            <h1>{d}</h1>
            <h2>{attribute}</h2>
        </div>)
}
export default Dati;





//object destructuring
const a = [{saluto: "ciao", saluto2: "salve"}, 3]
let [{saluto, saluto2}]= a;
console.log(saluto, saluto2)

//nota bene: uso di notazione puntata
const b = {"mele": 2, "pere": 4};
let c = b["mele"]; //ok
let c2 = "mele";
let c_error = b.c2 //notazione puntata non può essere usata con le variabili
console.log(c);
console.log(c_error);