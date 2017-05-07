import { IAppState, IAction } from "../store/store-interfaces";
import { StoreApi } from "../store/store-api";

declare module "../store/store-api" {
    interface ActionTypes {
        articlesEdit: ActionType;
    }

    interface ActionCreators {
        articlesEdit: ActionCreator<IArticlesEditPayload>;
    }
}

interface IArticlesEditPayload {
    id: number;
}

StoreApi.actionTypes.articlesEdit = "articles-edit";

StoreApi.addReducer(
    StoreApi.actionTypes.articlesEdit,
    (state, action: IAction<IArticlesEditPayload, undefined>) => {
        var { id } = action.payload!;

        return {
            ...state,
            articles: state.articles
        };
    }
);