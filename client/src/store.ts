import { createStore, Store, Reducer, Action } from "redux";
import { devToolsEnhancer, composeWithDevTools } from 'redux-devtools-extension';

export interface IAppState {

}

const reducer = (state: IAppState = {}, action: Action) => {
    switch (action.type) {
        case "BALKI":
            return state;
        default:
            return state;
    }
};

export const store = createStore<IAppState>(reducer, devToolsEnhancer({}));

console.log(store.getState());