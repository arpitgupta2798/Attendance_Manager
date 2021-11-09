import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/adminLogin.css";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const UserLogin = () => {
  useEffect(() => {
    document.title = "User Login";
  }, []);

  const history = useHistory();
  const [user, setUser] = useState({});

  const handleUserForm = (e) => {
    postDataToServer(user);
    e.preventDefault();
  };
  var msg = "";
  const notify = () => toast(msg);
  const postDataToServer = (user) => {
    axios.post(`http://localhost:8080/user/login`, user).then(
      (response) => {
        if (response.data === true) {
          console.log("Logged In Successfully." + user.username);
          console.log(response.data);
          msg = "User Logged In Successfully.";
          notify();
          history.push(`/show-attendances/${user.username}`);
        } else {
          console.log("Wrong Credentials");
          // history.push("/wrong-credentials");
          msg = "Wrong Credentials";
          notify();
          console.log(response.data);
        }
      },
      (error) => {
        console.log("Something went wrong.");
        console.log(error.data);
      }
    );
  };

  return (
    // <Container>
    <div>
      <h1>User Login</h1>
      <form onSubmit={handleUserForm}>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={(e) => {
              setUser({ ...user, username: e.target.value });
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
              setUser({ ...user, password: e.target.value });
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

export default UserLogin;
