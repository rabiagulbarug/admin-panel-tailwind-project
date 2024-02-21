import { useMutation } from '@tanstack/react-query';
import {RegisterInputType} from '../../types';
import http from "../../utils/http";
import {API_ENDPOINTS} from "../api-endpoints/api-endpoints";
import {useNavigate} from "react-router-dom";

async function register(input: RegisterInputType) {
    return http.post(API_ENDPOINTS.REGISTER, input);
}

export const useRegisterMutation = () => {
    const navigate = useNavigate()
    return useMutation({
        mutationFn: async (input: RegisterInputType) => {
            return register(input);
        },
        onSuccess: async ({ data }) => {
            navigate('/auth/confirm/')
        },
        onError: (data) => {
            console.log(data, 'register error response');
        },
    });
};
