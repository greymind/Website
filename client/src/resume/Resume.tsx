import * as React from "react";

import { IResumeData } from "./interfaces";
import { Basics } from "./Basics";
import { Skills } from "./Skills";
import { Experience } from "./Experience";
import { Education } from "./Education";

import * as ResumeData from "../../../data/resume.json";

interface IResumeProps {
    data: IResumeData;
}

export const Resume: React.StatelessComponent<IResumeProps> = ({ data }) => {
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

Resume.defaultProps = {
    data: ResumeData
};