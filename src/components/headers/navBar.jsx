import React, {useContext} from "react"
import Logo from "../../images/Logo.jpg";
import {Link} from "react-router-dom";
import { NavLink } from "react-router-dom";
import {DataContext} from "../../context/dataprovider";
import Menu from '../products/itemListContainer';

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
                    <NavLink className="navParrafo" activeClassName="Active" exact to={'/'}>Inicio</NavLink>
                </li>
                <li className="nav">
                    <NavLink className="navParrafo" activeClassName="active" to={'/products'} >Pistolas</NavLink>
                </li>
                <li className="nav">
                    <NavLink className="navParrafo" activeClassName="Active" to={'/products/category/Revolver'}>Revolver</NavLink>
                </li>                                                
            </ul>
                <div className="cart" onClick={toogleMenu}>
                    <box-icon name="cart"></box-icon>
                    <span className="item__total">{carrito.length}</span>
                </div>            
        </header>
    )
}