import React, { useState } from "react";
import Header from "./common/Header";
import "../../node_modules/font-awesome/css/font-awesome.min.css";

function ProfileInfo() {
  const [state, setValue] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <>
      <Header />
      <div>
        <div
          className="container"
          style={{
            position: "absolute",
            left: "50%",
            top: "40%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="card bg-light">
            <article
              className="card-body mx-auto"
              style={{
                maxWidth: "400px",
              }}
            >
              <h4 className="card-title mt-3 text-center">
                {" "}
                Account Information{" "}
              </h4>{" "}
              <br />
              <form onSubmit={handleSubmit}>
                <div className="form-group input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      {" "}
                      <i className="fa fa-user"></i>{" "}
                    </span>
                  </div>
                  <input
                    onChange={handleChange}
                    value={state.name}
                    name="name"
                    className="form-control"
                    placeholder="Full name"
                    type="text"
                  />
                </div>
                <div className="form-group input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      {" "}
                      <i className="fa fa-envelope"></i>{" "}
                    </span>
                  </div>
                  <input
                    onChange={handleChange}
                    value={state.email}
                    name="email"
                    className="form-control"
                    placeholder="Email address"
                    type="email"
                  />
                </div>
                <div className="form-group input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      {" "}
                      <i className="fa fa-phone"></i>{" "}
                    </span>
                  </div>
                  <input
                    onChange={handleChange}
                    value={state.phone}
                    name="phone"
                    className="form-control"
                    placeholder="Phone number"
                    type="text"
                  />
                </div>
                <div className="form-group input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      {" "}
                      <i className="fa fa-map-marker"></i>{" "}
                    </span>
                  </div>
                  <input
                    onChange={handleChange}
                    value={state.location}
                    name="location"
                    className="form-control"
                    placeholder="Location"
                    type="text"
                  />
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary ">
                    {" "}
                    Save{" "}
                  </button>
                </div>
              </form>
            </article>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </>
  );
}

export default ProfileInfo;
