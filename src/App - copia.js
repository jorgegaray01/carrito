import React, {useState} from 'react';
import './App.css';
import NavBar from './components/navbar/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Navbar} from 'reactstrap';

function App() {
  const [dropdown, setDropdown]=useState(false);

  const abrirCerrarDropdown=()=>{
    setDropdown(!dropdown);
  }
  return (
    <div className="App">
      
      <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown}>
      <NavBar/>
        <DropdownToggle>
          1
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>2</DropdownItem>
          <DropdownItem>3</DropdownItem>
          <DropdownItem>4</DropdownItem>
        </DropdownMenu>        
      </Dropdown>
      
    </div>
  );
}

export default App;