import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { getAllProducts } from "../features/products/productListSlice";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);

  const { isLoading, isError, products, message } = productList;

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  /* note that the products imported is being used as a VARIABLE and not a
        component, as products.js doesn't contain an import or export
        statement, that's why we can map on it without using props as we would
        have done with a component */
  return (
    <>
      <h1>Latest Products</h1>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Message variant="danger"> {message} </Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
