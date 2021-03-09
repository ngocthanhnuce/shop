import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/message";
import Loader from "../components/loader";
import { getUserDetails, updateUserProfile } from "../actions/userActions";
// import { listMyOrders } from '../actions/orderActions'
import { USER_UPDATE_PROFILE_RESET } from "../constants/userConstants";
import { listMyOrders } from "../actions/orderActions";
import { LinkContainer } from "react-router-bootstrap";
import { Table } from "antd";

interface interfaceProps {
  history: any;
  location: any;
  loading: any;
}

const ProfileScreen = (props: interfaceProps) => {
  const { history } = props;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const userDetails = useSelector((state: any) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state: any) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector(
    (state: any) => state.userUpdateProfile
  );
  const { success } = userUpdateProfile;

  const orderListMy = useSelector((state: any) => state.orderListMy);
  const { loading: loadingOrders, error: errorOrders, orders } = orderListMy;

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      if (!user || !user.name || success) {
        dispatch({ type: USER_UPDATE_PROFILE_RESET });
        dispatch(getUserDetails("profile"));
        dispatch(listMyOrders());
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [dispatch, history, userInfo, user, success]);

  const submitHandler = (e: any) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(updateUserProfile({ id: user._id, name, email, password }));
    }
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "DATE",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "TOTAL",
      dataIndex: "total",
      key: "total",
    },
    {
      title: "PAID",
      dataIndex: "paid",
      key: "paid",
    },
    {
      title: "DELIVERED",
      dataIndex: "delivered",
      key: "delivered",
    },
    {
      title: "ACTION",
      dataIndex: "action",
      key: "action",
      render: (index: any, record: any) => {
        return (
          <div>
            <LinkContainer to={`/order/${record.id}`}>
              <Button className="btn-sm" variant="light">
                Details
              </Button>
            </LinkContainer>
          </div>
        );
      },
    },
  ];
  const renderStyleTime = () => {
    return <i className="fas fa-times" style={{ color: "red" }}></i>;
  };
  const dataSource = () => {
    return orders?.map((order: any) => ({
      id: order._id,
      date: order.createdAt.substring(0, 10),
      total: order.totalPrice,
      paid: order.isPaid ? order.paidAt.substring(0, 10) : renderStyleTime(),
      delivered: order.isDelivered
        ? order.deliveredAt.substring(0, 10)
        : renderStyleTime(),
    }));
  };

  return (
    <Row>
      <Col md={3}>
        <h2>User Profile</h2>
        {message && <Message variant="danger">{message}</Message>}
        {}
        {success && <Message variant="success">Profile Updated</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button type="submit" variant="primary">
              Update
            </Button>
          </Form>
        )}
      </Col>
      <Col md={9}>
        <h2>My Orders</h2>
        {loadingOrders ? (
          <Loader />
        ) : errorOrders ? (
          <Message variant="danger">{errorOrders}</Message>
        ) : (
          <Table columns={columns} dataSource={dataSource()} />
        )}
      </Col>
    </Row>
  );
};

export default ProfileScreen;
