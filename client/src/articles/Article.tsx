import * as React from "react";
import * as Moment from "moment";
import * as  ReactMarkdown from 'react-markdown';
import * as $ from "jquery";

import { IArticle } from "./interfaces";
import "./article.less";

interface IArticleProp {
    article: IArticle;
    onEdit: (id: number, content: string) => void;
}

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

export const Article = ({ article, onEdit }: IArticleProp) =>
    <div className="article col-xs-offset-1 col-xs-10">
        <div className="row">
            <h3 className="title col-xs-12 text-left">
                {article.title}
            </h3>
        </div>
        <div className="row">
            <div className="content col-xs-12 text-justify">
                <ReactMarkdown source={article.content} />
            </div>
        </div>
        <div className="row footer">
            <div className="col-xs-6 actions">
                <ActionButton icon="glyphicon-pencil" title="Edit"
                    onClick={() => onEdit(article.id, article.content)} />
                {" "}
                <ActionButton icon="glyphicon-trash" title="Delete"
                    onClick={() => onEdit(article.id, article.content)} />
                {" "}
                <ActionButton icon="glyphicon-ok" title="Save"
                    onClick={() => onEdit(article.id, article.content)} />
                {" "}
                <ActionButton icon="glyphicon-remove" title="Cancel"
                    onClick={() => onEdit(article.id, article.content)} />
            </div>
            <div className="author col-xs-6 text-right">
                <span>
                    {article.author}
                </span>
                <br />
                <small>
                    {Moment(article.timestamp).format("MMMM Do YYYY")}
                </small>
            </div>
        </div>
    </div>