import * as React from "react";

import {
    Basic,
    Education,
    Experience,
    IResumeData,
    Organization,
    Skill,
    TimePeriod
} from "./interfaces";

import * as ResumeData from "../../../data/resume.json";

export interface IResumeState {
    data: IResumeData
}

export class Resume extends React.Component<undefined, IResumeState> {
    state: IResumeState = {
        data: ResumeData
    }

    render() {
        var data = this.state.data;

        return (
            <div>
                <div className="jumbotron">
                    <div><strong>{data.basics.name}</strong></div>
                    <div>{data.basics.title}</div>
                    <div><em>{data.basics.passion}</em></div>
                </div>

                <div>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <a role="button" data-toggle="collapse" data-target="#SkillsList">
                                <h3 className="panel-title">
                                    Skills
                                </h3>
                            </a>
                        </div>
                        <ul className="list-group panel-collapse collapse in">
                            {data.skills.map((skill, skillIndex) =>
                                <li key={skillIndex} className="list-group-item">
                                    <strong>{skill.category} | </strong>
                                    <em>
                                        {skill.items.map((item, itemIndex, itemArray) =>
                                            <span key={itemIndex}>
                                                <span>{item}</span>
                                                {itemIndex !== itemArray.length - 1 ? <span>, </span> : <span></span>}
                                            </span>
                                        )}
                                    </em>
                                </li>
                            )}
                        </ul>
                    </div>

                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <a role="button" data-toggle="collapse" data-target="#ExperienceList">
                                <h3 className="panel-title">
                                    Experience
                                </h3>
                            </a>
                        </div>
                        <ul className="list-group panel-collapse collapse in">
                            {data.experience.map((experience, experienceIndex) =>
                                <li key={experienceIndex} className="list-group-item">
                                    <div><strong>{experience.title}</strong>
                                        <br />{experience.organization.division} @ <em>{experience.organization.name}</em>
                                        <br />{experience.from.month} {experience.from.year} - {experience.to.month} {experience.to.year},
                        {experience.location}
                                    </div>
                                    <div><em>{experience.description}</em></div>
                                </li>
                            )}
                        </ul>
                    </div>

                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <a role="button" data-toggle="collapse" data-target="#EducationList">
                                <h3 className="panel-title">
                                    Education
                    </h3>
                            </a>
                        </div>
                        <ul className="list-group panel-collapse collapse in">
                            {data.education.map((education, educationIndex) =>
                                <li key={educationIndex} className="list-group-item">
                                    <div><strong>{education.degree}</strong>
                                        <br />{education.school}
                                        <br /><em>{education.focus}</em>
                                    </div>
                                </li>)}
                        </ul>
                    </div>
                </div>

            </div>
        );
    }
}