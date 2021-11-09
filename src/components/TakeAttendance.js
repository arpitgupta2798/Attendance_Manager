import React, { useState, useEffect, Fragment } from "react";
import { Container, Table } from "reactstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "../style/ShowUser.css";
import "../style/takeAttendance.css";
const TakeAttendance = () => {
  useEffect(() => {
    document.title = "Users";
    getUsersFromServer();
  }, []);
  const history = useHistory();
  const [users, setUsers] = useState([{}]);
  const [attendance, setAttendance] = useState({});

  //function to call server
  const admin = "arpit@gmail.com";
  const getUsersFromServer = () => {
    axios
      .get(`http://localhost:8080/admin/get-current-presence/${admin}`)
      .then((response) => {
        console.log("Success");
        console.log(response.data);
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  const handleAttendanceForm = (e) => {
    setAttendanceOnServer(attendance);
    e.preventDefault();
  };

  const setAttendanceOnServer = (e) => {
    axios
      .post(`http://localhost:8080/admin/set-presence`, e)
      .then((response) => {
        console.log("Successssssssssss");
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  return (
    <div>
      <Container>
        <h2>
          <u>Users</u>
        </h2>
        <table class="table table-striped table-bordered">
          <thead>
            <tr>
              <td>User Id</td>
              <td>User Name</td>
              <td>User Name</td>
              <td>Today's Attendance</td>
            </tr>
          </thead>
          <tbody>
            {users.map((e) => (
              <tr>
                <td id={e.id}>{e.id}</td>
                <td id={e.id}>{e.username}</td>
                <td id={e.id}>{e.date}</td>
                <td id={e.id}>
                  {e.attendance != null ? e.attendance : "Not Mentioned"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
      {/* -------------------------------------------------------------------------------------------------------------------------- */}
      <div className="position-fixed">
        <h5>Enter UserId and Status</h5>
        <form onSubmit={handleAttendanceForm}>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter User Id"
              onChange={(e) => {
                setAttendance({ ...attendance, id: e.target.value });
              }}
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="exampleInputStatus"
              placeholder="Status"
              onChange={(e) => {
                setAttendance({ ...attendance, present: e.target.value });
              }}
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default TakeAttendance;
