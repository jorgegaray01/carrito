import React, {useContext} from "react";
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
            <a href="#">
                <div className="producto__img">
                    <img src={image.default} alt={title} />
                </div>
            </a>
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
                    <a href="#" className="btn">
                        Ver Imagen
                    </a>
                </div>
            </div>
            </div>                 
    )
}