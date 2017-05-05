import * as React from "react";
import { IEducation } from "./interfaces";

interface IEducationProps {
    education: IEducation[];
}

export const Education: React.StatelessComponent<IEducationProps> = ({ education }) => {
    return (
        <div className="panel panel-default">
            <div className="panel-heading">
                <a role="button" data-toggle="collapse" data-target="#EducationList">
                    <h3 className="panel-title">
                        Education
                    </h3>
                </a>
            </div>
            <ul id="EducationList" className="list-group panel-collapse collapse in">
                {education.map((ed, edIndex) =>
                    <li key={edIndex} className="list-group-item">
                        <div><strong>{ed.degree}</strong>
                            <br />{ed.school}
                            <br /><em>{ed.focus}</em>
                        </div>
                    </li>)}
            </ul>
        </div>
    );
};