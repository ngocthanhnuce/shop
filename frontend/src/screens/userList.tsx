import React, { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { deleteUser, listUsers, logout } from "../actions/userActions";
import Loader from "../components/loader";
import Message from "../components/message";

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

  return (
    <>
      <h2>User List</h2>
      <Link to="/">Go Back</Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm" style={{marginTop: '15px'}}>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>ADMIN</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user: any) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                </td>
                <td>
                  {user.isAdmin ? (
                    <i className="fas fa-check" style={{ color: "green" }}></i>
                  ) : (
                    <i className="fas fa-times" style={{ color: "red" }}></i>
                  )}
                </td>
                <td>
                  <LinkContainer to={`/admin/user/${user._id}/edit`}>
                    <Button variant="light" className="btn-sm">
                      <i className="fas fa-edit"></i>
                    </Button>
                  </LinkContainer>
                  <Button
                    variant="danger"
                    className="btn-sm"
                    onClick={() => deleteHandler(user._id)}
                  >
                    <i className="fas fa-trash"></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default UserList;
