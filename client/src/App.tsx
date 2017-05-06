import "babel-polyfill";

import * as React from "react";
import * as ReactDOM from "react-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import "../styles/main.less";

import { store } from "./store/store";
import { Header } from "./Header";
import { Routes } from "./Routes";
import { RouteWithSubRoutes } from "./framework/RouteWithSubRoutes";

export const App = () =>
    <Router>
        <div>
            <Header />
            <div className="container-fluid">
                <Switch>
                    {Routes.map((route, i) => (
                        <RouteWithSubRoutes key={i} {...route} />
                    ))}
                </Switch>
            </div>
        </div>
    </Router>

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app")
);

if (module.hot) {
    module.hot.accept();
}