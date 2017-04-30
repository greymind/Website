import * as React from "react";
import * as ReactDOM from "react-dom";

import { HashRouter as Router, Route } from 'react-router-dom';

import "../styles/main.less";

import { Header } from "./Header";
import { Routes, RouteWithSubRoutes } from "./Routes";
import { Redirect } from "react-router";

interface IAppState {
}

export class App extends React.Component<undefined, IAppState> {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <div className="container-fluid">
                        {Routes.map((route, i) => (
                            <RouteWithSubRoutes key={i} {...route} />
                        ))}
                        <Redirect to="/home" />
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