export interface IThread {
    id?: string;
    content?: string;
    image?: IThreadImage[];
    like?: ILike[];
    replies: IReplies[];
    author: IAuthor;
    createdAt: string;
    updatedAt: string;
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

interface ILike {
    threadId?: number;
    userId?: number;
}