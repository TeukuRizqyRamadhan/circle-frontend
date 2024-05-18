import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export interface IRegisterForm {
    fullname: string;
    email: string;
    password: string;
}

const useRegisterValidation = () => {
    const initialValue: IRegisterForm = {
        fullname: "",
        email: "",
        password: "",
    };

    const schema = yup.object().shape({
        fullname: yup.string().required("Fullname is required"),
        email: yup.string().email().required("Email is required"),
        password: yup
            .string()
            .required("Password is required")
            .min(8, "Password must be at least 8 characters"),
    });

    return useForm<IRegisterForm>({
        defaultValues: initialValue,
        mode: "all",
        reValidateMode: "onBlur",
        resolver: yupResolver(schema),
    });
};

export default useRegisterValidation;