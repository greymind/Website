import * as React from "react";

export interface Basic {
    name: string;
    title: string;
    address: string;
    city: string;
    state: string;
    country: string;
    zip: string;
    email: string;
    phone: string;
}

export interface Education {
    degree: string;
    school: string;
    focus: string;
}

export interface Skill {
    category: string;
    items: string[];
}

export interface Organization {
    name: string;
    division: string;
}

export interface TimePeriod {
    month: string;
    year: number;
}

export interface Experience {
    title: string;
    organization: Organization;
    location: string;
    from: TimePeriod;
    to: TimePeriod;
    description: string;
}

export interface IResumeProps {
    basics: Basic;
    education: Education[];
    skills: Skill[];
    experience: Experience[];
}

export interface IResumeState { }

export class Resume extends React.Component<IResumeProps, IResumeState> {
    render() {
        return (
            <div>
                <div className="jumbotron">
                    <div><strong>{this.props.basics.name}</strong></div>
                    <div><em>{this.props.basics.title}</em></div>
                    <div>
                        <div>{this.props.basics.address}</div>
                        <div>{this.props.basics.city}, {this.props.basics.state}, {this.props.basics.zip}</div>
                        <div>{this.props.basics.email}</div>
                        <div>{this.props.basics.phone}</div>
                    </div>
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
                            {this.props.skills.map((skill, skillIndex) =>
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
                            {this.props.experience.map((experience, experienceIndex) =>
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
                            {this.props.education.map(education =>
                                <li className="list-group-item">
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