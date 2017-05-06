import * as _ from "lodash";
import * as React from "react";
import { connect } from "react-redux";

import { IAppState } from "../store/store-interfaces";
import { IArticle } from "./interfaces";
import { Article } from "./Article";
import { Dispatch } from "redux";

import { StoreApi } from "../store/store-api";
const ActionCreators = StoreApi.actionCreators;

interface IArticleListProps {
    articles: IArticle[];
    onEdit: (id: number, content: string) => void;
}

const ArticleList = ({ articles, onEdit }: IArticleListProps) =>
    <div className="row">
        {_.chain(articles)
            .sortBy(article => -article.timestamp)
            .take(100)
            .map((article, articleIndex) =>
                <Article key={articleIndex} article={article} onEdit={onEdit} />
            )
            .value()}
    </div>

const mapStateToProps = (state: IAppState) => {
    return {
        articles: state.articles
    } as IArticleListProps;
}

const mapDispatchToProps = (dispatch: Dispatch<IAppState>) => {
    return {
        onEdit: (id, content) => {
            dispatch(ActionCreators.articlesSave({ id, content: content + "blah" }));
        }
    } as IArticleListProps;
}

export const Articles = connect(
    mapStateToProps,
    mapDispatchToProps
)(ArticleList);