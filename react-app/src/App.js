import React from "react";
import Routes from "./routes";
import { GlobalStyle } from "./styles/global"
import "./styles/global";
//import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap/dist/css/bootstrap.css'

const App = () => 
  <React.Fragment>
    <Routes />
    <GlobalStyle/>
  </React.Fragment>


export default App;