import * as React from "react";
import * as Moment from "moment";
import * as  ReactMarkdown from 'react-markdown';

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
                <ReactMarkdown source={article.content} />
            </div>
        </div>
        <div className="row">
            <div className="author col-xs-12 text-right">
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