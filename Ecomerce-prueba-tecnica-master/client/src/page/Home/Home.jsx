import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import useAuth from "../../auth/useAuth";
import Loader from "../../components/loader/Loader";
import { AuxConatiner, Container } from "./HomeStyles";

/** Home de la pagina en donde se visualizan los productos y asi se da una idea mas 
 * clara del objetivo de la pagina, mostrando tan solo las cards de los productos 
 * existentes
 */

const Home = () => {
  const { getAllProducts, allProducts, setLoading, loading, change  } = useAuth();

  const [products, setProducts] = useState(8);

  const { data } = allProducts;

  const moreProducts = () => {
    setProducts(products + 4);
  };

  const info = data?.slice(0, products);

  // console.log(data)

  useEffect(() => {
    setLoading(true);
    getAllProducts();
  }, []);

  useEffect(() => {
    setLoading(true);
    getAllProducts();
  }, [change]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Container>
            {info?.map((el) => {
              return (
                <Card
                  key={el._id}
                  id={el._id}
                  name={el.name}
                  price={el.price}
                  imageUrl={el.image ? el.image.secure_url : ""}
                />
              );
            })}
          </Container>
          <AuxConatiner>
            <button
              type="button"
              className="btn btn-info"
              onClick={moreProducts}
            >
              {products <= data?.length ? "load more" : "No more (⩾﹏⩽)"}
            </button>
          </AuxConatiner>
        </>
      )}
    </>
  );
};

export default Home;

//


