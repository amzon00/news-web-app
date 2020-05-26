import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Header from "../common/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as firebase from "firebase";

function Registration() {
  const { register, handleSubmit, errors, getValues, setValue } = useForm();
  const pStyle = {
    color: "red",
    display: "inline",
  };

  const isValid = (value) => {
    const repeatPassValue = value;

    if (repeatPassValue !== getValues("password")) {
      toast.error("Passwords does not match!");
      return false;
    } else if (repeatPassValue.length < 6) {
      toast.error("Password must be at least 6 characters!");
      return false;
    } else {
      toast.success(
        "Your registration was successful. You may login into your account."
      );
    }
  };

  const onSubmit = (data) => {
    if (isValid) {
      const email = data.email;
      const password = data.password;
      const auth = firebase.auth();
      const promise = auth.createUserWithEmailAndPassword(email, password);
      promise
        // .then((user) => console.log(user))
        .catch((err) => console.error(err));

      setValue([
        {
          email: "",
        },
        {
          password: "",
        },
        {
          rePassword: "",
        },
      ]);
    }
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
            top: "45%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="row h-100 justify-content-center">
            <div className="col-10 col-md-8 col-lg-6">
              <h1> Register </h1>{" "}
              <p> Please fill in the form to create account. </p> <hr />
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
                placeholder="Email"
              />{" "}
              {errors.username && <p style={pStyle}> Username is required </p>}{" "}
              <br />
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
              {errors.password && <p style={pStyle}> Password is required </p>}{" "}
              <br />
              <br />
              <label className="control-label col-sm-2" htmlFor="password">
                <b> Repeat Password </b>{" "}
              </label>{" "}
              &nbsp; &nbsp;{" "}
              <input
                name="rePassword"
                ref={register({
                  required: true,
                  validate: isValid,
                })}
                type="password"
                placeholder="Repeat Password"
              />{" "}
              {errors.rePassword && errors.rePassword.type !== "validate" && (
                <p style={pStyle}> Repeat password is required </p>
              )}{" "}
              <hr />
              <button type="submit" className="btn btn-primary">
                Submit{" "}
              </button>{" "}
              <br />
              <br />
              <div>
                <p>
                  Already have an account ? <Link to="/login"> Sign in </Link>.{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </form>{" "}
    </div>
  );
}

export default Registration;
