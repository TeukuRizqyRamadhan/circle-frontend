export interface IThread {
    id?: number;
    content?: string;
    image?: IThreadImage[];
    author: IAuthor;
}

export interface IThreadImage {
    id?: number;
    url?: string;
}

export interface IAuthor {
    id?: number;
    fullname?: string;
    profile?: IProfile;
}

interface IProfile {
    username?: string;
    bio?: string;
    avatar?: string;
    cover?: string;
}