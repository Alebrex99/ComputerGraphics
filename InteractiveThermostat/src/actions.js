export const IMPOSTA = "imposta";
export const REPLICA = "replica";
export function imposta(riscaldamento, giorno, ora, temp){
    return {type: IMPOSTA, riscaldamento: riscaldamento, giorno: giorno, ora: ora, temp: temp}
}

export function replica(riscaldamento, ora, temp){
    return {type: REPLICA,riscaldamento: riscaldamento, ora: ora, temp: temp}
}