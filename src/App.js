import React, { lazy, useState, useEffect } from "react";
import logo from "./logo.svg";
import requiredAuth from "./hoc/requiredAuth";
import ClipLoader from "react-spinners/ClipLoader";

import "./App.css";
import { Route, Switch } from "react-router-dom";
const Dashboard = lazy(() => import("./containers/Dashboard/index"));
const Login = lazy(() => import("./Auth/Login"));
const Register = lazy(() => import("./Auth/Register"));

function App(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  useEffect(() => {
    console.log(props);
  }, []);
  return (
    <React.Fragment>
      <React.Suspense
        fallback={
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <ClipLoader
              // css={override}
              size={150}
              color={"#123abc"}
              loading={true}
            />
          </div>
        }
      >
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/Register" exact component={Register} />
          <Route path="/" component={requiredAuth(Dashboard)} />
        </Switch>
      </React.Suspense>
    </React.Fragment>
  );
}

export default App;
