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
            title: "Tribute",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non leo non nisi finibus tincidunt. Donec pellentesque porttitor massa, in facilisis augue lobortis sit amet. Nunc efficitur orci vitae felis convallis sodales. Cras sed augue diam. Nulla in auctor libero. Quisque aliquet nunc urna, ac porttitor dolor euismod eu. Praesent urna arcu, tempus at elit a, ultricies eleifend ligula. Morbi est arcu, dignissim at efficitur fringilla, consequat sed eros. Mauris at elementum libero. Phasellus auctor diam ut sapien porta, vitae convallis odio facilisis. Aliquam euismod vulputate auctor. Praesent convallis urna non pharetra sollicitudin. Nulla volutpat vulputate risus a egestas. Aliquam sit amet nunc erat. Cras ullamcorper dapibus purus, quis maximus nisi feugiat tempor. Cras posuere efficitur pharetra.\n\n"
            + "Proin ac tincidunt lacus. Nunc massa quam, fermentum sit amet nulla nec, imperdiet ornare lacus. Nulla magna elit, facilisis non suscipit vitae, tincidunt vitae lectus. Curabitur vel dictum lectus. Praesent convallis laoreet dolor elementum convallis. Maecenas et molestie purus. Suspendisse maximus sem at nibh faucibus sodales. Aenean sagittis dui in tincidunt porttitor. Integer vestibulum ullamcorper gravida. Aliquam lobortis arcu vel ipsum rutrum sodales. In fringilla cursus laoreet. Nam at posuere arcu. Vestibulum ut lacus libero. Curabitur vitae arcu egestas, blandit lectus et, euismod orci.\n\n"
            + "Duis fringilla erat at dui ullamcorper commodo. Cras eleifend ipsum massa, non commodo urna volutpat eget. Sed congue molestie arcu. Nunc blandit consequat euismod. Suspendisse quis mi dapibus, volutpat velit ac, consequat nibh. Sed posuere vitae enim ut lobortis. Quisque pulvinar posuere tincidunt. Suspendisse sodales turpis rutrum lacus fermentum, et congue diam rhoncus. Pellentesque varius laoreet hendrerit. Aliquam erat volutpat. Proin at tellus et libero malesuada efficitur. Sed justo tortor, volutpat eget rhoncus quis, viverra ut nisi. Pellentesque porttitor massa at gravida pulvinar. Vestibulum elementum consequat est venenatis venenatis. Ut id velit id purus bibendum viverra. Nam ut aliquam urna, a viverra lorem.\n\n",
            author: "Balki",
            timestamp: Moment("2017-03-07").valueOf()
        },
        {
            title: "Teaching by Reinvention",
            content: "Everything has context and history.",
            author: "Balki",
            timestamp: Moment("2017-05-05").valueOf()
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