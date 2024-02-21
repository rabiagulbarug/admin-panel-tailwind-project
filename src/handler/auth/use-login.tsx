import {useMutation} from '@tanstack/react-query';
import {useNavigate} from "react-router-dom";
import http from "../../utils/http";
import {API_ENDPOINTS} from "../api-endpoints/api-endpoints";
import {LoginInputType} from "../../types";

async function login(input: LoginInputType) {
    return http.post(API_ENDPOINTS.LOGIN, input);
}

export const useLoginMutation = () => {
    const navigate = useNavigate()
    return useMutation({
        mutationFn: async (input: LoginInputType) => {
            return login(input);
        },
        onSuccess: async ({ data }) => {
            const { token, refreshToken } = data;
            localStorage.setItem("token", token);
            localStorage.setItem("refreshToken", refreshToken);
            navigate('/dashboard/');
        },
        onError: (data) => {
            console.log(data, 'login error response');
        },
    });
};
