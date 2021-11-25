import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Joi from "joi-browser";
import { loginUser } from "../redux";
import { connect } from "react-redux";

const Login = (props) => {
  const [uname, setUname] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState({ uname: "", pass: "" });
  const schema = {
    // uname: Joi.string().required().email(),
    // pass: Joi.string().required().min(5),
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      props.history.push("/");
    }
  }, []);

  const validate = () => {
    const err = Joi.validate({ uname: uname, pass: pass }, schema, {
      abortEarly: false,
    });
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //const err = validate();
    let err;
    if (err !== undefined) {
      // if (err.error !== null || err !== undefined) {
      err.error.details.map((ele) => {
        if (ele.path[0] == "uname") {
          setError((prevState) => {
            return { ...prevState, uname: ele.message };
          });
        } else if (ele.path[0] == "pass") {
          setError((prevState) => {
            return { ...prevState, pass: ele.message };
          });
        }
      });
    } else {
      setError((prevState) => {
        //api call
        return { ...prevState, uname: "", pass: "" };
      });
      props.loginUser(uname, pass);
      // console.log("object");
      // props.history.push("/Home");
    }
  };
  return (
    <>
      <form className="container" onSubmit={handleSubmit}>
        <div className="form-group">
          <h1>Login</h1>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Username"
            id="uname"
            className="form-control"
            onChange={(e) => {
              setUname(e.target.value);
            }}
          />
          {error.uname.length > 0 ? <small>{error.uname}</small> : null}
        </div>
        <div className="form-group">
          <input
            type="pass"
            placeholder="Password"
            id="pass"
            className="form-control"
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />
          {error.pass.length > 0 ? <small>{error.pass}</small> : null}
        </div>
        <div className="form-group">
          <div className="row">
            <button type="submit" className="btn btn-success ml-3">
              Login
            </button>
            <Link className="ml-auto mr-3" to="/Register">
              Register
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};

const mapDispatchToProps = (dispatch, ownprops) => {
  return {
    loginUser: (uname, pass) => dispatch(loginUser(uname, pass, ownprops)),
  };
};

export default connect(null, mapDispatchToProps)(Login);
