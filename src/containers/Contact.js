import React, { Component } from "react";
import Joi from "joi-browser";
class Contact extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    credentials: {
      firstname: "",
      lastname: "",
      username: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    firstname: Joi.string().required().label("First Name"),
    lastname: Joi.string().required().label("Last Name"),
    username: Joi.string().required().email().label("User Name"),
    password: Joi.string().required().min(8).label("Password"),
  };

  validate = () => {
    let error = {};
    const result = Joi.validate(this.state.credentials, this.schema, {
      abortEarly: false,
    });
    if (result.error !== null) {
      result.error.details.map((ele) => {
        if (error[ele.context.key] !== undefined) {
          error[ele.context.key] =
            error[ele.context.key] + " and " + ele.message;
        } else {
          error[ele.context.key] = ele.message;
        }
      });
    }
    return error;
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    const error = this.validate();
    this.setState({ errors: error || {} });
    // console.log(evt.target[0].value);
    // console.log(evt.target[1].value);
    // console.log(evt.target[2].value);
    // console.log(evt.target[3].value);
    // console.log(evt.target[4].value);
  };

  handleChange = (evt) => {
    let account = { ...this.state.credentials };
    account[evt.currentTarget.name] = evt.currentTarget.value;
    this.setState({ credentials: account });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="form-group">
                <label htmlFor="firstname">First Name</label>
                <input
                  type="text"
                  value={this.state.firstname}
                  onChange={this.handleChange}
                  name="firstname"
                  id="firstname"
                  className="form-control"
                />
                {this.state.errors.firstname ? (
                  <small className="form-text" style={{ color: "red" }}>
                    {this.state.errors.firstname}
                  </small>
                ) : null}
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label htmlFor="lastname">Last Name</label>
                <input
                  type="text"
                  value={this.state.lastname}
                  name="lastname"
                  onChange={this.handleChange}
                  id="lastname"
                  className="form-control"
                />
                {this.state.errors.lastname ? (
                  <small className="form-text" style={{ color: "red" }}>
                    {this.state.errors.lastname}
                  </small>
                ) : null}
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="username">User Name</label>
            <input
              type="text"
              id="username"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              className="form-control"
            />
            {this.state.errors.username ? (
              <small className="form-text" style={{ color: "red" }}>
                {this.state.errors.username}
              </small>
            ) : null}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              id="password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
              className="form-control"
            />
            {this.state.errors.password ? (
              <small className="form-text" style={{ color: "red" }}>
                {this.state.errors.password}
              </small>
            ) : null}
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              id="remembercheck"
              className="form-check-input"
            />
            <label htmlFor="remembercheck">Remember me</label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default Contact;
