import * as $ from "jquery";
import * as React from "react";
import * as ReactDOM from "react-dom";

import "../styles/main.less";

import { Home } from "./Home";
import { Resume, IResumeProps } from "./Resume";

import * as ResumeData from "./resume.json";

export interface IAppState {
    resumeData: IResumeProps;
}

export class App extends React.Component<undefined, IAppState> {
    state: IAppState = {
        resumeData: ResumeData
    }

    render() {
        return (
            <div className="nav">
                <Home />
                <Resume {...this.state.resumeData} />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
);