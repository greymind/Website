export interface IProject {
    name: string;
    url: string;
}

export interface ICategory {
    category: string;
    projects: IProject[];
}

export interface IProjectMenuItem {
    isCategory?: boolean;
    name: string;
    url?: string;
}