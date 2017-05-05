import { createStore, Reducer, Action } from "redux";
import { devToolsEnhancer, composeWithDevTools } from 'redux-devtools-extension';

import * as Projects from "../../data/projects.json";
import { ICategory } from "./projects/interfaces";

import * as ResumeData from "../../data/resume.json";
import { IResumeData } from "./resume/interfaces";

export interface IAppState {
    resume: IResumeData;
    projects: ICategory[];
}

const defaultState: IAppState = {
    resume: ResumeData,
    projects: Projects
};

const reducer = (state: IAppState = defaultState, action: Action) => {
    switch (action.type) {
        case "BALKI":
            return state;
        default:
            return state;
    }
};

export const store = createStore<IAppState>(reducer, devToolsEnhancer({}));