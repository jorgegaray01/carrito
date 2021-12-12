import React, {useContext} from "react"
import Logo from "../../images/Logo.jpg";
import {Link} from "react-router-dom"
import {DataContext} from "../../context/dataprovider"

export const Header = () => {
    const value = useContext(DataContext);
    const [menu, setMenu] = value.menu;
    const [carrito] = value.carrito;    
    
    const toogleMenu = () =>{
        setMenu(!menu)
    }

    return (
        <header>            
            <Link to="/">
                <div className="logo">
                    <img src={Logo} alt="logo" width="110"/>
                </div>
            </Link>
            <ul>
                <li className="nav">
                    <Link to="/"><h2 className="navParrafo">Inicio</h2></Link>
                </li>
                <li className="nav">
                    <Link to="/products"><h2 className="navParrafo">Productos</h2></Link>
                </li>                                
            </ul>
                <div className="cart" onClick={toogleMenu}>
                    <box-icon name="cart"></box-icon>
                    <span className="item__total">{carrito.length}</span>
                </div>            
        </header>
    )
}