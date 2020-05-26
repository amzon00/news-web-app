import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <>
      <h1 className="display-1 font-weight-bold text-center jumbotron">
        Page Not Found 404
      </h1>
      <Link
        style={{
          position: "absolute",
          left: "50%",
          top: "40%",
          transform: "translate(-50%, -50%)",
        }}
        to="/"
        className="btn btn-primary"
      >
        Back to Home
      </Link>{" "}
    </>
  );
}

export default NotFoundPage;
