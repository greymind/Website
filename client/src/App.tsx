import * as React from "react";
import * as ReactDOM from "react-dom";

import "../styles/main.less";

import { Home } from "./Home";

export interface IAppState { }

export class App extends React.Component<undefined, IAppState> {
    render() {
        return (
            <div>
                <Home />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
);