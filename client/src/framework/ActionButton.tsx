import * as React from "react";
import * as $ from "jquery";

interface IActionButtonProps {
    icon: string;
    title: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

export const ActionButton = ({ icon, title, onClick }: IActionButtonProps) =>
    <button className="btn btn-default btn-sm"
        ref={button => { $(button).tooltip() }}
        onClick={onClick}
        data-toggle="tooltip" data-placement="bottom" title={title}>
        <span className={`glyphicon ${icon}`} aria-hidden="true"></span>
    </button>