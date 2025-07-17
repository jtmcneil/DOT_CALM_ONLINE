export type Track = {
    title: string;
    cover: string;
    description?: string;
    releaseDate: Date;
    link?: string;
    collaborators?: string[];
};

export type Project = {
    title: string;
    cover: string;
    description?: string;
    releaseDate: Date;
    link?: string;
    tracks: Track[];
};

export type Music = Track | Project;
