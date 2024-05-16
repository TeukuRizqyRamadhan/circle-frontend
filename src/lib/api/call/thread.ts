import { AxiosResponse } from "axios";
import { API } from "..";
import { IThread } from "../../../types/app";

type TThreadsResponse = AxiosResponse<IThread[]>;

export const getThread = async (id: string) => {
    return await API.get(`/threads/${id}`);
};

export const getThreads = async (): Promise<TThreadsResponse> => {
    return await API.get(`/threads`);
};