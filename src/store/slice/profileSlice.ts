import { createSlice } from "@reduxjs/toolkit";
import { IProfile } from "../../types/app";
import { getProfileAsync } from "../../store/async/profileAsync";

const initialState: { profile: IProfile } = {
    profile: {} as IProfile,
}

export const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProfileAsync.fulfilled, (state, action) => {
            state.profile = action.payload;
        });
        builder.addCase(getProfileAsync.rejected, (_, action) => {
            console.log("rejected", action);
        })
        builder.addCase(getProfileAsync.pending, (_, action) => {
            console.log("pending", action);
        })
    },
});

export default profileSlice.reducer;