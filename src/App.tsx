import { memo, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.scss";
import { LoadingSpinner } from "./components/loading-indicator";

const Home = lazy(() => import("./pages/home"));
const TestQuizs = lazy(() => import("./pages/test-quizs"));
const PageNotFound = lazy(() => import("./pages/404"));

function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
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
      </Suspense>
    </Router>
  );
}

export default memo(App);
