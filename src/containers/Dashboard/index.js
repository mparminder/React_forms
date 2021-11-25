import React, { useState } from "react";
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";
import Home from "../Home";
import Product from "../Product";
import Blog from "../Blog";
import Contact from "../Contact";
import NotFound from "../NotFound";
import Navbar from "../../components/Navbar";

function Dashboard() {
  let { path, url } = useRouteMatch();
  console.log(path, url);
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Home" component={Home} />
        <Route path="/Product" component={Product} />
        <Route path="/Blog" component={Blog} />
        <Route path="/Contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default Dashboard;
