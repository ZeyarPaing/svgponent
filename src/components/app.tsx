import {FunctionalComponent, h} from "preact";
import {Route, Router} from "preact-router";

import Home from "../pages/home";
import NotFoundPage from "../pages/notfound";
import {RecoilRoot} from "recoil";

const App: FunctionalComponent = () => {
    return (
        <RecoilRoot>
            <div id="preact_root">
                <Router>
                    <Route path="/" component={Home}/>
                    <NotFoundPage default/>
                </Router>
            </div>
        </RecoilRoot>

    );
};

export default App;
