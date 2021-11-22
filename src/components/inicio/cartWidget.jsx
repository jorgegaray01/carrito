import React from "react";
import Portada from "../../images/inicio.jpg";
import {Link} from "react-router-dom"

export const Inicio = () => {
    return(
        <div className="inicio">            
            <Link to="/products" >
                <h1>Productos</h1>
            </Link>
            <p>Bienvenidos a la armeria <b>JAGR</b> lugar especializado en venta de armas de entretenimiento con CO2.</p>
            <img src={Portada} alt="inicio" />         
        </div>
    )
}