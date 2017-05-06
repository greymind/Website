import * as _ from "lodash";
import { createStore, Reducer, Action, combineReducers, compose } from "redux";
import { devToolsEnhancer, composeWithDevTools } from 'redux-devtools-extension';

import { IAppState } from "./store-interfaces";
import { defaultState } from "./store-default-state";
import { StoreApi, ActionType, ActionCreator, ActionReducer, IActionReducer } from "./store-api";
import { IActionBase } from "./IActionBase";

import "./reducers";

const generateActionCreators = () => {
    var actionTypes = Object.keys(StoreApi.actionTypes);
    actionTypes.forEach(actionType => {
        if (StoreApi.actionCreators[actionType] == null) {
            StoreApi.actionCreators[actionType] =
                (payload: any, error: boolean, meta: any) => {
                    return {
                        type: StoreApi.actionTypes[actionType],
                        payload,
                        error,
                        meta
                    }
                };
        }
    })
}

const rootReducer = (state: IAppState, action: IActionBase) => {
    var reducers = StoreApi.getReducers();

    if (reducers.length == 0)
        return state;

    var finalState = reducers.reduce((nextState, reducer) => {
        if (!reducer.options.manualErrorHandling) {
            if (action.error || action.payload instanceof Error)
                throw action.payload;
        }

        const shouldRunReducerForAction = reducer.actionType == null
            || reducer.actionType == action.type;

        const newState = shouldRunReducerForAction
            ? reducer.reducer(nextState, action)
            : nextState;

        return Object.assign(nextState, newState);
    }, { ...state });

    return finalState;
};

const configureStore = (preloadedState: IAppState) => {
    const store = createStore<IAppState>(
        rootReducer,
        preloadedState,
        devToolsEnhancer({})
    );

    return store;
}

generateActionCreators();

export const store = configureStore(defaultState);