import { Action } from "redux";
import { ActionType } from "./store-api";

export interface IActionBase<TError extends Error = Error> extends Action {
    type: ActionType;
    payload?: any | TError;
    error?: boolean;
    meta?: any;
}