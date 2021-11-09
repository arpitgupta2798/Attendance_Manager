import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddUser = () => {
  useEffect(() => {
    document.title = "Add User";
  }, []);

  var msg = "";
  const [user, setUser] = useState({});

  const handleAddUserForm = (e) => {
    postDataToServer(user);
    e.preventDefault();
  };

  const notify = () => toast(msg);

  const history = useHistory();
  const postDataToServer = (data) => {
    axios.post(`http://localhost:8080/admin/add-user`, data).then(
      (response) => {
        if (response.data === true) {
          console.log("User created successfully.");
          msg = "User created successfully.";
          notify();
          history.push("/show-users");
        }
      },
      (error) => {
        console.log("Something went wrong.");
      }
    );
  };
  return (
    <Container>
      <div>
        <h1>Add New User</h1>
        <form onSubmit={handleAddUserForm}>
          <div class="form-group">
            <label for="exampleInputEmail1">Enter Email address of User</label>
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
              placeholder="Enter Password for the User"
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
    </Container>
  );
};

export default AddUser;
