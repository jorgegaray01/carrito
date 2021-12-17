import ItemList from './ItemList';



import { useParams } from 'react-router';

/*import { useParams } from "react-router-dom";

export const Category = () => {
  const { categoryId } = useParams();

  console.log(categoryId);

  return <h1>Soy la categoria {categoryId}</h1>;
};*/

const ItemListContainer = () =>{




    return (
        
        <ItemList  filter={useParams}/>
      
    )
  }
  
  export default  ItemListContainer;