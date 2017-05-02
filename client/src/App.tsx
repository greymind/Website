import * as React from "react";
import * as ReactDOM from "react-dom";

import { HashRouter as Router, Route, Switch } from "react-router-dom";

import "../styles/main.less";

import { Header } from "./Header";
import { Routes, RouteWithSubRoutes } from "./Routes";

interface IAppState {
}

export class App extends React.Component<undefined, IAppState> {
    render(): JSX.Element {
        return (
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
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
);