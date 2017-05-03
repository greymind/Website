export interface IBasics {
    name: string;
    title: string;
    passion: string;
    address: string;
    city: string;
    state: string;
    country: string;
    zip: string;
    email: string;
    phone: string;
}

export interface IEducation {
    degree: string;
    school: string;
    focus: string;
}

export interface ISkill {
    category: string;
    items: string[];
}

export interface IOrganization {
    name: string;
    division: string;
}

export interface ITimePeriod {
    month: string;
    year: number;
}

export interface IExperience {
    title: string;
    organization: IOrganization;
    location: string;
    from: ITimePeriod;
    to: ITimePeriod;
    description: string;
}

export interface IResumeData {
    basics: IBasics;
    education: IEducation[];
    skills: ISkill[];
    experience: IExperience[];
}