import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import './App.css';
import { NavBar } from "./components/ui/NavBar";
import { InicialScreen } from "./components/inicial/InicialScreen";
import { PrincipalScreen } from "./components/principal/PrincipalScreen";
import { DetalleScreen } from "./components/detalle/DetalleScreen";
import { ActividadScreen } from "./components/actividad/ActividadScreen";
import { AboutScreen } from "./components/about/AboutScreen";

function App() {
  return (
    <Switch>

      <Route exact path="/" component={InicialScreen} />
      
      <Route path="/">
        <NavBar/>
          <Route path="/principal" component={PrincipalScreen} />
          <Route path="/detalle/:idPais" component={DetalleScreen} />
          <Route path="/actividad" component={ActividadScreen} />
          <Route path="/about" component={AboutScreen} />
      </Route>
      
      <Redirect to='/' />

    </Switch>
  );
}

export default App;
