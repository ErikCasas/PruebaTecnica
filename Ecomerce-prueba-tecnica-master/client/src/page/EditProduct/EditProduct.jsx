import React, { useEffect, useState } from "react";
import useAuth from "../../auth/useAuth";
import CartProductadmin from "../../components/cartProductAdmin/CartProductadmin";
import Loader from "../../components/loader/Loader";
import { AuxConatiner, Container } from "./EditProductInfoStyles";



/**
 * En este componente se da una previsualización de la info a detalle de cada producto, 
 * desde donde se puede tener una mejor idea de que producto se desea borrar o editar
 * dando facilidad de borrar el producto sin necesidad de entrar a otra pagina o componente, se 
 * maneja un useEffect para el montaje inicial y un segundo componente que se encarga de actualizar
 * los productos mostrados en caso de algun cambio.
 * Se utiliza el metodo map para rederizar cada uno de los objetos que se encuentran en el array del estado 
 * global 
 */
const EditProduct = () => {
  const [products, setProducts] = useState(6);

  const { allProducts, setLoading, getAllProducts, loading, change } = useAuth();
  const { data } = allProducts;

  // console.log({ data });

  const moreProducts = () => {
    setProducts(products + 4);
  };

  useEffect(() => {
    setLoading(true);
    getAllProducts();
  }, []);

  useEffect(() => {
    getAllProducts();
  }, [change]);

  const info = data?.slice(0, products);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Container>
            {info?.map((el) => {
              return (
                <CartProductadmin
                  key={el._id}
                  imgURL={el.image ? el.image.secure_url : null}
                  id={el._id}
                  name={el.name}
                  description={el.description}
                  price={el.price}
                />
              );
            })}
          </Container>
          <AuxConatiner>
            <button
              onClick={moreProducts}
              type="button"
              className="btn btn-info"
            >
              {products <= data?.length ? "load more" : "No more (⩾﹏⩽)"}
            </button>
          </AuxConatiner>
        </>
      )}
    </>
  );
};

export default EditProduct;

