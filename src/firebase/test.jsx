import { useEffect, useState } from "react";
import "./styles.css";
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

export default function App() {
  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState(null);

  // useEffect(() => {
  // // TRAIGO UN SOLO DOCUMENTO🚀
  //   const db = getFirestore();

  //   const monoPatinRef = doc(db, "items", "EJtFf0rn6V1LnHoDtEd5");
  //   getDoc(monoPatinRef).then((snapshot) => {
  //     if (snapshot.exists()) {
  //       setProduct({ ...snapshot.data(), id: snapshot.id });
  //     }
  //   });
  // }, []);

  useEffect(() => {
    // TRAIGO TODOS LOS DOCUMENTOS DE UNA COLECCION🚀
    const db = getFirestore();

    const itemsCollectionRef = collection(db, "items");
    const q = query(
      itemsCollectionRef,
      // where("category", "==", "transport"),
      where("price", ">", 10)
    );

    getDocs(q).then((snapshot) => {
      setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, []);

  return (
    <ul>
      <li>
        Bueeeenas
        <span role="img" aria-label="Emoji">
          👋
        </span>
      </li>
      {product && (
        <li>
          Producto: {product.name} - Precio: {product.price}
        </li>
      )}
      {products &&
        products.map((product) => (
          <li key={product.id}>
            Producto: {product.name} - Precio: {product.price}
          </li>
        ))}
    </ul>
  );
}
