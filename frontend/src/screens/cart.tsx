import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import Message from "../components/message";
import { addToCart, removeFromCart } from "../actions/cartActions";

interface interfaceProps {
  match: any;
  location: any;
  history: any
}

const CartScreen = (props: interfaceProps) => {
  const { match, location, history } = props;
  const productId = match.params.id;

  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();

  const cart = useSelector((state: any) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const handleQty = (a: any) => {
    const result = [];
    for (let i = 1; i !== a + 1; ++i) result.push(i);
    return result.map((x, index) => (
      <option key={index} value={x}>
        {x}
      </option>
    ));
  };

  const removeFormCart = (id: any) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    history.push('/login?redirect=shipping');
  }

  return (
    <>
      <Row>
        <Col md={8}>
          <h2 style={{ paddingBottom: "20px" }}>Giỏ Hàng</h2>
          {cartItems.length === 0 ? (
            <Message>
              Your cart is empty <Link to="/">Go Back</Link>
            </Message>
          ) : (
            <ListGroup variant="flush">
              {cartItems.map((item: any) => (
                <ListGroup.Item key={item.product}>
                  <Row style={{ paddingTop: "10px" }}>
                    <Col md={2}>
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Col>
                    <Col md={3}>
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                    </Col>
                    <Col md={2}>${item.price}</Col>
                    <Col md={2}>
                      <Form>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          value={item.qty}
                          onChange={(e: any) =>
                            dispatch(
                              addToCart(item.product, Number(e.target.value))
                            )
                          }
                        >
                          {handleQty(item.countInStock)}
                        </select>
                      </Form>
                    </Col>
                    <Col md={2}>
                      <Button
                        type="button"
                        variant="light"
                        onClick={() => removeFormCart(item.product)}
                      >
                        <i className="fas fa-trash"></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>
                  Tổng{" "}
                  {cartItems.reduce(
                    (acc: number, item: any) => acc + item.qty,
                    0
                  )}{" "}
                  sản phẩm
                </h3>
                $
                {cartItems
                  .reduce(
                    (acc: number, item: any) => acc + item.qty * item.price,
                    0
                  )
                  .toFixed(2)}
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  type="button"
                  className="btn-block"
                  disabled={cartItems.length === 0}
                  onClick={checkoutHandler}
                >
                  Thanh toán
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default CartScreen;
