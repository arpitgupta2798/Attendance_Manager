import React, { useState, useEffect, Fragment } from "react";
import { Container, Table } from "reactstrap";
import axios from "axios";

const ShowAttendances = ({ match }) => {
  let email = match.params.email;
  useEffect(() => {
    console.log("params" + match.params.email);
    document.title = "Attendances";
    getAttendancesFromServer(email);
  }, []);

  const [attendances, setAttendances] = useState([{}]);

  // function to call server
  const getAttendancesFromServer = (email) => {
    axios
      .get(`http://localhost:8080/user/get-attendances/${email}`)
      .then((response) => {
        console.log("Success");
        console.log(response.data);
        setAttendances(response.data);
        // response.preventDefault;
      })
      .catch((error) => {
        console.log(error.data);
      });
    // e.preventDefault();
  };
  return (
    <Container>
      <h2>
        <u>Your Attendances</u>
      </h2>
      <table class="table table-striped table-bordered">
        <thead>
          <tr>
            <td>Date</td>
            <td>Attendance</td>
          </tr>
        </thead>
        <tbody>
          {attendances.map((e) => (
            <tr>
              <td id={e.id}>{e.date}</td>
              <td id={e.id}>{e.attendance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};
export default ShowAttendances;
