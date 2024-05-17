import { Box, Button, TextField, Typography } from "@mui/material";
import { useEffect } from "react";
import { Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import useLoginValidation from "../../../lib/api/validation/useLoginValidation";
import { useAppSelector } from "../../../store";
import { useLoginFunction } from "./functions/loginFunctions";

const Login = () => {
    const authState = useAppSelector((state) => state.auth);

    const { control, reset, handleSubmit } = useLoginValidation();
    const { onErrorSubmit, onSubmit } = useLoginFunction({ reset });

    useEffect(() => {
        console.log(authState);
    }, [authState]);

    return (
        <Box>
            <Typography>Circle</Typography>
            <Typography>Login To Circle</Typography>
            <form>
                <Box
                    width={"100%"}
                    sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                >
                    <Controller
                        control={control}
                        name="email"
                        render={({ field, fieldState }) => (
                            <TextField
                                label="Email"
                                color="success"
                                sx={{ borderColor: "white" }}
                                {...field}
                                helperText={fieldState.error?.message}
                                error={Boolean(fieldState.error)}
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name="password"
                        render={({ field, fieldState }) => (
                            <TextField
                                label="Password"
                                color="success"
                                sx={{ borderColor: "white" }}
                                {...field}
                                helperText={fieldState.error?.message}
                                error={Boolean(fieldState.error)}
                            />
                        )}
                    />
                    <Link
                        to={"#"}
                        style={{
                            textDecoration: "none",
                            color: "white",
                            textAlign: "right",
                        }}
                    >
                        Forgot Password?
                    </Link>
                    <Button
                        variant="contained"
                        color="success"
                        onClick={handleSubmit(onSubmit, onErrorSubmit)}
                        sx={{ color: "white", borderRadius: "20px" }}
                    >
                        LOGIN
                    </Button>
                </Box>
            </form>
        </Box>
    );
};

export default Login;