import React, {useContext} from "react";
import { useParams } from "react-router-dom";
import Data from '../../context/data';
import { DataContext } from "../../context/dataprovider";
import { ProductoItem } from "./itemListContainer";

export const Category = () => {
  const { categoryId } = useParams();
  const value = useContext(DataContext);
  const [productos] = value.productos

  console.log(categoryId);

  return<>
  <h1 className="title">Productos</h1>
  <div className="productos">
      {
          productos.map(producto =>(
              <ProductoItem 
                  key={producto.id}
                  id={producto.id}
                  title={producto.title}
                  price={producto.price}
                  image={producto.image}
                  category={producto.category}
                  cantidad={producto.cantidad}
                  stock={producto.stock}		
              />
          ))}                       
  </div>        
  </>;
};