import * as React from "react";
import * as PropTypes from "prop-types";
import { NavLinkProps, NavLink } from "react-router-dom";
import { RouterChildContext } from "react-router-dom";
import { matchPath } from "react-router-dom";

interface IListItemNavLinkState {
    isActive: boolean;
}

interface IListItemNavLinkContext extends RouterChildContext<any> {

}

export class ListItemNavLink extends React.Component<NavLinkProps, IListItemNavLinkState> {
    static defaultProps: Partial<NavLinkProps> = {
        activeClassName: "active"
    };

    state: IListItemNavLinkState = {
        isActive: false
    };

    context: IListItemNavLinkContext;

    static contextTypes = {
        router: PropTypes.object.isRequired
    };

    isActive = () => {
        var match: any = matchPath(this.context.router.route.location.pathname, {
            exact: this.props.exact,
            strict: this.props.strict,
            path: this.props.to.toString()
        });

        return !!match;
    }

    render(): JSX.Element {
        return (
            <li className={this.isActive() ? this.props.activeClassName : ""}>
                <NavLink {...this.props}>
                    {this.props.children}
                </NavLink>
            </li>
        );
    }
}