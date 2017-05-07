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
    options?: IActionReducerOptions;
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
        this.addReducer(undefined, reducer, options);
    }

    addReducer = (actionType: ActionType | undefined, reducer: ActionReducer, options?: IActionReducerOptions) => {
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

    validateActionTypesAreUnique = () => {
        interface KeyValues {
            key: string;
            values: string[];
        }

        interface StringKeyValuesMap {
            [key: string]: KeyValues;
        }

        const actionTypesCount = Object.keys(this.actionTypes)
            .map(actionType => {
                return {
                    key: this.actionTypes[actionType],
                    values: [actionType]
                } as KeyValues;
            })
            .reduce((prev, current) => {
                var values = prev[current.key]
                    ? prev[current.key].values.concat(current.values)
                    : current.values;

                return {
                    ...prev,
                    [current.key]: {
                        ...current,
                        values: values
                    } as KeyValues
                };
            }, {} as StringKeyValuesMap);

        const getDuplicates = (map: StringKeyValuesMap) => {
            return Object.keys(map)
                .filter((key) => map[key].values.length > 1)
                .map(key => {
                    var item = map[key];
                    return `String [${item.key}] is duplicated by actions [${item.values.join(", ")}]`;
                });
        }

        const duplicates = getDuplicates(actionTypesCount)

        if (duplicates.length > 0) {
            var errorMessage = duplicates.join("\n");
            throw Error(`The following action type values are not unique: \n${errorMessage}`);
        }
    }

    generateActionCreators = () => {
        var actionTypes = Object.keys(this.actionTypes);
        actionTypes.forEach(actionType => {
            if (this.actionCreators[actionType] == null) {
                this.actionCreators[actionType] =
                    (payload: any, error: boolean, meta: any) => {
                        return {
                            type: this.actionTypes[actionType],
                            payload,
                            error,
                            meta
                        }
                    };
            }
        })
    }

}

export const StoreApi = new StoreApiInternal();