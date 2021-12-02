import React from "react";
import Portada from "../../images/inicio.jpg";
import {Link} from "react-router-dom";
import Carousel from '../inicio/Carousel'

export const Inicio = () => {
    return(
        <div className="inicio">            
            <Link to="/products" >
                <h1>Productos</h1>
            </Link>            
            <p>Bienvenidos a la armeria <b>JAGR</b> lugar especializado en venta de armas de entretenimiento con CO2.</p>
            <img src={Portada} alt="inicio" />
            <p>En armeria JAGR encontraras multiples productos y una gran asesoría en tus compras</p>
            <Carousel />                
        </div>
    )
}