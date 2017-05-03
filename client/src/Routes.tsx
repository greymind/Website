import * as React from "react";

import { IRouteWithSubRoutesProps } from "./framework/RouteWithSubRoutes";

import { Home } from "./Home";
import { Resume } from "./resume/Resume";

export const Routes: IRouteWithSubRoutesProps[] = [
    {
        path: "/",
        component: Home,
        exact: true,
    },
    {
        path: "/home",
        component: Home,
    },
    {
        path: "/resume",
        component: Resume
    }
];