import { blueGrey, green, yellow } from '@mui/material/colors';
import { border, borderRadius, color } from '@mui/system';
import { Component } from 'react';

class Catalogo extends Component{
    constructor(props) {
      super(props)
      this.state = {
          name: 'Catalogo'
       }
    }    
     
    render(){
        return <div style={{
            padding: 10,
            textAlign: "center",            
            color: "blue",
            borderRadius: "3",
            background: "#D0CCCC"
            }}><span><h1>{this.state.name}</h1></span>
            </div>;
            }
        }
  
  export default Catalogo;  