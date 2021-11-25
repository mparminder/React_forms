import React, { useState } from "react";
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";
import NewPage1 from "./NewPage1";
import NewPage2 from "./NewPage2";
import NewPage3 from "./NewPage3";

function Home() {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <h1>Home</h1>
      <br />
      <br />
      <ul>
        <li>
          <Link to={`/Home/NewPage1`}> NewPage1 </Link>
        </li>
        <li>
          <Link to={`/Home/NewPage2`}> NewPage2 </Link>
        </li>
        <li>
          <Link to={`/Home/NewPage3`}> NewPage3 </Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={`/Home/NewPage1`} component={NewPage1} />
        <Route exact path={`/Home/NewPage2`} component={NewPage2} />
        <Route exact path={`/Home/NewPage3`} component={NewPage3} />
      </Switch>
    </div>
  );
}

export default Home;
