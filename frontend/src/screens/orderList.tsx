import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listOrders } from "../actions/orderActions";
import Loader from "../components/loader";
import Message from "../components/message";
import { Table } from "antd";

interface interfaceProps {
  history: any;
}
const OrderList = (props: interfaceProps) => {
  const { history } = props;
  const dispatch = useDispatch();

  const orderList = useSelector((state: any) => state.orderList);
  const { loading, error, orders } = orderList;

  const userLogin = useSelector((state: any) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listOrders());
    } else {
      history.push("/login");
    }
  }, [dispatch, history, userInfo]);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "1",
    },
    {
      title: "USER",
      dataIndex: "user",
      key: "2",
    },
    {
      title: "DATE",
      dataIndex: "date",
      key: "3",
    },
    {
      title: "TOTAL",
      dataIndex: "total",
      key: "4",
    },
    {
      title: "PAID",
      dataIndex: "paid",
      key: "5",
    },
    {
      title: "DELIVERED",
      dataIndex: "delivered",
      key: "6",
    },
    {
      title: "ACTION",
      dataIndex: "action",
      key: "7",
      render: (index: any, record: any) => {
        return (
          <div>
            <LinkContainer to={`/order/${record.id}`}>
              <Button variant="light" className="btn-sm">
                Details
              </Button>
            </LinkContainer>
          </div>
        );
      },
    },
  ];
  const renderStyleTime = () => {
    return (
      <i className="fas fa-times" style={{ color: "red" }}></i>
    )
  }
  const dataSource = () => {
    return orders?.map((order: any) => ({
      id: order._id,
      user: order.user && order.user.name,
      date: order.createdAt.substring(0, 10),
      total: `${order.totalPrice}$`,
      paid: order.isPaid ? order.paidAt.substring(0, 10) : renderStyleTime(),
      delivered: order.isDelivered ? order.deliveredAt.substring(0, 10) : renderStyleTime()
    }));
  };

  return (
    <>
      <h1>Order List</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Table columns={columns} dataSource={dataSource()} />
      )}
    </>
  );
};

export default OrderList;
