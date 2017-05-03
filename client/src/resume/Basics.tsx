import * as React from "react";
import { IBasics } from "./interfaces";

export const Basics: React.StatelessComponent<IBasics> = (props) => {
    return (
        <div className="jumbotron">
            <div><strong>{props.name}</strong></div>
            <div>{props.title}</div>
            <div><em>{props.passion}</em></div>
        </div>
    );
};