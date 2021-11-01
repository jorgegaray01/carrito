import { blueGrey, green, yellow } from '@mui/material/colors';
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
            color: "blue"
            }}><span><h1>{this.state.name}</h1></span>
            </div>;
            }
        }
  
  export default Catalogo;  