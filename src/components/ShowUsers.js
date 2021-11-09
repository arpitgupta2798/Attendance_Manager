import React, { useState, useEffect, Fragment } from "react";
import { Container, Table } from "reactstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "../style/ShowUser.css";

const ShowUsers = () => {
  useEffect(() => {
    document.title = "Users";
    getUsersFromServer();
  }, []);
  const history = useHistory();
  const [users, setUsers] = useState([{}]);

  //function to call server
  const admin = "arpit@gmail.com";
  const getUsersFromServer = () => {
    axios
      .get(`http://localhost:8080/admin/get-users/${admin}`)
      .then((response) => {
        console.log("Success");
        console.log(response.data);
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  const addUser = () => {
    console.log("Working.....");
    history.push("/add-user");
  };

  const takeAttendance = () => {
    console.log("Working.....");
    history.push("/take-attendance");
  };
  return (
    <div>
      <Container>
        <h2>
          <u>Users</u>
        </h2>
        <button
          type="button"
          class="btn btn-primary add-user"
          onClick={addUser}
        >
          + Add New User
        </button>
        <button
          type="button"
          class="btn btn-primary make-attendance"
          onClick={takeAttendance}
        >
          Take Attendance
        </button>

        <table class="table table-striped table-bordered">
          <thead>
            <tr>
              <td>User Id</td>
              <td>User Name</td>
            </tr>
          </thead>
          <tbody>
            {users.map((e) => (
              <tr>
                <td id={e.id}>{e.id}</td>
                <td id={e.id}>{e.username}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </div>
  );
};

export default ShowUsers;
