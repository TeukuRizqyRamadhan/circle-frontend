import { IRegisterForm } from "../../../../lib/api/validation/useRegisterValidation";
import { useAppDispatch } from "../../../../store";
import { RegisterAsync } from "../../../../store/async/auth";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
interface IProps {
    reset: () => void;
}

export const useRegisterFunction = ({ reset }: IProps) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [error, setError] = useState('');


    const onSubmit = async (data: IRegisterForm) => {
        try {
            await dispatch(RegisterAsync(data)).unwrap();
            reset();
            alert("Akun berhasil dibuat");
            navigate('/auth/login');
            setError('');
        } catch (err) {
            // Set error message if login fails
            setError('Periksa kembali input form nya');
        }

    };

    const onErrorSubmit = (errors: any) => {
        console.log(errors);
    };

    return {
        onSubmit,
        onErrorSubmit,
        error,
    };
};