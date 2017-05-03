import * as React from "react";

import { Route, RouteProps } from "react-router-dom";

import { Home } from "./Home";
import { Resume } from "./resume/Resume";

export interface IRoutesProps extends RouteProps {
    component?: any;
    routes?: IRoutesProps[];
}

export const Routes: IRoutesProps[] = [
    {
        path: "/",
        component: Home as any,
        exact: true,
    },
    {
        path: "/home",
        component: Home as any,
    },
    {
        path: "/resume",
        component: Resume as any
    }
];