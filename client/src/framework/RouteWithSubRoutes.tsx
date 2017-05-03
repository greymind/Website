import * as React from "react";
import { Route, RouteProps } from "react-router-dom";

export interface IRouteWithSubRoutesProps extends RouteProps {
    component?: any;
    routes?: IRouteWithSubRoutesProps[];
}

export const RouteWithSubRoutes: React.StatelessComponent<IRouteWithSubRoutesProps> = (route) => {
    return (
        <Route path={route.path} render={props => (
            // pass the sub-routes down to keep nesting
            <route.component {...props} routes={route.routes} />
        )} />
    );
};