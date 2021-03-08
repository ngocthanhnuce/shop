import React from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./screens/home";
import ProductScreen from "./screens/product";
import CartScreen from "./screens/cart";
import LoginScreen from "./screens/login";
import RegisterScreen from "./screens/register";
import ProfileScreen from "./screens/profile";
import ShippingScreen from "./screens/shipping";
import PaymentScreen from "./screens/payment";
import PlaceOrder from "./screens/placeOrder";
import OrderScreen from "./screens/order";
import UserList from "./screens/userList";
import UserEdit from "./screens/userEdit";
import ProductList from "./screens/productList";
import 'antd/dist/antd.css';
import ProductEdit from "./screens/productEdit";
import OrderList from "./screens/orderList";
// @ts-ignore
import MessengerCustomerChat from "react-messenger-customer-chat";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main className="py-3" style={{minHeight: '100vh'}}>
          <Container>
            <Route path="/order/:id" component={OrderScreen} exact />
            <Route path="/shipping" component={ShippingScreen} exact />
            <Route path="/payment" component={PaymentScreen} exact />
            <Route path="/placeorder" component={PlaceOrder} exact />
            <Route path="/login" component={LoginScreen} exact />
            <Route path="/register" component={RegisterScreen} exact />
            <Route path="/profile" component={ProfileScreen} exact />
            <Route path="/" component={Home} exact />
            <Route path="/product/:id" component={ProductScreen} exact />
            <Route path="/cart/:id?" component={CartScreen} exact />
            <Route path="/admin/userlist" component={UserList} exact />
            <Route path="/admin/user/:id/edit" component={UserEdit} exact />
            <Route path="/admin/productlist" component={ProductList} exact />
            <Route path='/admin/product/:id/edit' component={ProductEdit} />
            <Route path="/admin/orderlist" component={OrderList} exact />
            <Route path='/search/:keyword' component={Home} />
          </Container>
        </main>
        <Footer />
      </Router>
      <MessengerCustomerChat
        pageId="105148294795027"
        appId="485577429489210"
        // htmlRef="<REF_STRING>"
      />
    </div>
  );
}

export default App;
