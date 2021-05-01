import { memo } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.scss";
import Home from "./pages/home";
import JavaScriptQuizs from "./pages/javascript-quiz";
// import FinalizeAnswer from "./pages/finalize-answer";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/" component={JavaScriptQuizs} />
        {/* <Route path="/">
          <FinalizeAnswer language="javascript" />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default memo(App);
