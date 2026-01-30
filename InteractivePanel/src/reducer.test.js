import {reducer, initialState} from "./reducer";
import {select, unselect, change, sell, unselectAll} from "./actions";

test('verifica selezione', () => {
    const oldState = {
        venduti: [],
        cart: [{seatID:"A1", price: 8.0}, {seatID:"A2", price: 6.4}],
        incasso: 0.0
    }
    const newState1 = reducer(oldState, select("A3", 5))
    console.log(newState1)
    expect(newState1.cart).toEqual([{seatID:"A1", price: 8.0}, {seatID:"A2", price: 6.4}, {seatID:"A3", price:5}])
    expect(newState1.venduti).toEqual(oldState.venduti)
    expect(newState1.incasso).toEqual(oldState.incasso)
    const newState2 = reducer(oldState, select("A10", 5.60))
    expect(newState2.cart).toEqual([{seatID:"A1", price: 8.0}, {seatID:"A2", price: 6.4}, {seatID: "A10", price: 5.60}])
    expect(newState2.venduti).toEqual(oldState.venduti)
    expect(newState2.incasso).toEqual(oldState.incasso)
})

test('verifica deselezione', () => {
    const oldState = {
        venduti: [],
        cart: [{seatID:"A1", price: 8.0}, {seatID:"A2", price: 6.4}],
        incasso: 0.0
    }
    const newState1 = reducer(oldState, unselect("A1")) //poichè passo solo il seatID, il prezzo è {... ,price: undefined}
    expect(newState1.cart).toEqual([{seatID:"A2", price: 6.4}])
    expect(newState1.venduti).toEqual(oldState.venduti)
    expect(newState1.incasso).toEqual(oldState.incasso)
    const newState2 = reducer(oldState, unselect("A2"))
    expect(newState2.cart).toEqual([{seatID:"A1", price: 8.0}])
    expect(newState2.venduti).toEqual(oldState.venduti)
    expect(newState2.incasso).toEqual(oldState.incasso)
})

test('verifica cambiamento tariffa', () => {
    const oldState = {
        venduti: [],
        cart: [{seatID:"A1", price: 8.0}, {seatID:"A2", price: 6.4}],
        incasso: 0.0
    }
    const newState1 = reducer(oldState, change("A1", 0.0))
    expect(newState1.cart).toEqual([{seatID:"A1", price: 0},{seatID:"A2", price: 6.4} ])
    expect(newState1.venduti).toEqual(oldState.venduti)
    expect(newState1.incasso).toEqual(oldState.incasso)
    const newState2 = reducer(oldState, change("A2", 5.60))
    expect(newState2.cart).toEqual([{seatID:"A1", price: 8.0},{seatID:"A2", price: 5.60}])
    expect(newState2.venduti).toEqual(oldState.venduti)
    expect(newState2.incasso).toEqual(oldState.incasso)
})

test('verifica deselezione di tutto', () => {
    const oldState = {
        venduti: [],
        cart: [{seatID:"A1", price: 8.0}, {seatID:"A2", price: 6.4}],
        incasso: 0.0
    }
    const newState1 = reducer(oldState, unselectAll())
    expect(newState1.cart).toEqual([])
    expect(newState1.venduti).toEqual(oldState.venduti)
    expect(newState1.incasso).toEqual(oldState.incasso)
    const newState2 = reducer(oldState, unselectAll())
    expect(newState2.cart).toEqual([])
    expect(newState2.venduti).toEqual(oldState.venduti)
    expect(newState2.incasso).toEqual(oldState.incasso)
})

test('verifica vendita', () => {
    const oldState = {
        venduti: [],
        cart: [{seatID:"A1", price: 8.0}, {seatID:"A2", price: 6.4}],
        incasso: 0.0
    }
    const newState1 = reducer(oldState, sell())
    console.log(newState1);
    expect(newState1.cart).toEqual([])
    expect(newState1.venduti).toEqual([{seatID:"A1", price: 8.0}, {seatID:"A2", price: 6.4}])
    expect(newState1.incasso).toEqual(6.4+8)
    const newState2 = reducer(oldState, sell())
    console.log(newState2);
    expect(newState2.cart).toEqual([])
    expect(newState2.venduti).toEqual([{seatID:"A1", price: 8.0}, {seatID:"A2", price: 6.4}])
    expect(newState2.incasso).toEqual(6.4+8)
})