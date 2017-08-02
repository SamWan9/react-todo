import React from "react"
import {render} from "react-dom"
import {Provider} from "react-redux"
import store from "./store"
import {BrowserRouter as Router,Route,Switch,Redirect} from "react-router-dom"
import createBrowserHistory from "history/createBrowserHistory"
import App from "./containers/App"
import Home from "./containers/Home/index";
import History from "./containers/History/index";
import Special from "./containers/Special/index";
import Add from "./containers/Add/index";

let history=createBrowserHistory();

render(
    <Provider store={store}>
        <Router history={history}>
            <App>
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/special" component={Special} />
                    <Route path="/history" component={History} />
                    <Route path="/add" component={Add} />
                    <Redirect to="/home" />
                </Switch>
            </App>
        </Router>
    </Provider>,
    document.getElementById("root")
);

