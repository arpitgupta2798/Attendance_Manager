import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";

import { Container, Row, Col } from "reactstrap";
import Header from "./components/Header";
import Menus from "./components/LeftMenuBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AdminLogin from "./components/AdminLogin";
import UserLogin from "./components/UserLogin";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import WrongCredentials from "./components/WrongCredentials";
import ShowUsers from "./components/ShowUsers";
import ShowAttendances from "./components/ShowAttendances";
import AddUser from "./components/AddUser";
import { ToastContainer, toast } from "react-toastify";
import TakeAttendance from "./components/TakeAttendance";

function App() {
  return (
    <div className="border">
      <ToastContainer />
      <Router>
        <Container className="cont1">
          <Header />
          <Row className="text-center">
            <Col md={4}>
              <Menus />
            </Col>
            <Col md={8}>
              <div className="contantBox">
                <Route path="/" component={Home} exact />
                <Route path="/admin-login" component={AdminLogin} exact />
                <Route path="/user-login" component={UserLogin} exact />
                <Route path="/about-us" component={AboutUs} exact />
                <Route path="/contact-us" component={ContactUs} exact />
                <Route path="/show-users" component={ShowUsers} exact />
                <Route path="/add-user" component={AddUser} exact />
                <Route
                  path="/show-attendances/:email"
                  component={ShowAttendances}
                  exact
                />
                <Route
                  path="/wrong-credentials"
                  component={WrongCredentials}
                  exact
                />
                <Route
                  path="/take-attendance"
                  component={TakeAttendance}
                  exact
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
