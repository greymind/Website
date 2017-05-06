import { Action } from "redux";
import { IAppState, IAction } from "./store-interfaces";
import { IActionBase } from "./IActionBase";

export type ActionType = string;

export type ActionCreator<TPayload> = (payload: TPayload, error?: boolean, meta?: any)
    => IAction<TPayload>;

export type ActionReducer = (state: IAppState, action: IActionBase) => IAppState

export interface IActionReducerOptions {
    manualErrorHandling?: boolean;
}

export interface IActionReducer {
    reducer: ActionReducer;
    actionType?: ActionType;
    options?: IActionReducerOptions
}

class ActionTypesIndexer {
    [name: string]: ActionType;
}

export class ActionTypes extends ActionTypesIndexer { }

class ActionCreatorsIndexer {
    [name: string]: ActionCreator<undefined>;
}

export class ActionCreators extends ActionCreatorsIndexer { }

class StoreApiInternal {
    actionTypes = new ActionTypes();
    actionCreators = new ActionCreators();

    private actionReducers: IActionReducer[] = [];

    addGlobalReducer = (reducer: ActionReducer, options?: IActionReducerOptions) => {
        this.addReducer(null, reducer, options);
    }

    addReducer = (actionType: ActionType, reducer: ActionReducer, options?: IActionReducerOptions) => {
        this.actionReducers = [
            ...this.actionReducers,
            {
                reducer: reducer,
                actionType: actionType,
                options: { ...options }
            }
        ]
    }

    getReducers = () => this.actionReducers;
}

export const StoreApi = new StoreApiInternal();