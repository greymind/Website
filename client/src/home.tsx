import * as React from "react";

import { Resume } from "./Resume";

export class Home extends React.Component<undefined, undefined> {
    render() {
        return (
            <div>
                <h1>Greymind</h1>
                <Resume />
            </div>
        );
    }
}