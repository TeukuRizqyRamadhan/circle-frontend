import { AxiosResponse } from "axios";
import { API } from "..";
import { IProfile } from "../../../types/app";

type ProfileResponse = AxiosResponse<IProfile>;

export const getProfile = async () => {
    return await API.get<IProfile>("/profile");
}