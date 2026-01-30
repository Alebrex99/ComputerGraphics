import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from "./Router";
import {createContext, useReducer} from "react";
import {InitialState, reducer} from "./reducer";

export const StateContext = createContext();
function App() {
  return (
      <StateContext.Provider value={useReducer(reducer, InitialState)}>
        <Router/>
      </StateContext.Provider>

  );
}

export default App;
