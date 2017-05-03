import * as React from "react";
import * as ReactDOM from "react-dom";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "../styles/main.less";

import { Header } from "./Header";
import { Routes } from "./Routes";
import { RouteWithSubRoutes } from "./framework/RouteWithSubRoutes";

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

if (module.hot) {
    module.hot.accept();
}