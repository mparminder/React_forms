import React, { Component, useState, useEffect } from "react";
import { registerUser } from "../redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
const Register = (props) => {
  const [state, setState] = useState({
    name: "",
    pass: "",
    uname: "",
    c_pass: "",
  });
  useEffect(() => {
    if (localStorage.getItem("token")) {
      props.history.push("/");
    }
  }, []);
  return (
    <>
      <form
        className="container"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(state.name, state.pass, state.uname, state.c_pass);
          props.registerUser(state.uname, state.pass);
        }}
      >
        <div className="m-auto">
          <h1>Register</h1>
        </div>
        <div className="form-group">
          <input
            type="text"
            id="uname"
            placeholder="Name"
            className="form-control"
            onChange={(evt) => {
              setState({ ...state, name: evt.target.value });
            }}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="email"
            placeholder="Email"
            className="form-control"
            onChange={(evt) => {
              setState({ ...state, uname: evt.target.value });
            }}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="password"
            placeholder="Password"
            className="form-control"
            onChange={(evt) => {
              setState({ ...state, pass: evt.target.value });
            }}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="confpassword"
            placeholder="Confirm Password"
            className="form-control"
            onChange={(evt) => {
              setState({ ...state, c_pass: evt.target.value });
            }}
          />
        </div>
        <div className="form-group">
          <div className="row">
            <button type="submit" className="btn btn-success ml-3">
              Register
            </button>
            <Link className="ml-auto mr-3" to="/login">
              Login
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: (uname, pass) => dispatch(registerUser(uname, pass)),
  };
};

export default connect(null, mapDispatchToProps)(Register);
