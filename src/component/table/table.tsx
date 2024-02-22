import {Sort, SortOrder, TableProps} from "../../types";
import {useState} from "react";

export const Table = ({query, filters, columns, id, dataResolver,}: TableProps) => {

    const [sort, setSort] = useState<Sort>({
        sortBy: 'createdAt',
        sortOrder: SortOrder.DESC,
    });
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const sanitizedFilters = Object.entries(filters ?? {})
        .filter(([_, value]) => value && value.length)
        .reduce((acc, [key, value]) => {
            acc[key] = value;
            return acc;
        }, {} as { [key: string]: string });

    const { data: response } = query({
        sort,
        filters: sanitizedFilters,
        limit,
        page,
        _id: id,
    });

    dataResolver = dataResolver ? dataResolver : (resp: any) => resp?.data.data;
    const data = dataResolver ? dataResolver(response) : [];

    return (
        <div>
            <table className="min-w-full border border-gray-300">
                <thead>
                <tr className='h-[56px] w-full border-b '>
                    {columns.map((column) => (
                        <th className=' p-4 font-medium text-base text-left' key={column.key}>
                            {column.header}
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {data?.map((item, index) => (
                    <tr key={index} className='h-[56px] p-4 border-b '>
                        {columns.map((column) => (
                            <td className='p-4' key={column.key}>
                                {' '}
                                {column.render
                                    ? column.render(item)
                                    : item[column.key]}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}
