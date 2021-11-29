import React, { useContext } from 'react'
import {DataContext} from "../../context/dataprovider";
import swal from 'sweetalert'

export const Carrito = () => {
    const value = useContext(DataContext)
    const [menu, setMenu] = value.menu
    const [carrito, setCarrito] = value.carrito;
    const [total] = value.total;
        

    const tooglefalse = () => {
        setMenu(false);
    }
    const show1 = menu ? "carritos show" : "carritos";
    const show2 = menu ? "carrito show" : "carrito";

    
    const resta = id =>{
        carrito.forEach(item =>{
            if(item.id === id){
                item.cantidad === 1 ? item.cantidad = 1: item.cantidad -=1;
            }
            setCarrito([...carrito])
        })
    }

    const suma = id =>{
        carrito.forEach(item =>{
            if(item.id===id){
                item.cantidad === item.stock ? item.cantidad = item.stock: item.cantidad +=1 ;
            }
            setCarrito([...carrito])
        })
    }
    
    const onAdd = id =>{
        swal({
            title: "¿Quieres eliminar el producto",
            icon: "warning",
            buttons: ["No", "Si"]
        }).then(respuesta=>{
            if(respuesta){
                carrito.forEach((item, index) =>{
                    if(item.id===id){
                    item.cantidad = 1;
                    carrito.splice(index, 1)                               
                    }
                })
                setCarrito([...carrito])
                swal({text: "El articulo se ha borrado exitosamente",
                        icons: "sucess"})
            }

        })
        }

    return(
        <div className={show1}>
            <div className={show2}>
                <div className="carrito__close" onClick={tooglefalse}>
                    <box-icon name="x"></box-icon>
                </div>
                <h2>Su carrito</h2>
             
            <div className="carrito__center">
            {
            
                carrito.length === 0 ? <h2 style={{
                    textAlign: "center", fontSize: "3rem"
                }}>Carrito vacio</h2> : <>
            {
                carrito.map((producto)=>(    
                    <div className="carrito__item" key={producto.id}>
                        <img src={producto.image.default} alt="" />                    
                    <div>  
                        <h3>{producto.title}</h3>
                        <p className="price">${producto.price}</p>
                    </div>
                    <div>
                        <box-icon name="up-arrow" type="solid" onClick={() => suma(producto.id)}></box-icon>
                        <p className="cantidad">{producto.cantidad}</p>
                        <box-icon name="down-arrow" type="solid" onClick={() => resta(producto.id)}></box-icon>
                    </div>
                    <div className="remove__item" onClick={() => onAdd(producto.id)}>
                        <box-icon name="trash"></box-icon>
                    </div>
                    </div>
               
            ))
        }
        </>
        }
        </div>
            <div className="carrito__footer">
                <h3>Total a pagar: ${total}</h3>
                <button className="btn">Realizar pago</button>
            </div>
        </div>
        </div>
    
    )
}
        
   