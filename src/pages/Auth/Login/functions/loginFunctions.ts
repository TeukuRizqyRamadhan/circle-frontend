import { ILoginForm } from "../../../../lib/api/validation/useLoginValidation";
import { useAppDispatch } from "../../../../store";
import { loginAsync } from "../../../../store/async/auth";
import { useState } from 'react';

interface IProps {
    reset: () => void;
}

export const useLoginFunction = ({ reset }: IProps) => {
    const dispatch = useAppDispatch();
    const [error, setError] = useState('');

    const onSubmit = async (data: ILoginForm) => {
        try {
            const result = await dispatch(loginAsync(data)).unwrap();
            reset();
            // Reset error if login is successful
            return result;
            setError('');
        } catch (err) {
            // Set error message if login fails
            setError('Email atau password salah');
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