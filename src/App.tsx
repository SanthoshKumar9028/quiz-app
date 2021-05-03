import { memo } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.scss";
import Home from "./pages/home";
import TestQuizs from "./pages/test-quizs";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/html">
          <TestQuizs language="html" />
        </Route>
        <Route path="/javascript">
          <TestQuizs language="javascript" />
        </Route>
      </Switch>
    </Router>
  );
}

export default memo(App);
