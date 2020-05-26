import React from "react";
import Header from "../common/Header";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import * as firebase from "firebase";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

function Login() {
  let history = useHistory();
  const { register, handleSubmit, errors } = useForm();
  const pStyle = {
    color: "red",
    display: "inline",
  };

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => (res ? history.push("/") : undefined))
      .catch((err) => toast.error(err.message));
  };
  return (
    <div>
      <ToastContainer autoClose={3000} pauseOnHover hideProgressBar={true} />{" "}
      <Header />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          className="jumbotron container"
          style={{
            position: "absolute",
            left: "50%",
            top: "40%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="row h-100 justify-content-center">
            <div className="col-10 col-md-8 col-lg-6">
              <h1> Login </h1> <p> Please fill in the form to login. </p> <hr />
              <label className="control-label col-sm-2" htmlFor="username">
                <b> Email </b>{" "}
              </label>{" "}
              &nbsp; &nbsp;{" "}
              <input
                name="email"
                ref={register({
                  required: true,
                })}
                type="email"
                placeholder="Username"
              />{" "}
              {errors.email && <p style={pStyle}>Email is required</p>} <br />
              <br />
              <label className="control-label col-sm-2" htmlFor="password">
                <b> Password </b>{" "}
              </label>{" "}
              &nbsp; &nbsp;{" "}
              <input
                name="password"
                ref={register({
                  required: true,
                })}
                type="password"
                placeholder="Password"
              />{" "}
              {errors.password && <p style={pStyle}>Password is required</p>}{" "}
              <br />
              <br />
              <button type="submit" className="btn btn-primary">
                Submit{" "}
              </button>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </form>{" "}
    </div>
  );
}

export default Login;
