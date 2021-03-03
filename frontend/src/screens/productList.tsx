import React, { useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import {
  createProduct,
  deleteProduct,
  listProducts,
} from "../actions/productActions";
import Loader from "../components/loader";
import Message from "../components/message";
import { Table } from "antd";
import { PRODUCT_CREATE_RESET } from "../constants/productConstants";
import { Link } from "react-router-dom";

interface interfaceProps {
  history: any;
  loading: any;
}
function ProductList(props: interfaceProps) {
  const { history } = props;

  const dispatch = useDispatch();

  const productList = useSelector((state: any) => state.productList);
  const { loading, error, products } = productList;

  const productDelete = useSelector((state: any) => state.productDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = productDelete;

  const productCreate = useSelector((state: any) => state.productCreate);

  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdProduct,
  } = productCreate;

  const userLogin = useSelector((state: any) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch({ type: PRODUCT_CREATE_RESET });

    if (!userInfo || !userInfo.isAdmin) {
      history.push("/login");
    }

    if (successCreate) {
      history.push(`/admin/product/${createdProduct?._id}/edit`);
    } else {
      dispatch(listProducts());
    }
  }, [
    dispatch,
    history,
    successCreate,
    userInfo,
    createdProduct,
    successDelete,
  ]);

  const deleteHandler = (re: any) => {
    if (window.confirm("Are you sure")) {
      dispatch(deleteProduct(re.id));
    }
  };

  const createProductHandler = () => {
    dispatch(createProduct());
  };
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "1",
    },
    {
      title: "NAME",
      dataIndex: "name",
      key: "2",
    },
    {
      title: "PRICE",
      dataIndex: "price",
      key: "3",
    },
    {
      title: "CATEGORY",
      dataIndex: "category",
      key: "4",
    },
    {
      title: "BRAND",
      dataIndex: "brand",
      key: "5",
    },
    {
      title: "ACTION",
      dataIndex: "action",
      key: "6",
      render: (index: any, record: any) => {
        return (
          <div>
            {" "}
            <LinkContainer to={`/admin/product/${record.id}/edit`}>
              <Button variant="light" className="btn-sm">
                <i className="fas fa-edit"></i>
              </Button>
            </LinkContainer>
            <Button
              variant="danger"
              className="btn-sm"
              onClick={() => deleteHandler(record)}
            >
              <i className="fas fa-trash"></i>
            </Button>
          </div>
        );
      },
    },
  ];

  const dataSource = () => {
    return products?.map((product: any) => ({
      id: product._id,
      name: product.name,
      price: `${product.price}$`,
      category: product.category,
      brand: product.brand,
    }));
  };

  return (
    <>
      <Row className="align-items-center">
        <Col style={{ marginBottom: "15px" }}>
          <h1>Product List</h1>
          <Link to="/">Go Back</Link>
        </Col>
        <Col className="text-right">
          <Button className="my-3" onClick={createProductHandler}>
            <i className="fas fa-plus"></i> Create Product
          </Button>
        </Col>
      </Row>
      {loadingDelete && <Loader />}
      {errorDelete && <Message variant="danger">{errorDelete}</Message>}
      {loadingCreate && <Loader />}
      {errorCreate && <Message variant="danger">{errorCreate}</Message>}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div className="table-product">
          <Table columns={columns} dataSource={dataSource()} />
        </div>
      )}
    </>
  );
}

export default ProductList;
