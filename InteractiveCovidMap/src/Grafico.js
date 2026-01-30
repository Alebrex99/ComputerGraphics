import {Chart} from "react-google-charts";
import useAxios from "axios-hooks";
/*per vedere connessione lenta: inspect-> online -> network

inserito nel return() di grafico per iniziare: il formato richiesto dal grafico è in DATA
<Chart
  width={'600px'}
  height={'400px'}
  chartType="LineChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['x', 'dogs'],
    [0, 0],
    [1, 10],
    [2, 23],
    [3, 17],
    [4, 18],
    [5, 9],
    [6, 11],
    [7, 27],
    [8, 33],
    [9, 40],
    [10, 32],
    [11, 35],
  ]}
  options={{
    hAxis: {
      title: 'Time',
    },
    vAxis: {
      title: 'Popularity',
    },
  }}
  rootProps={{ 'data-testid': '1' }}
/>
* */

function Grafico({country}){
    const [{data, loading, error}] = useAxios(`https://disease.sh/v3/covid-19/historical/${country}?lastdays=30`)//object destructuring, prelevo il primo elemento
    //ora dobbiamo fare dei test in base a ciò che viene tornato dalla useAxios
    if(loading)
    {
        return(<div>Loading...</div>);
    }
    if(error)
    { //può darsi che il sito muoia o siamo scollegati dalla rete
        return(<div>Errore(?)</div>);
    }
    console.log("tutti i dati prelevati dal SERVER: ",data.timeline.cases)
    //Object.keys(data.timeline.cases) stampa solo le chiavi dentro oggetto sotto forma di lista
    console.log("prelevo solo le DATE e le metto in un array: ", Object.keys(data.timeline.cases))

    //devo trasformare i dati nel formato messo a disposizione dal grafico trovato: [[...] ,[...] ,[...] , ...]
    const dati = Object.keys(data.timeline.cases).map(d => [d, data.timeline.cases[d]])
    console.log("dati finali in formato [[data, numero ], ...]: ",dati)
    //concludo il formato mettendo in cima all'array di liste, la listina con le 2 intestazioni
    dati.unshift(["date", "infections"])

    return(
        <div className="chart">
            <Chart
                width={'600px'}
                height={'400px'}
                chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={dati}
                options={{
                    hAxis: {
                        title: 'Date',
                    },
                    vAxis: {
                        title: 'Infections',
                    },
                }}
                rootProps={{ 'data-testid': '1' }}
            />
        </div>
    );
}
export default Grafico;