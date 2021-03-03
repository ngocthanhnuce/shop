import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../components/product";
import Message from "../components/message";
import Loader from "../components/loader";
import { listProducts } from "../actions/productActions";
import ProductCarousel from "../components/carousel";
import { Link } from "react-router-dom";
import Meta from "../components/meta";
// @ts-ignore
import MessengerCustomerChat from "react-messenger-customer-chat";

interface interfaceProps {
  products: Array<any>;
  error: string;
  loading: any;
  match: any;
}

const Home = (props: interfaceProps) => {
  const dispatch = useDispatch();
  const { match } = props;
  const keyword = match.params.keyword;

  const productList = useSelector((state: any) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [dispatch, keyword]);

  return (
    <>
      <Meta />
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to="/" className="btn btn-light">
          Go Back
        </Link>
      )}
      <h3 style={{ paddingTop: "20px" }}>Latest Products</h3>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product: any, index: number) => (
            <Col sm={12} md={6} lg={4} xl={3} key={index}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
      <MessengerCustomerChat
        pageId="105148294795027"
        appId="485577429489210"
        // htmlRef="<REF_STRING>"
      />
    </>
  );
};

export default Home;
