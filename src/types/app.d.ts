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
    email?: string;
    profile?: IProfile;
    followedBy: string
    following: string
}

interface IProfile {
    [x: string]: IProfile | RejectWithValue<string, unknown> | PromiseLike<IProfile | RejectWithValue<string, unknown>>;
    username?: string;
    bio?: string;
    avatar?: string;
    cover?: string;
    fullname?: string;
    user?: IAuthor;
}

interface ILike {
    threadId?: number;
    userId?: number;
}