import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { deleteUser, listUsers, logout } from "../actions/userActions";
import Loader from "../components/loader";
import Message from "../components/message";
import { Table } from "antd";

interface interfaceProps {
  history: any;
  loading: any;
}
const UserList = (props: interfaceProps) => {
  const { history } = props;

  const dispatch = useDispatch();
  const userList = useSelector((state: any) => state.userList);
  const { loading, error, users } = userList;

  const userLogin = useSelector((state: any) => state.userLogin);
  const { userInfo } = userLogin;

  const userDelete = useSelector((state: any) => state.userDelete);
  const { success: successDelete } = userDelete;

  const deleteHandler = (id: any) => {
    if (userInfo && userInfo.isAdmin) {
      if (window.confirm("Are you sure")) {
        dispatch(deleteUser(id));
        dispatch(logout());
      }
    } else {
      if (window.confirm("Are you sure")) {
        dispatch(deleteUser(id));
      }
    }
  };

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listUsers());
    } else {
      history.push("/login");
    }
  }, [dispatch, history, userInfo, successDelete]);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "NAME",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "EMAIL",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "ADMIN",
      dataIndex: "admin",
      key: "admin",
    },
    {
      title: "ACTION",
      dataIndex: "action",
      key: "action",
      render: (index: any, record: any) => {
        return (
          <>
            <LinkContainer to={`/admin/user/${record.id}/edit`}>
              <Button variant="light" className="btn-sm">
                <i className="fas fa-edit"></i>
              </Button>
            </LinkContainer>
            <Button
              variant="danger"
              className="btn-sm"
              onClick={() => deleteHandler(record.id)}
            >
              <i className="fas fa-trash"></i>
            </Button>
          </>
        );
      },
    },
  ];

  const renderStyleAdminGreen = () => {
    return <i className="fas fa-check" style={{ color: "green" }}></i>;
  };

  const renderStyleAdminRed = () => {
    return <i className="fas fa-times" style={{ color: "red" }}></i>;
  };

  const dataSource = () => {
    return users?.map((user: any) => ({
      id: user._id,
      name: user.name,
      email: user.email,
      admin: user.isAdmin ? renderStyleAdminGreen() : renderStyleAdminRed(),
    }));
  };

  return (
    <>
      <h2>User List</h2>
      <Link to="/">Go Back</Link>
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

export default UserList;
