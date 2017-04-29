import * as React from "react";
import * as ReactDOM from "react-dom";

import { Home } from "./Home";

export interface IIndexState { }

export class Index extends React.Component<undefined, IIndexState> {
    render() {
        return (
            <Home />
        )
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById("app")
);