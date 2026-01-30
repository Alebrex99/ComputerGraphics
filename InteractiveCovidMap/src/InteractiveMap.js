import { WorldMap } from "react-svg-worldmap"
import Chart from "react-google-charts";
import "./App.css";
import useAxios from "axios-hooks";
//devo trasformare i dati del sito e devo distinguere loading, error o altro.
//DATI + FUNZIONE DI STILE DAL SITO--------------------------------------------------------------------------------------
/*const data =
       [
           { country: "cn", value: 1389618778 }, // china
           { country: "in", value: 1311559204 }, // india
           { country: "us", value: 331883986 },  // united states
           { country: "id", value: 264935824 },  // indonesia
           { country: "pk", value: 210797836 },  // pakistan
           { country: "br", value: 210301591 },  // brazil
           { country: "ng", value: 208679114 },  // nigeria
           { country: "bd", value: 161062905 },  // bangladesh
           { country: "ru", value: 141944641 },  // russia
           { country: "mx", value: 127318112 }   // mexico
       ]
  const stylingFunction = (context : any) => {
    const opacityLevel = 0.1 + (1.5 * (context.countryValue - context.minValue) / (context.maxValue - context.minValue))
    return {
        fill: context.country === "US" ? "blue" : context.color,
        fillOpacity: opacityLevel,
        stroke: "green",
        strokeWidth: 1,
        strokeOpacity: 0.2,
        cursor: "pointer"
           }
    }

  la unfxione useaxios è asincrona, se gli chiedi ora di avere i dati, dentro data appena chiamata mette undefined, indfatti dopo li prenderà i dati.
  per questo abbiamo usato loading...
  per questo motivo abbiamo impostato molte condizioni if() per gestire questi casi, data contiene

  onClickFunction:
  affinchè possa risalire fino a interactivemap deve ricevere onclick*/

    /*mapping di world map: vogliamo ottenre una scala di colori che aumenti la visibilità delle differenze tra i diversi stati
     per farlo possiamo usare:
     - scala logaritmica
     - oppure elevare al quadrato, cioè chi ne ha pochi diventano sempre più simili allo zero
     const l = (1-val)*50 + 50;
     ho costruito una funzione matematica tale che quando la variabile in ingresso (val) fosse 1 vale 50, quando vale 0, allora vale 100.
     abbiamo trasposto i numeri nell'intervallo (0,1) nell'intervallo (0,50)
     per esempio elevo **0.25 alla radice quarta di x, così da ottenre una scala più grande
     se io elevassi a 0.5 avrei una differenza meno netta, perchè i valori sono più vicini tra loro, mettendo 0.125 viene una differenza più marcata*/

    /*hsl: funzione js con 3 parametri
              h: 0 rosso, 120 verde, 240 blu
              s: saturazione da 0%grigio a 100% colore vero
              l: 0% nero, 50% luminosissimo, 100% bianco
*/


function InteractiveMap({onClick}){
    const[{data, loading,error}] = useAxios("https://disease.sh/v3/covid-19/countries?yesterday=false&twoDaysAgo=false&sort=cases&allowNull=true")
    if(loading)
    {
        return(<div>Loading...</div>);
    }
    if(error)
    { //può darsi che il sito muoia o siamo scollegati dalla rete
        return(<div>Errore(?)</div>);
    }
    //fare diventare le date nel formato che ci occorre

    //filter: teniamo tutti quelli che hanno d.countryInfo.iso2
    const d= data.filter(d => d.countryInfo && d.countryInfo.iso2).map(d => ({country: d.countryInfo.iso2, value: d.cases }))
    console.log("dati per InteractiveMap: ", d);

    //vogliamo ottenere una scala di colori che aumenti la visibilità delle differenze tra i diversi stati
    /* TO-DO: con scala logaritmica oppure elevare in modo da appiattire quelli che ne hanno pochi / se facciamo
              radice quadrata oppure cubica, possiamo esaltare qualcun altro.
              - dare il colore in modalità HSV*/

    //costruiamo una funzione matematica fatta in modo tale che quando la variabile in ingresso (val) =0 , vale 100; quando val vale 1, vale 50; in mezzo: ha un andamento continuo.
    //con l determiniamo questo andamento continuo. IN GERGO: mappa numerica di trasposizione
    const stylingFunction = (context) => {
        const val = ((context.countryValue - context.minValue) / (context.maxValue - context.minValue))**0.25 // 0.25 radice quarta.... 0.5 =  piu il numero è piccolo piu aumentano le differenze
        const l = (1-val)*50+50 //quando val è 0 l vale 50, quando val è 1 l vale 0
        return {
            /*hsl: h:0 rosso , 120 verde, 240 blu
            *      s: da 0%grigio a 100% colore vero...
            *      l: 0% nero ,50% luminosissimo, 100% bianco */
            fill: `hsl(220,100%, ${l}%)`,
            fillOpacity: 1,
            stroke: "black",
            strokeWidth: 1,
            strokeOpacity: 0.2,
            cursor: "pointer"
        }
    }
    return (
        <div className="flex">
            <div className="Mappa" >
                <WorldMap color="blue" title="Covid-19 Statistics" value-suffix="people" size="xl" data={d} styleFunction={stylingFunction}
                          onClickFunction={(a,b,country) => onClick(country)}/> 
            </div>
        </div>
    )
}
export default InteractiveMap;
