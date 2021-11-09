import { Card, CardBody } from "reactstrap";
import React from "react";
function Header() {
  return (
    <div>
      <Card
        className="my-1"
        style={{ background: "rgba(49, 186, 250, 0.863)" }}
      >
        <CardBody>
          <h1 className="text-center my-3">
            Welcome to the Attendance Manager{" "}
          </h1>
        </CardBody>
      </Card>
    </div>
  );
}

export default Header;
