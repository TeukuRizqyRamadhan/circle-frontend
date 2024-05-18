import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import { useEffect } from "react";
import { Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import useLoginValidation from "../../../lib/api/validation/useLoginValidation";
import { useAppSelector } from "../../../store";
import { useLoginFunction } from "./functions/loginFunctions";

const Login = () => {
    const authState = useAppSelector((state) => state.auth);

    const { control, reset, handleSubmit } = useLoginValidation();
    const { onErrorSubmit, onSubmit, error } = useLoginFunction({ reset });

    useEffect(() => {
        console.log(authState);
    }, [authState]);

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}
        >
            <Box
                sx={{ width: "500px" }}>
                <Typography sx={{ color: "#04A51E", fontSize: 40 }}>circle</Typography>
                <Typography sx={{ color: "white", fontSize: 40, fontWeight: "semibold" }}>Login To Circle</Typography>
                <form>
                    <Box
                        width={"100%"}
                        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                    >
                        {error && <Alert severity="error">{error}</Alert>}
                        <Controller
                            control={control}
                            name="email"
                            render={({ field, fieldState }) => (
                                <TextField
                                    label="Email"
                                    color="success"
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': {
                                                borderColor: 'white',
                                            },
                                            '&:hover fieldset': {
                                                borderColor: '#04A51E',
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: '#04A51E',
                                            },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: 'white',
                                        },
                                        '& .MuiInputLabel-root.Mui-focused': {
                                            color: '#04A51E',
                                        },
                                        input: { color: 'white' },
                                    }}
                                    {...field}
                                    helperText={fieldState.error?.message}
                                    error={Boolean(fieldState.error)}
                                    required
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name="password"
                            render={({ field, fieldState }) => (
                                <TextField
                                    label="Password"
                                    type="password"
                                    color="success"
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': {
                                                borderColor: 'white',
                                            },
                                            '&:hover fieldset': {
                                                borderColor: '#04A51E',
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: '#04A51E',
                                            },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: 'white',
                                        },
                                        '& .MuiInputLabel-root.Mui-focused': {
                                            color: '#04A51E',
                                        },
                                        input: { color: 'white' },
                                    }}
                                    {...field}
                                    helperText={fieldState.error?.message}
                                    error={Boolean(fieldState.error)}
                                    required
                                />
                            )}
                        />
                        <Link
                            to="#"
                            style={{
                                textDecoration: 'none',
                                color: 'white',
                                textAlign: 'right',
                            }}
                        >
                            Forgot Password?
                        </Link>
                        <Button
                            onClick={handleSubmit(onSubmit, onErrorSubmit)}
                            sx={{ bgcolor: '#04A51E', color: 'white', borderRadius: '20px' }}
                        >
                            LOGIN
                        </Button>
                        <Link to={"/auth/register"} style={{ textDecoration: "none" }}><Typography sx={{ color: "white" }}>Don't have an account? Register</Typography></Link>
                    </Box>
                </form>
            </Box>
        </Box>
    );
};

export default Login;