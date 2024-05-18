import { AxiosResponse } from "axios";
import { API } from "..";
import { IThread } from "../../../types/app";

type TThreadsResponse = AxiosResponse<IThread[]>;

export const getThread = async (id: string) => {
    return await API.get(`/threads/${id}`);
};

export const getThreads = async (): Promise<TThreadsResponse> => {
    const response = await API.get<IThread[]>(`/threads`);
    const sortedThreads = response.data.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    return {
        ...response,
        data: sortedThreads
    };
};