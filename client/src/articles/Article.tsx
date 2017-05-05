import * as React from "react";
import * as Moment from "moment";
import * as  ReactMarkdown from 'react-markdown';
import * as $ from "jquery";

import { IArticle } from "./interfaces";
import "./article.less";

interface IArticleProp extends IArticle { }

interface IActionButtonProps {
    icon: string;
    title: string;
}

export const ActionButton = ({ icon, title }: IActionButtonProps) =>
    <button className="btn btn-default btn-sm"
        ref={button => { $(button).tooltip() }}
        data-toggle="tooltip" data-placement="bottom" title={title}>
        <span className={`glyphicon ${icon}`} aria-hidden="true"></span>
    </button>

export const Article = (article: IArticleProp) =>
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
                <ActionButton icon="glyphicon-pencil" title="Edit" />
                {" "}
                <ActionButton icon="glyphicon-trash" title="Delete" />
                {" "}
                <ActionButton icon="glyphicon-ok" title="Save" />
                {" "}
                <ActionButton icon="glyphicon-remove" title="Cancel" />
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