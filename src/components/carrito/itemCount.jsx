import React, { useContext, useState } from 'react';
import Data from '../../context/data';
import {DataContext} from "../../context/dataprovider";
import swal from 'sweetalert'
import { addDoc, collection, getFirestore } from "firebase/firestore"

 

export const Carrito = () => {
    const value = useContext(DataContext)
    const [menu, setMenu] = value.menu
    const [carrito, setCarrito] = value.carrito;
    const [total] = value.total;
    const [data_usuario, setData_usuario] = useState();
    const [id, setId] = useState();
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    
    const sendOrder = () => {
    
        const order = {
            buyer:{ 
                name: name,
                surname: surname,
                email: email,
            },
            items: [...carrito],
            total: {total}
        };
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then(({ id }) => {
            console.log(id);
        });
        swal({
            title: "Su pago fue exitoso",
            text: (`Su numero de venta es: ${id}`),
            icon: "success",
            buttons: "Aceptar"
        })
        
    };
        

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
        
        function onNameChange(evt) {
            setName(evt.target.value);
          }
          function onSurnameChange(evt) {
            setSurname(evt.target.value);
          }
          function onEmailChange(evt) {
            setEmail(evt.target.value);
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
                        <img src={producto.image} alt="" />                    
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

        <div><h3>Favor, ingrese sus datos</h3></div>

        <div class="form-group">
            <label style={{ marginRight: 4 }}>Nombre</label>
            <input type="email" class="form-control" id="exampleInputNombre" aria-describedby="nameHelp" placeholder="Enter Nombre" onChange={(evt) => onNameChange(evt)} />
        </div>
        
        
        <div class="form-group">
            <label style={{ marginRight: 4 }}>Apellido</label>
            <input type="email" class="form-control" id="exampleInputApellido" aria-describedby="surnameHelp" placeholder="Enter Apellido" onChange={(evt) => onSurnameChange(evt)} />
        </div>
        
        
        <div class="form-group">
            <label style={{ marginRight: 4 }}>Email</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(evt) => onEmailChange(evt)} />
        </div>

        </div>
            <div className="carrito__footer">
                <h3>Total a pagar: ${total}</h3>                
                <button onClick={sendOrder}className="btn">Realizar pago</button>                             
            </div>
        </div>
        </div>
    
    )
}