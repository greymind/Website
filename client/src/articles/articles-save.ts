import { IArticle } from "./interfaces";
import { IAppState, IAction } from "../store/store-interfaces";
import { StoreApi } from "../store/store-api";

declare module "../store/store-api" {
    interface ActionTypes {
        articlesSave: ActionType;
    }

    interface ActionCreators {
        articlesSave: ActionCreator<IArticlesSavePayload>;
    }
}

interface IArticlesSavePayload {
    id: number;
    content: string;
}

StoreApi.actionTypes.articlesSave = "articlesSave";

StoreApi.addReducer(
    StoreApi.actionTypes.articlesSave,
    (state, action: IAction<IArticlesSavePayload, undefined>) => {
        var { id, content } = action.payload;

        return {
            ...state,
            articles: state.articles.map(article => {
                if (article.id != id)
                    return article;

                return {
                    ...article,
                    content: content
                };
            })
        };
    }
);