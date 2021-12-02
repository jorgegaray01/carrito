import React, {useContext, useEffect, useState} from 'react'
import { DataContext } from "../../context/dataprovider";
import { useParams } from "react-router-dom";
import { ProductoItem } from "./itemListContainer";
import 'bootstrap/dist/css/bootstrap.css';

export const ProductoDetalles = () => {
    const value = useContext(DataContext)
    const [productos] = value.productos;
    const addCarrito = value.addCarrito;
    const [detalle, setDetalle] = useState([])
    const [url, setUrl]= useState(0)
    const [images, setImages] = useState('')
    const params = useParams();
    let item = 0;

    useEffect(() => {
        productos.forEach(producto =>{
            
            if(producto.id === parseInt(params.id)){
                setDetalle(producto)
                setUrl(0)
            }
        })
    },[params.id, productos])

    useEffect(() =>{
        const values = `${detalle.img1}${url}${detalle.img2}`
        setImages(values);
    },[url, params.id])

    const handleInput = e =>{
        const number = e.target.value.toString().padStart(2, '01')
        setUrl(number)

    }

    if(detalle.length < 1) return null;
    

    return (
        <>          
            {
                <div className="detalles">
                    <h2>{detalle.title}</h2>
                    <p className="price">Precio: ${detalle.price}</p>
                    <div className="grid"></div>
                    <button onClick={() =>addCarrito(detalle.id)}>Añadir al carrito</button>
                    {
                    url ? <img src={images} alt={detalle.title}/> : <img src={detalle.image.default} alt={detalle.title}/>
                    }                    
                    <div className="description">
                        <p><b>Descripción:</b> La imagen del producto es solo referencial.</p>
                        <p>Para el uso de esta arma se requiere una capsula de CO2.</p>                        
                    </div>
                </div>
            }
        
            <h2 className="relacionados">Otros productos</h2>
            <br />
            <div className="productos">
                {
                    productos.map((producto) =>{
                        if((item < 3 )&&(detalle.category === producto.category)){
                            item++;
                        return <ProductoItem 
                            key={producto.id}
                            id={producto.id}
                            title={producto.title}
                            price={producto.price}
						    image={producto.image}
						    category={producto.category}
                            cantidad={producto.cantidad}		
                    /> 
                    }               
                })
            }                      
        </div> 

        </>
    )
}