import { IResume } from "../resume/interfaces";
import { IProjectsWithCategory } from "../projects/interfaces";
import { IArticle } from "../articles/interfaces";
import { IActionBase } from "./IActionBase";

export interface IAppState {
    resume: IResume;
    projects: IProjectsWithCategory[];
    articles: IArticle[];
}

export interface IAction<TPayload, TError extends Error | undefined = undefined> extends IActionBase {
    payload?: TPayload | TError;
}