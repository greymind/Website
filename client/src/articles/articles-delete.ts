import { IAppState, IAction } from "../store/store-interfaces";
import { StoreApi } from "../store/store-api";

declare module "../store/store-api" {
    interface ActionTypes {
        articlesDelete: ActionType;
    }

    interface ActionCreators {
        articlesDelete: ActionCreator<IArticlesDeletePayload>;
    }
}

interface IArticlesDeletePayload {
    id: number;
}

StoreApi.actionTypes.articlesDelete = "articles-delete";

StoreApi.addReducer(
    StoreApi.actionTypes.articlesDelete,
    (state, action: IAction<IArticlesDeletePayload, undefined>) => {
        var { id } = action.payload;

        return {
            ...state,
            articles: state.articles.filter(article => article.id != id)
        };
    }
);