import * as $ from "jquery";
import * as React from "react";
import * as ReactDOM from "react-dom";

import "../styles/main.less";

import { Home } from "./Home";
import { Resume, IResumeProps } from "./Resume";

import * as ResumeData from "../../data/resume.json";

export interface IAppState {
    resumeData: IResumeProps;
}

export class App extends React.Component<undefined, IAppState> {
    state: IAppState = {
        resumeData: ResumeData
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-default navbar-fixed-top" bootstrap-active-link>
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
                                aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="pull-left" href="#/home"><img src="../images/Logo-Transparent.png" /></a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li className="active"><a href="#/home">Home <span className="sr-only">(current)</span></a></li>
                                <li className="dropdown">
                                    <a href="" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Projects<span className="caret"></span></a>
                                    <ul className="dropdown-menu">
                                        <li className="dropdown-header">Maya Tools</li>
                                        <li><a target="_blank" href="https://github.com/greymind/Sequencer">Sequencer</a></li>
                                        <li><a target="_blank" href="https://github.com/greymind/Sequencer">ModelDef Exporter</a></li>
                                        <li><a target="_blank" href="https://github.com/greymind/Sequencer">Scene Exporter</a></li>
                                        <li><a target="_blank" href="https://github.com/greymind/Sequencer">Custom Data Exporter</a></li>
                                        <li className="dropdown-header">Audio/Video Editing</li>
                                        <li><a target="_blank" href="https://github.com/greymind/ClipSynth">ClipSynth</a></li>
                                        <li className="dropdown-header">Pipeline Tools</li>
                                        <li><a target="_blank" href="https://github.com/greymind/DatabaseConverters">Database Converters</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="#/resume">Resume</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container">
                    <Home />
                    <Resume {...this.state.resumeData} />
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
);