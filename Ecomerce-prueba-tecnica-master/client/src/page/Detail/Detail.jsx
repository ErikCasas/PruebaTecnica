import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../auth/useAuth";
import Loader from "../../components/loader/Loader";
import { Container, Description, Price, Text, Tittle } from "./DetailStyles";

/**
 * Pagina detail
 * 
 * @returns se retorna el esqueleto que recibira las variables del estado global 
 * del detalle de producto, llamando este detalle a traves del su id, que se obtiene 
 * gracias a useParams
 */

const Detail = () => {
  const { detail, getProductDetail, setLoading, loading } = useAuth();

  const { id } = useParams();

  console.log({ detail });

  useEffect(() => {
    setLoading(true);
    getProductDetail(id);
    return () => {};
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (

        <Container className="container-fluid bg-light">
          <Container className="row">
            <div className="col-12">
              <Tittle className="text-center my-3">Product Detail</Tittle>
            </div>
          </Container>

          <Container className="row">
            <div className="col-12 col-md-6">
              <img
                className="img-fluid"
                src={detail?.data.image.secure_url}
                alt={detail?.data.name}
              />
            </div>

            <div className="col-12 col-md-6 g-5">
              <Description className="mb-3">
                Product: {detail?.data.name}
              </Description>
              <Description className="text-secondary">
                Brand:{" "}
                <Text className="font-weight-bold">{detail?.data.brand}</Text>
              </Description>
              <Description className="text-secondary">
                Category:{" "}
                <Text className="font-weight-bold">
                  Category: {detail?.data.category}
                </Text>
              </Description>
              <Description className="text-secondary">
                Description:{" "}
                <Text className="font-weight-bold">
                  {detail?.data.description}
                </Text>
              </Description>
              <Price className="text-danger">
                Price:{" "}
                <Text className="font-weight-bold">${detail?.data.price}</Text>
              </Price>
              <Price className="text-info">
                Stock:{" "}
                <span className="font-weight-bold">{detail?.data.stock}</span>
              </Price>
            </div>
          </Container>
        </Container>
      )}
    </>
  );
};

export default Detail;
