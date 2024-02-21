import { useMutation } from '@tanstack/react-query';
import {ResetPasswordInputType} from "../../types";
import {API_ENDPOINTS} from "../api-endpoints/api-endpoints";
import http from "../../utils/http";
import {useNavigate} from "react-router-dom";

async function passwordReset(input: ResetPasswordInputType) {
    return http.post(API_ENDPOINTS.RESET_PASSWORD, input).then(res => res.data);
}

export const usePasswordResetMutation = () => {
    const navigate = useNavigate()
    return useMutation({
        mutationFn: async (input: ResetPasswordInputType) => {
            return passwordReset(input);
        },
        onSuccess: async ({ data }) => {
            navigate('/auth/password-success/')
        },
        onError: (data) => {
            console.log(data, 'şifre yenilenmedi.');
        },
    });
};
