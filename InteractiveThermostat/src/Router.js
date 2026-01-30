import {BrowserRouter, Link, Route} from "react-router-dom";
import {Switch} from 'react-router';
import HomePage from "./HomePage";
import ControlPanel from "./ControlPanel";
import {useState} from "react";
import Grafico from "./Grafico";

function Router(){
    return(

        <BrowserRouter>
            <Switch>
                <Route path={"/ControlPanel"}><ControlPanel/></Route>
                <Route path={"/"}><HomePage/></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;