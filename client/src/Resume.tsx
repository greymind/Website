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
                {this.props.basics.name}
                {this.props.basics.email}
            </div>
        );
    }
}