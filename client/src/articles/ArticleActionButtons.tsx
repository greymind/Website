import * as React from "react";
import { connect, Dispatch } from "react-redux";

import { ActionButton } from "../framework/ActionButton";
import { IAppState } from "../store/store-interfaces";
import { IArticle } from "./interfaces";
import { StoreApi } from "../store/store-api";

interface IArticleActionButtonsListProps {
    onEdit: () => void;
    onDelete: () => void;
    onSave: () => void;
    onCancel: () => void;
}

export const ArticleActionButtonsList = ({ onEdit, onDelete, onSave, onCancel }: IArticleActionButtonsListProps) =>
    <div>
        <ActionButton icon="glyphicon-pencil" title="Edit"
            onClick={onEdit} />
        {" "}
        <ActionButton icon="glyphicon-trash" title="Delete"
            onClick={onDelete} />
        {" "}
        <ActionButton icon="glyphicon-ok" title="Save"
            onClick={onSave} />
        {" "}
        <ActionButton icon="glyphicon-remove" title="Cancel"
            onClick={onCancel} />
    </div>

const mapDispatchToProps = (dispatch: Dispatch<IAppState>, { article }: IArticleActionButtonsProps) => {
    return {
        onEdit: () => {
            dispatch(StoreApi.actionCreators.articlesSave({
                id: article.id,
                content: article.content
            }));
        },
        onDelete: () => {
            dispatch(StoreApi.actionCreators.articlesDelete({
                id: article.id
            }));
        },
        onSave: () => {
            dispatch(StoreApi.actionCreators.articlesSave({
                id: article.id,
                content: article.content + "blah"
            }));
        },
        onCancel: () => {
            dispatch(StoreApi.actionCreators.articlesSave({
                id: article.id,
                content: article.content + "blah"
            }));
        },
    } as IArticleActionButtonsListProps
}

interface IArticleActionButtonsProps {
    article: IArticle;
}

export const ArticleActionButtons = connect(
    undefined,
    mapDispatchToProps
)(ArticleActionButtonsList);