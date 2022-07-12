import { FunctionalComponent, h } from "preact";
import { Route, Router } from "preact-router";

import Home from "../pages/home";
import NotFoundPage from "../pages/notfound";

const App: FunctionalComponent = () => {
  return (
    <div id="preact_root">
      <Router>
        <Route path="/" component={Home} />
        <NotFoundPage default />
      </Router>
    </div>
  );
};

export default App;
