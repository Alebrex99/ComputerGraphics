import Chart from "react-google-charts";
import InteractiveMap from "./InteractiveMap";
import Dati from "./Dati";
import "./App.css";
import Grafico from "./Grafico";
import {useState} from 'react';

//SCRIVERE APP PER VEDERE UN SITO CON UNA MAPPA
/*ho un mappa mondiale dove vedo distribuzione di casi nel mondo
  esplorando i singoli paesei con il maouse, vedo i dati
  i dati vengono dal sito web.

  dobbiamo procurarci i dati: i numeri che servono per il grafico; devo cercare la risposta nel sito inserito
  perchè all'interno ho url contattabili e alcune ci forniscono questi dati;
  le info che interessano sono quelle di HISOTICAL che contengono dei dati ocn una serie temporale:
  - historical/country
  puoi inerire, provando, il codice IT:
  in 30 giorni ci dice cosa ha risposto: un obj jSON con una serie di dati:
  - cases
  - deth
  - recoverd
  per ciascuno ho una data con scritto vari elementi; il valore è il numero di casi crescente di persone a cui è stato
  diagnosticato covid.
  i dati me li procuro chiedendo a questa URL le informazioni.

  ora che ho dei numeri come li metto insieme per disegnare il grafo?
  1) mi metto li e faccio il grafo con sequenza punti uniti da un segmento, potrei disegnare con SVG usando il path,
     posso usare data per ricavare coordinata x e numerino per coordinata y; fa una line to l -> punto successivo fino al fondo
     poi aggiungo assi anche e quantità.
  2) ma i componenti react non li devo inventare tutti, qualcuno ha già creato un componente :
     scrivo : REACT LINE CHART e vedo cosa ottengo
     già il primo assomiglia a ciò che mi piace.
     lo disegna con codice. per usare una cosa così devo importare libreria; nella pagina può esserci scritto
     la libreria da importare con NPM.
     il seconod (chart) può dare la possibilità di inserire 3 linee per creare un grafico.
     quando hai un problema, capisci cosa vuoi fare e cerchi soluzioni da poter usare.
     mi da un componente:
     <Chart .....
        data= [....]

     npm i react-google-charts
  3) deco reasformare dati, prendo un pezzo di funzione per trasformare struttura dati che arriva dall'API
     in ciò che vogliamo noi.

  dobbiamo trasformare dati ricevuti in array di 2 elementi

  importiamo nuova libreia

  dovrò usare una stylingfunction che restituisce dettagli dell'SVG

  per far si che il country dipenda dalla mappa, molto più lungo :

*/

function App() {
    const [country, setCountry]= useState("IT")
    return (
        <div className="App">
            <InteractiveMap onClick={setCountry}/>
            <div style={{textAlign: "center"}}><h1>{country}</h1></div>

            <div className="flex">
                <Dati country={country} attribute="todayCases"/>
                <Dati country={country} attribute="todayDeaths"/>
                <Dati country={country} attribute="todayRecovered"/>
            </div>

            <div className="flex">
                <div className="chart">
                    <Grafico country="us" />
                </div>
                <div className="chart">
                    <Grafico country={country}/>
                </div>
            </div>
        </div>
    );
}
export default App;






