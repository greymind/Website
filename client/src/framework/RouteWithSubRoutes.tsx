import * as React from "reacT";
import { IRoutesProps } from "../Routes";
import { Route, RouteProps } from "react-router-dom";

export const RouteWithSubRoutes: React.StatelessComponent<IRoutesProps> = (route) => {
    return (
        <Route path={route.path} render={props => (
            // pass the sub-routes down to keep nesting
            <route.component {...props} routes={route.routes} />
        )} />
    );
};