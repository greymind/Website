import * as _ from "lodash";
import * as React from "react";

import {
    BrowserRouter as Router,
    Route,
    NavLink
} from "react-router-dom";

import { ListItemNavLink } from "./framework/ListItemNavLink";
import { Projects } from "./projects/Projects";

export const Header = () =>
    <div>
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed"
                        data-toggle="collapse" data-target="#g-header-navbar-collapse" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <NavLink className="pull-left greymind-logo" to="/home"></NavLink>
                </div>
                <div className="collapse navbar-collapse" id="g-header-navbar-collapse">
                    <ul className="nav navbar-nav">
                        <ListItemNavLink to="/home">Home</ListItemNavLink>
                        <Projects />
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <ListItemNavLink to="/resume">About Balki</ListItemNavLink>
                    </ul>
                </div>
            </div>
        </nav>
    </div >