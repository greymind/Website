import * as React from "react";
import { connect } from "react-redux";

import { IAppState } from "../store";

import { IResumeData } from "./interfaces";
import { Basics } from "./Basics";
import { Skills } from "./Skills";
import { Experience } from "./Experience";
import { Education } from "./Education";

interface IResumeProps {
    data: IResumeData;
}

const ResumeView = ({ data }: IResumeProps) => {
    return (
        <div>
            <Basics {...data.basics} />

            <div>
                <Skills skills={data.skills} />
                <Experience experience={data.experience} />
                <Education education={data.education} />
            </div>

        </div>
    );
};

var mapStateToProps = (state: IAppState) => {
    return {
        data: state.resume
    } as Partial<IResumeProps>;
}

export const Resume = connect(
    mapStateToProps
)(ResumeView);