import * as React from "react";
import { connect } from "react-redux";
import * as _ from "lodash";

import { IAppState } from "../store/store-interfaces";

import { IProjectsWithCategory, IProject, IProjectMenuItem } from "./interfaces";

interface IProjectProps {
    menuItem: IProjectMenuItem;
}

const Project = ({ menuItem }: IProjectProps) =>
    menuItem.isCategory
        ? <li className="dropdown-header">{menuItem.name}</li>
        : <li><a target="_blank" href={menuItem.url}>{menuItem.name}</a></li>

interface IProjectsListProps {
    menuItems: IProjectMenuItem[];
}

const ProjectsList = ({ menuItems }: IProjectsListProps) =>
    <li className="dropdown">
        <a className="dropdown-toggle" data-toggle="dropdown" role="button">
            Projects<span className="caret"></span>
        </a>
        <ul className="dropdown-menu">
            {menuItems.map((menuItem, menuItemIndex) =>
                <Project key={menuItemIndex} menuItem={menuItem} />
            )}
        </ul>
    </li>

const mapStateToProps = (state: IAppState) => {
    var menuItems = _.flatMap(state.projects, (category: IProjectsWithCategory) => {
        var categoryItem: IProjectMenuItem = {
            isCategory: true,
            name: category.category
        };

        return [categoryItem].concat(category.projects.map((project) => {
            return {
                name: project.name,
                url: project.url
            };
        }));
    });

    return {
        menuItems
    } as Partial<IProjectsListProps>;
};

export const Projects = connect(
    mapStateToProps
)(ProjectsList);