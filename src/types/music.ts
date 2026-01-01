type Links = {
    tooLost: string;
    spotify: string;
    appleMusic: string;
    youtube?: string;
};

export type Track = {
    title: string;
    collaborators?: string[];
};

export type Single = Track & {
    type: "single";
    slug: string;
    cover: string;
    coverDigital: string;
    description?: string;
    releaseDate: Date;
    spotify?: string;
    links: Links;
    isNew?: boolean;
};

export type Project = {
    type: "project";
    slug: string;
    title: string;
    cover: string;
    coverDigital: string;
    description?: string;
    releaseDate: Date;
    links: Links;
    tracks: Track[];
    isNew?: boolean;
};

export type Music = Single | Project;
