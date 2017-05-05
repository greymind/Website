import * as React from "react";
import * as Moment from "moment";

import { IArticle } from "./interfaces";
import "./article.less";

interface IArticleProp extends IArticle { }

export const Article = (article: IArticleProp) =>
    <div className="article col-xs-offset-1 col-xs-10">
        <div className="row">
            <h3 className="title col-xs-12 text-left">
                {article.title}
            </h3>
        </div>
        <div className="row">
            <div className="content col-xs-12 text-justify">
                {article.content}
            </div>
        </div>
        <div className="row">
            <div className="author col-xs-offset-6 col-xs-6 text-right">
                <span className="text-uppercase">
                    {article.author}
                </span>
                <br />
                <small>
                    {Moment(article.timestamp).format("dddd, MMMM Do YYYY")}
                </small>
            </div>
        </div>
    </div>