import React, { Component } from "react";
import { Redirect } from "react-router-dom";
export default (ChildComponent) => {
  return class ComposedComponent extends Component {
    constructor(props) {
      super(props);
      this.shouldNavigateAway();
    }
    shouldNavigateAway = () => {
      if (!localStorage.getItem("token")) {
        this.props.history.push("/Home");
      }
    };

    render() {
      if (localStorage.getItem("token")) {
        return (
          <>
            <ChildComponent {...this.props} />
          </>
        );
      }
      return <Redirect to="/login" />;
    }
  };
};
