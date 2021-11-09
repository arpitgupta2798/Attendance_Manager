import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/adminLogin.css";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminLogin = () => {
  useEffect(() => {
    document.title = "Admin Login";
  }, []);
  const history = useHistory();
  const [admin, setAdmin] = useState({});
  var msg = "";
  const handleAdminForm = (e) => {
    postDataToServer(admin);
    e.preventDefault();
  };

  const notify = () => toast(msg);

  const postDataToServer = (data) => {
    axios.post(`http://localhost:8080/admin/login`, data).then(
      (response) => {
        if (response.data === true) {
          console.log("Logged In Successfully.");
          msg = "Admin Logged In Successfully.";
          notify();
          history.push("/show-users");
        } else {
          console.log("Wrong Credentials");
          msg = "Wrong! Credentials";
          notify();
        }
      },
      (error) => {
        console.log("Something went wrong.");
      }
    );
  };

  return (
    // <Container>
    <div>
      <h1>Admin Login</h1>
      <form onSubmit={handleAdminForm}>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={(e) => {
              setAdmin({ ...admin, username: e.target.value });
            }}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={(e) => {
              setAdmin({ ...admin, password: e.target.value });
            }}
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
    // </Container>
  );
};

export default AdminLogin;
