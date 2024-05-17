import { createAsyncThunk } from "@reduxjs/toolkit";
import { API, setAuthToken } from "../../lib/api";

interface ILoginForm {
    email: string;
    password: string;
}

export const loginAsync = createAsyncThunk<
    string,
    ILoginForm,
    { rejectValue: string }
>("auth/login", async (props, { rejectWithValue }) => {
    try {
        console.log("props", props);
        const { data } = await API.post("/login", props);

        console.log("data", data);

        const token = data.token;
        setAuthToken(token);
        localStorage.setItem("token", token);
        return token;
    } catch (error) {
        return rejectWithValue("error");
    }
});

export const authCheckAsync = createAsyncThunk<
    string,
    string,
    { rejectValue: string }
>("auth/authCheck", async (token, { rejectWithValue }) => {
    try {
        const { data } = await API.get("/profile", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        setAuthToken(token);

        console.log("data", data);
        return token;
    } catch (error) {
        setAuthToken();
        localStorage.removeItem("token");
        return rejectWithValue("error");
    }
});