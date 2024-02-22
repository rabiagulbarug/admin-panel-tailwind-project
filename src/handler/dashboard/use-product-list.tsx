import {useQuery} from "@tanstack/react-query";
import axios, {AxiosResponse} from "axios";
import {ListQueryParams} from "../../types";
import http from "../../utils/http";
import {API_ENDPOINTS} from "../api-endpoints/api-endpoints";
import {listQueryString} from "../../types/list-query-string";

async function productsList(params: ListQueryParams) {
    return await http.get(`${API_ENDPOINTS.PRODUCTS}?${listQueryString(params)}`);

}

export const useProductsListQuery = ({filters, sort, page, limit}: ListQueryParams) => {
    return useQuery<AxiosResponse>({
            queryKey: [API_ENDPOINTS.PRODUCTS, filters, sort, page, limit],
            queryFn: () => productsList({filters, sort, page, limit})
        }
    )
};
