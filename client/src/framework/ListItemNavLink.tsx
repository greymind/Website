import * as React from "react";
import * as PropTypes from "prop-types";
import { NavLinkProps, NavLink } from "react-router-dom";
import { RouterChildContext } from "react-router";

interface IListItemNavLinkState {
    isActive: boolean;
}

interface IListItemNavLinkContext extends RouterChildContext<any> {

}

export class ListItemNavLink extends React.Component<NavLinkProps, IListItemNavLinkState> {
    state: IListItemNavLinkState = {
        isActive: false
    }

    context: IListItemNavLinkContext

    static contextTypes = {
        router: PropTypes.object.isRequired
    }

    isActive = () => {
        return this.props.to == this.context.router.route.location.pathname;
    }

    render() {
        return (
            <li className={this.isActive() ? "active" : ""}>
                <NavLink {...this.props}>
                    {this.props.children}
                </NavLink>
            </li>
        )
    }
}