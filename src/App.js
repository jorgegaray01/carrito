import React from "react";
import {Header} from './components/headers/navBar';
import 'boxicons';
import { BrowserRouter as Router } from "react-router-dom";
import {Paginas} from './components/pages';
import {DataProvider} from "./context/dataprovider";
import {Carrito} from "./components/carrito/itemCount"

function App() {  
  return (
    <DataProvider>
    <div className="App">
      <Router>   
      <Header />
      <Carrito />
      <Paginas />
      </Router>  
    </div> 
    </DataProvider>      
    
  );
}

export default App;