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

export class ActionTypes { }

class ActionCreatorsIndexer {
    [name: string]: ActionCreator<undefined>;
}

export class ActionCreators extends ActionCreatorsIndexer {

}

export class StoreApi {
    public static actionTypes = new ActionTypes();
    public static actionCreators = new ActionCreators();

    private static actionReducers: IActionReducer[] = [];

    public static addGlobalReducer = (reducer: ActionReducer, options?: IActionReducerOptions) => {
        StoreApi.addReducer(null, reducer, options);
    }

    public static addReducer = (actionType: ActionType, reducer: ActionReducer, options?: IActionReducerOptions) => {
        StoreApi.actionReducers = [
            ...StoreApi.actionReducers,
            {
                reducer: reducer,
                actionType: actionType,
                options: { ...options }
            }
        ]
    }

    public static getReducers = () => StoreApi.actionReducers;
}