import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Row, Col, ListGroup, Image, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import CheckoutSteps from "../components/CheckoutSteps";
<<<<<<< HEAD
import { createOrder } from "../features/order/orderService";
=======
import { createOrder } from "../actions/orderActions";
>>>>>>> d0ffcea2e62ba39ef42a103ae0dee267802e1599

const PlaceOrderScreen = ({ history }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

<<<<<<< HEAD
  const newCart = { ...cart };

  // Calculate prices
=======
  //   Calculate prices
>>>>>>> d0ffcea2e62ba39ef42a103ae0dee267802e1599
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

<<<<<<< HEAD
  newCart.itemsPrice = addDecimals(
    newCart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );

  newCart.shippingPrice = addDecimals(newCart.itemsPrice > 100 ? 0 : 100);
  newCart.taxPrice = addDecimals(
    Number((0.15 * newCart.itemsPrice).toFixed(2))
  );
  newCart.totalPrice = (
    Number(newCart.itemsPrice) +
    Number(newCart.shippingPrice) +
    Number(newCart.taxPrice)
=======
  cart.itemsPrice = addDecimals(
    cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );

  cart.shippingPrice = addDecimals(cart.itemsPrice > 100 ? 0 : 100);
  cart.taxPrice = addDecimals(Number((0.15 * cart.itemsPrice).toFixed(2)));
  cart.totalPrice = (
    Number(cart.itemsPrice) +
    Number(cart.shippingPrice) +
    Number(cart.taxPrice)
>>>>>>> d0ffcea2e62ba39ef42a103ae0dee267802e1599
  ).toFixed(2);

  const orderCreate = useSelector((state) => state.orderCreate);
  const { order, success, error } = orderCreate;

  useEffect(() => {
    if (success) {
      history.push(`/order/${order._id}`);
<<<<<<< HEAD
    } else return error;
    // eslint-disable-next-line
  }, [history, success]);

  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: newCart.cartItems,
        shippingAddress: newCart.shippingAddress,
        paymentMethod: newCart.paymentMethod,
        itemsPrice: newCart.itemsPrice,
        shippingPrice: newCart.shippingPrice,
        taxPrice: newCart.taxPrice,
        totalPrice: newCart.totalPrice,
=======
    }
    // eslint-disable-next-line
  }, [history, success]);

  const placeOrderHandler = (e) => {
    e.preventDefault();
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
>>>>>>> d0ffcea2e62ba39ef42a103ae0dee267802e1599
      })
    );
  };

  return (
    <>
      <CheckoutSteps step1 step2 step3 step4 />
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>shipping</h2>
              <p>
                <strong>Address</strong>
<<<<<<< HEAD
                {newCart.shippingAddress.address},{" "}
                {newCart.shippingAddress.city},{" "}
                {newCart.shippingAddress.postalCode},{" "}
                {newCart.shippingAddress.country}
=======
                {cart.shippingAddress.address}, {cart.shippingAddress.city},{" "}
                {cart.shippingAddress.postalCode},{" "}
                {cart.shippingAddress.country}
>>>>>>> d0ffcea2e62ba39ef42a103ae0dee267802e1599
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Payment Method</h2>
              <strong>Method: </strong>
<<<<<<< HEAD
              {newCart.paymentMethod}
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Order Items</h2>
              {newCart.cartItems.Length === 0 ? (
                <Message>Your Cart is empty</Message>
              ) : (
                <ListGroup variant="flush">
                  {newCart.cartItems.map((item, index) => (
=======
              {cart.paymentMethod}
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Order Items</h2>
              {cart.cartItems.Length === 0 ? (
                <Message>Your Cart is empty</Message>
              ) : (
                <ListGroup variant="flush">
                  {cart.cartItems.map((item, index) => (
>>>>>>> d0ffcea2e62ba39ef42a103ae0dee267802e1599
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col>
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={4}>
                          {item.qty} x ${item.price} = ${item.qty * item.price}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
<<<<<<< HEAD
                  <Col>${newCart.itemsPrice}</Col>
=======
                  <Col>${cart.itemsPrice}</Col>
>>>>>>> d0ffcea2e62ba39ef42a103ae0dee267802e1599
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Shipping</Col>
<<<<<<< HEAD
                  <Col>${newCart.shippingPrice}</Col>
=======
                  <Col>${cart.shippingPrice}</Col>
>>>>>>> d0ffcea2e62ba39ef42a103ae0dee267802e1599
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
<<<<<<< HEAD
                  <Col>${newCart.taxPrice}</Col>
=======
                  <Col>${cart.taxPrice}</Col>
>>>>>>> d0ffcea2e62ba39ef42a103ae0dee267802e1599
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
<<<<<<< HEAD
                  <Col>${newCart.totalPrice}</Col>
=======
                  <Col>${cart.totalPrice}</Col>
>>>>>>> d0ffcea2e62ba39ef42a103ae0dee267802e1599
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                {error && <Message variant="danger">{error}</Message>}
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  type="button"
                  className="btn-block"
<<<<<<< HEAD
                  disabled={newCart.cartItems === 0}
=======
                  disabled={cart.cartItems === 0}
>>>>>>> d0ffcea2e62ba39ef42a103ae0dee267802e1599
                  onClick={placeOrderHandler}
                >
                  Place Order
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default PlaceOrderScreen;
