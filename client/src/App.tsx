import * as React from "react";
import * as ReactDOM from "react-dom";

import "../styles/main.less";

import { Home } from "./Home";
import { Resume } from "./Resume";

export interface IAppState { }

export class App extends React.Component<undefined, IAppState> {
    render() {
        return (
            <div>
                <Home />
                <Resume />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
);