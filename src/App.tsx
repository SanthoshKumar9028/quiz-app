import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.scss";
import Home from "./pages/home";
import JavaScriptQuizs from "./pages/javascript-quiz";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/" component={JavaScriptQuizs} />
      </Switch>
    </Router>
  );
}

export default App;
