import * as React from "react";
import * as PropTypes from "prop-types";
import { NavLinkProps, NavLink, RouterChildContext, matchPath, match } from "react-router-dom";

interface IListItemNavLinkContext extends RouterChildContext<any> { }

export const ListItemNavLink: React.StatelessComponent<NavLinkProps> = (props, context: IListItemNavLinkContext) => {
    function isActive(): boolean {
        var match = matchPath(context.router.route.location.pathname, {
            exact: props.exact,
            strict: props.strict,
            path: props.to.toString()
        });

        return !!match;
    }

    return (
        <li className={isActive() ? props.activeClassName : ""}>
            <NavLink {...props}>
                {props.children}
            </NavLink>
        </li>
    );
};

ListItemNavLink.defaultProps = {
    activeClassName: "active"
};

ListItemNavLink.contextTypes = {
    router: PropTypes.object.isRequired
};
