import React, { useState, useEffect, createContext } from "react";
import Data from './data';
import swal from 'sweetalert'
import {
    collection,
    doc,
    getDoc,
    getDocs,
    limit,
    getFirestore,
    query,
    where
} from "firebase/firestore";

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [producto, setProducto] = useState([]);
    const [productos, setProductos] = useState([])
    const [menu, setMenu] = useState(false);
    const  [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        
        const db = getFirestore();    
        const itemsCollectionRef = collection(db, "items");
        const q = query(
          itemsCollectionRef,          
        );
    
        getDocs(q).then((snapshot) => {
          setProductos(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        });
      }, []);

    

    useEffect(() =>{
        const producto = Data.items
        if (producto){
            setProductos(producto)
        }else{
            setProductos([])
        }
        
    },[])

    const addCarrito = (id) => {
        const check = carrito.every(item =>{
            return item.id !== id;
        })
        if(check){
            const data = productos.filter(producto => {
                return producto.id === id
            })
            setCarrito([...carrito, ...data])
        }else {
            swal({
                title: "Se ha añadido el producto al carrito",
                icon: "warning",
                buttons: "Aceptar"
            })
        }
    }

    useEffect(() => {
        const dataCarrito=JSON.parse(localStorage.getItem('dataCarrito')
        )
        if(dataCarrito){
            setCarrito(dataCarrito)
        }
    }, [])

    useEffect(() =>{
        localStorage.setItem('dataCarrito', JSON.stringify(carrito))
    },[carrito])

    useEffect(() =>{
        const getTotal = () =>{
            const res = carrito.reduce((prev, item) => {
                return prev + (item.price*item.cantidad);
            }, 0)
            setTotal(res)
        }
        getTotal()
    },[carrito])

    const value = {
        productos : [productos],
        menu: [menu, setMenu],
        addCarrito: addCarrito,
        carrito: [carrito, setCarrito],
        total: [total, setTotal]
    }

    return (
        <DataContext.Provider value = {value}>
        {props.children}
        </DataContext.Provider>
    )
}