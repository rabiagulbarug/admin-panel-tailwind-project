import { useMutation } from '@tanstack/react-query';
import http from "../../utils/http";
import {API_ENDPOINTS} from "../api-endpoints/api-endpoints";
import {useNavigate} from "react-router-dom";
import {ForgotPasswordInputType} from "../../types";

async function passwordForgot(input: ForgotPasswordInputType) {
    return http.post(API_ENDPOINTS.FORGOT_PASSWORD, input).then(res => res.data);
}

export const usePasswordForgotMutation = () => {
    const navigate = useNavigate()
    return useMutation({
        mutationFn: async (input: ForgotPasswordInputType) => {
            return passwordForgot(input);
        },
        onSuccess: async ({ data }) => {
            navigate("/auth/password-reset/")
        },
        onError: (data) => {
            console.log(data, 'mail gönderilemedi');
        },
    });
};
