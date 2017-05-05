import { createStore, Reducer, Action } from "redux";
import { devToolsEnhancer, composeWithDevTools } from 'redux-devtools-extension';
import * as Moment from "moment";

import * as Projects from "../../data/projects.json";
import { ICategory } from "./projects/interfaces";

import * as ResumeData from "../../data/resume.json";
import { IResumeData } from "./resume/interfaces";

import { IArticle } from "./articles/interfaces";

export interface IAppState {
    resume: IResumeData;
    projects: ICategory[];
    articles: IArticle[];
}

const defaultState: IAppState = {
    resume: ResumeData,
    projects: Projects,
    articles: [
        {
            title: "Title 2",
            content: "Test 2 asdf gg",
            author: "Balki",
            timestamp: Moment.now() + 1
        },
        {
            title: "Title 1",
            content: "Test 1 is the awesome sauce Test 1 is the awesome sauceTest 1 is s",
            author: "Balki",
            timestamp: Moment.now()
        },
        {
            title: "Title 3",
            author: "Balki",
            content: "Test 3",
            timestamp: Moment.now() + 2
        }
    ]
};

const reducer = (state: IAppState, action: Action) => {
    switch (action.type) {
        case "BALKI":
            return state;
        default:
            return state;
    }
};

export const configureStore = (preloadedState: IAppState) => {
    const store = createStore<IAppState>(
        reducer,
        preloadedState,
        devToolsEnhancer({})
    );

    return store;
}

export const store = configureStore(defaultState);