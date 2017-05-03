import * as React from "react";
import * as Moment from "moment";

import { IExperience } from "./interfaces";

interface IExperienceProps {
    experience: IExperience[];
}

export const Experience: React.StatelessComponent<IExperienceProps> = ({ experience }) => {
    function getNowMonth(): string {
        return Moment().format("MMM");
    }

    function getNowYear(): number {
        return Moment().year();
    }

    return (
        <div className="panel panel-default">
            <div className="panel-heading">
                <a role="button" data-toggle="collapse" data-target="#ExperienceList">
                    <h3 className="panel-title">
                        Experience
                    </h3>
                </a>
            </div>
            <ul className="list-group panel-collapse collapse in">
                {experience.map((exp, expIndex) =>
                    <li key={expIndex} className="list-group-item">
                        <div><strong>{exp.title}</strong>
                            <br />{exp.organization.division} @ <em>{exp.organization.name}</em>
                            <br />{exp.from.month} {exp.from.year}
                            &nbsp;- {exp.to.month ? exp.to.month : getNowMonth()}
                            &nbsp;{exp.to.year ? exp.to.year : getNowYear()},
                                        &nbsp;{exp.location}
                        </div>
                        <div><em>{exp.description}</em></div>
                    </li>
                )}
            </ul>
        </div>
    );
};