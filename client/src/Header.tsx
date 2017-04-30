import * as React from "react";

import {
    BrowserRouter as Router,
    Route,
    NavLink
} from 'react-router-dom';

export const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
                            aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <NavLink className="pull-left greymind-logo" to="/"></NavLink>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li className="active"><NavLink to="/">Home <span className="sr-only">(current)</span></NavLink></li>
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
                            <li><NavLink to="/resume">Resume</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}