import { createAsyncThunk } from "@reduxjs/toolkit";
import { IProfile } from "../../types/app";
import { getProfile } from "../../lib/api/call/profile";

export const getProfileAsync = createAsyncThunk<
    IProfile,
    void,
    { rejectValue: string }
>("profile/getProfile", async (_, { rejectWithValue }) => {
    try {
        const { data } = await getProfile();
        console.log("data", data);
        return data.data
    } catch (error) {
        return rejectWithValue("error");
    }
});