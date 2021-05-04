import { memo } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.scss";
import Home from "./pages/home";
import TestQuizs from "./pages/test-quizs";
import PageNotFound from "./pages/404";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/html">
          <TestQuizs language="html" />
        </Route>
        <Route path="/css">
          <TestQuizs language="css" />
        </Route>
        <Route path="/javascript">
          <TestQuizs language="javascript" />
        </Route>
        <Route path="/typescript">
          <TestQuizs language="typescript" />
        </Route>
        <Route path="/python">
          <TestQuizs language="python" />
        </Route>
        <Route path="/java">
          <TestQuizs language="java" />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default memo(App);
