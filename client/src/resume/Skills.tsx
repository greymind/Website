import * as React from "react";
import { ISkill } from "./interfaces";

interface ISkillsProps {
    skills: ISkill[];
}

export const Skills: React.StatelessComponent<ISkillsProps> = ({ skills }) => {
    return (
        <div className="panel panel-default">
            <div className="panel-heading">
                <a role="button" data-toggle="collapse" data-target="#SkillsList">
                    <h3 className="panel-title">
                        Skills
                    </h3>
                </a>
            </div>
            <ul className="list-group panel-collapse collapse in">
                {skills.map((skill, skillIndex) =>
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
    );
};