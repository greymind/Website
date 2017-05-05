import * as _ from "lodash";
import * as React from "react";
import { connect } from "react-redux";

import { IAppState } from "../store";
import { IArticle } from "./interfaces";
import { Article } from "./Article";


interface IArticleListProps {
    articles: IArticle[];
}

const ArticleList = ({ articles }: IArticleListProps) =>
    <div className="row">
        {_.chain(articles)
            .sortBy(article => -article.timestamp)
            .take(100)
            .map((article, articleIndex) =>
                <Article key={articleIndex} {...article} />
            )
            .value()}
    </div>

const mapStateToProps = (state: IAppState) => {
    return {
        articles: state.articles
    } as IArticleListProps;
}

export const Articles = connect(
    mapStateToProps
)(ArticleList);