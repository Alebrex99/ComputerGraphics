import {IMPOSTA, REPLICA} from './actions'

export const InitialState={
    riscaldamento: true,
    temperatureF: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
    temperatureC: [21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40],
    impostazioni: [
        {
            giorno: "lunedì",
            id: 1,
            temp: [{ ora:0, valore: 20}, {ora:1, valore: 20}, {ora:2, valore: 20}, {ora:3, valore: 20}, {ora:4, valore: 20}, {ora:5, valore: 20}, {ora:6, valore: 20},
                {ora:7, valore: 20}, {ora:8, valore: 20}, {ora:9, valore: 20}, {ora:10, valore: 20}, {ora:11, valore: 20}, {ora:12, valore: 20}, {ora:13, valore: 20},
                {ora:14, valore: 20}, {ora:15, valore: 20}, {ora:16, valore: 20}, {ora:17, valore: 20}, {ora:18, valore: 20}, {ora:19, valore: 20},{ora:20, valore: 20},
                {ora:21, valore: 20}, {ora:22, valore: 20}, {ora:23, valore: 20}]
        },
        {
            giorno: "martedì",
            id: 2,
            temp: [{ ora:0, valore: 20}, {ora:1, valore: 20}, {ora:2, valore: 20}, {ora:3, valore: 20}, {ora:4, valore: 20}, {ora:5, valore: 20}, {ora:6, valore: 20},
                {ora:7, valore: 20}, {ora:8, valore: 20}, {ora:9, valore: 20}, {ora:10, valore: 20}, {ora:11, valore: 20}, {ora:12, valore: 20}, {ora:13, valore: 20},
                {ora:14, valore: 20}, {ora:15, valore: 20}, {ora:16, valore: 20}, {ora:17, valore: 20}, {ora:18, valore: 20}, {ora:19, valore: 20},{ora:20, valore: 20},
                {ora:21, valore: 20}, {ora:22, valore: 20}, {ora:23, valore: 20}]
        },
        {
            giorno: "mercoledì",
            id: 3,
            temp: [{ ora:0, valore: 20}, {ora:1, valore: 20}, {ora:2, valore: 20}, {ora:3, valore: 20}, {ora:4, valore: 20}, {ora:5, valore: 20}, {ora:6, valore: 20},
                {ora:7, valore: 20}, {ora:8, valore: 20}, {ora:9, valore: 20}, {ora:10, valore: 20}, {ora:11, valore: 20}, {ora:12, valore: 20}, {ora:13, valore: 20},
                {ora:14, valore: 20}, {ora:15, valore: 20}, {ora:16, valore: 20}, {ora:17, valore: 20}, {ora:18, valore: 20}, {ora:19, valore: 20},{ora:20, valore: 20},
                {ora:21, valore: 20}, {ora:22, valore: 20}, {ora:23, valore: 20}]
        },
        {
            giorno: "giovedì",
            id: 4,
            temp: [{ ora:0, valore: 20}, {ora:1, valore: 20}, {ora:2, valore: 20}, {ora:3, valore: 20}, {ora:4, valore: 20}, {ora:5, valore: 20}, {ora:6, valore: 20},
                {ora:7, valore: 20}, {ora:8, valore: 20}, {ora:9, valore: 20}, {ora:10, valore: 20}, {ora:11, valore: 20}, {ora:12, valore: 20}, {ora:13, valore: 20},
                {ora:14, valore: 20}, {ora:15, valore: 20}, {ora:16, valore: 20}, {ora:17, valore: 20}, {ora:18, valore: 20}, {ora:19, valore: 20},{ora:20, valore: 20},
                {ora:21, valore: 20}, {ora:22, valore: 20}, {ora:23, valore: 20}]
        },
        {
            giorno: "venerdì",
            id: 5,
            temp: [{ ora:0, valore: 20}, {ora:1, valore: 20}, {ora:2, valore: 20}, {ora:3, valore: 20}, {ora:4, valore: 20}, {ora:5, valore: 20}, {ora:6, valore: 20},
                {ora:7, valore: 20}, {ora:8, valore: 20}, {ora:9, valore: 20}, {ora:10, valore: 20}, {ora:11, valore: 20}, {ora:12, valore: 20}, {ora:13, valore: 20},
                {ora:14, valore: 20}, {ora:15, valore: 20}, {ora:16, valore: 20}, {ora:17, valore: 20}, {ora:18, valore: 20}, {ora:19, valore: 20},{ora:20, valore: 20},
                {ora:21, valore: 20}, {ora:22, valore: 20}, {ora:23, valore: 20}]
        },
        {
            giorno: "sabato",
            id: 6,
            temp: [{ ora:0, valore: 20}, {ora:1, valore: 20}, {ora:2, valore: 20}, {ora:3, valore: 20}, {ora:4, valore: 20}, {ora:5, valore: 20}, {ora:6, valore: 20},
                {ora:7, valore: 20}, {ora:8, valore: 20}, {ora:9, valore: 20}, {ora:10, valore: 20}, {ora:11, valore: 20}, {ora:12, valore: 20}, {ora:13, valore: 20},
                {ora:14, valore: 20}, {ora:15, valore: 20}, {ora:16, valore: 20}, {ora:17, valore: 20}, {ora:18, valore: 20}, {ora:19, valore: 20},{ora:20, valore: 20},
                {ora:21, valore: 20}, {ora:22, valore: 20}, {ora:23, valore: 20}]
        },
        {
            giorno: "domenica",
            id: 7,
            temp: [{ ora:0, valore: 20}, {ora:1, valore: 20}, {ora:2, valore: 20}, {ora:3, valore: 20}, {ora:4, valore: 20}, {ora:5, valore: 20}, {ora:6, valore: 20},
                {ora:7, valore: 20}, {ora:8, valore: 20}, {ora:9, valore: 20}, {ora:10, valore: 20}, {ora:11, valore: 20}, {ora:12, valore: 20}, {ora:13, valore: 20},
                {ora:14, valore: 20}, {ora:15, valore: 20}, {ora:16, valore: 20}, {ora:17, valore: 20}, {ora:18, valore: 20}, {ora:19, valore: 20},{ora:20, valore: 20},
                {ora:21, valore: 20}, {ora:22, valore: 20}, {ora:23, valore: 20}]
        }
    ]
}
//l'unico valore modificabile è la temperatura.
/*{
                                ...imp,
                                temp: imp.temp.map(t => {
                                    if(t.ora===hhSelected)
                                    return {
                                        ...t,
                                        valore: tempChanged  //unico valore effettivamente modificato da quello di default a quello attuale
                                    }
                                    else return t;
                                }
* */

export const giorni=  {lunedi: "lunedì", martedi: "martedì", mercoledi: "mercoledì", giovedi: "giovedì", venerdi: "venerdì", sabato: "sabato", domenica: "domenica"}
export function reducer(state, action){
    switch(action.type){
        case IMPOSTA : {
            const ModChanged = action.riscaldamento;
            const ggSelected = action.giorno;
            const hhSelected = action.ora;
            const tempChanged = Number(action.temp);
            return {...state, riscaldamento: ModChanged, impostazioni: state.impostazioni.map(imp => { //uso MAP quando cerco un elemento specifico da modificare
                    if(imp.giorno === ggSelected){ //if mi serve per bloccare l'oggetto specifico che ho selezionato
                        return ({
                                ...imp, //va tutto bennnnneeeee
                                temp: imp.temp.map(t => {
                                    if(t.ora===hhSelected)
                                    return {
                                        ...t,
                                        valore: tempChanged  //unico valore effettivamente modificato da quello di default a quello attuale
                                    }
                                    else return t;
                                })
                            }
                        )
                    }
                    else return imp;
                })}
        }

        case REPLICA: {
            const ModChanged = action.riscaldamento;
            const hhSelected = action.ora;
            const tempChanged = Number(action.temp);
            return {...state, riscaldamento: ModChanged, impostazioni: state.impostazioni.map(imp => {
                return ({
                    ...imp,
                    temp: imp.temp.map(t => {
                        if(t.ora === hhSelected)
                            return {
                            ...t,
                                valore: tempChanged
                            }
                        else return t;
                    })
                })
                })}
        }
        default: return state;
    }
    return null
}