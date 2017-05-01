import * as _ from "lodash";
import * as React from "react";

import {
    BrowserRouter as Router,
    Route,
    NavLink
} from 'react-router-dom';

import * as Projects from "../../data/projects.json"
import { ICategory, IProject, IProjectMenuItem } from "./projects/interfaces";
import { ListItemNavLink } from "./framework/ListItemNavLink";

const categories: ICategory[] = Projects;
const menuItems = _.flatMap(categories, (category) => {
    var categoryItem: IProjectMenuItem =
        {
            isCategory: true,
            name: category.category
        };

    return [categoryItem].concat(category.projects.map((project) => {
        return {
            name: project.name,
            url: project.url
        }
    }));
});

export class Header extends React.Component<undefined, undefined> {
    render() {
        return (
            <div>
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <NavLink className="pull-left greymind-logo" to="/home"></NavLink>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <ListItemNavLink to="/home">Home</ListItemNavLink>
                                <li className="dropdown">
                                    <a className="dropdown-toggle" data-toggle="dropdown" role="button">Projects<span className="caret"></span></a>
                                    <ul className="dropdown-menu">
                                        {menuItems.map((menuItem, menuItemIndex) =>
                                            menuItem.isCategory
                                                ? <li key={menuItemIndex} className="dropdown-header">{menuItem.name}</li>
                                                : <li key={menuItemIndex}><a target="_blank" href={menuItem.url}>{menuItem.name}</a></li>
                                        )}
                                    </ul>
                                </li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <ListItemNavLink to="/resume">Resume</ListItemNavLink>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}