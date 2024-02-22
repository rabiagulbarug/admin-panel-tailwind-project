import {UseQueryResult} from "@tanstack/react-query";
import { AxiosResponse } from 'axios';

export type LoginInputType = {
    email: string;
    password: string;
};

export type RegisterInputType = {
    email: string;
    password: string;
};

export type ForgotPasswordInputType = {
};


export type ResetPasswordInputType = {
};

export type Column = {
    key: string;
    header: string;
    type?: string;
    render?: (rowData: Record<string, any>) => React.ReactNode;
};

export type TableProps = {
    columns: Column[];
    query: (
        params: ListQueryParams
    ) => UseQueryResult<AxiosResponse<ListQueryResponse>>;
    id?: string;
    filters?: Filter;
    dataResolver?: (response: AxiosResponse<unknown> | undefined) => any[];
};

export type ListQueryParams = {
    filters?: Filter;
    sort?: Sort;
    page: number;
    limit: number;
    _id?: string;
};

export type ListQueryResponse<T extends any = any> = {
    data: T[];
    meta: {
        page: number;
        pageSize: number;
        totalItems: number;
        totalPages: number;
    };
};

export enum SortOrder {
    ASC = 'asc',
    DESC = 'desc',
}

export type Sort = {
    sortBy: string;
    sortOrder?: SortOrder;
};

export type Filter = {
    [key: string]: string;
};
