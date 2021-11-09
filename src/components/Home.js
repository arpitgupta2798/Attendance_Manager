import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../style/home.css";
function Home() {
  useEffect(() => {
    document.title = "Attendance Manager";
  }, []);
  return (
    <div>
      < div className="text-center">
        <h1>Attendance Manager</h1>
        <hr className="my-2" />
        <p>
          Use this platform to manage attendance of your Employees or Students.
        </p>
        <button type="button" class="btn btn-primary">
          Learn More!
        </button>
      </div>
    </div>
  );
}
export default Home;
