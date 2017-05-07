import { IAppState, IAction } from "../store/store-interfaces";
import { StoreApi } from "../store/store-api";

declare module "../store/store-api" {
    interface ActionTypes {
        articlesCancel: ActionType;
    }

    interface ActionCreators {
        articlesCancel: ActionCreator<IArticlesCancelPayload>;
    }
}

interface IArticlesCancelPayload {
    id: number;
}

StoreApi.actionTypes.articlesCancel = "articles-cancel";

StoreApi.addReducer(
    StoreApi.actionTypes.articlesCancel,
    (state, action: IAction<IArticlesCancelPayload, undefined>) => {
        var { id } = action.payload!;

        return {
            ...state,
            articles: state.articles
        };
    }
);