import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/dataprovider";

export const ProductoItem = ({
    id,
    title,
    price,
    image,
    category,
    stock
}) => {

    const value = useContext(DataContext);
    const addCarrito = value.addCarrito

    return (
        
            <div className="producto">
            <Link to={`/products/${id}`}>
                <div className="producto__img">
                    <img src={image.default} alt={title} />
                </div>
            </Link>
            <div className="producto__footer">
                <h1>{title}</h1>
                <p>{category}</p>
                <p className="price">${price}</p>
                <p>Stock: {stock} unidades</p>
            </div>
            <div className="bottom">
                <button className="btn" onClick={() => addCarrito(id)}>
                    Añadir al carrito
                </button>
                <div>
                    <Link to={`/products/${id}`} className="btn">
                        Ver imagen
                    </Link>
                </div>
            </div>
            </div>                 
    )
}