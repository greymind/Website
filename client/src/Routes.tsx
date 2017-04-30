import * as React from "react";

import { Route, RouteProps } from 'react-router-dom';

import { Home } from "./Home";
import { Resume } from "./resume/Resume";
import { Projects } from "./Projects";

interface IRouteProps extends RouteProps {
    component?: any;
    routes?: IRouteProps[];
}

export const RouteWithSubRoutes = (route: IRouteProps) => {
    return (
        <Route path={route.path} render={props => (
            // pass the sub-routes down to keep nesting
            <route.component {...props} routes={route.routes} />
        )} />
    );
}

export const Routes: IRouteProps[] = [
    {
        path: "/home",
        component: Home as any,
    },
    {
        path: "/projects",
        component: Projects as any
    },
    {
        path: "/resume",
        component: Resume as any
    }
];