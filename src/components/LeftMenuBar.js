import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const Menus = () => {
  return (
    <div>
      <ListGroup >
        <Link className="list-group-item list-group-item-action" tag="a" to="/">
          Home
        </Link>

        <Link
          className="list-group-item list-group-item-action"
          tag="a"
          to="/admin-login"
        >
          Admin Login
        </Link>
        <Link
          className="list-group-item list-group-item-action"
          tag="a"
          to="/user-login"
        >
          User Login
        </Link>

        <Link
          className="list-group-item list-group-item-action"
          tag="a"
          to="/about-us"
        >
          About Us
        </Link>

        <Link
          className="list-group-item list-group-item-action"
          tag="a"
          to="contact-us"
        >
          Contact Us
        </Link>
      </ListGroup>
    </div>
  );
};

export default Menus;
