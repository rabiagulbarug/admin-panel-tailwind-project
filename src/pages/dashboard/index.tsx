import {Table} from "../../component/table/table";
import {useProductsListQuery} from "../../handler/dashboard/use-product-list";

export const columnsAnnouncements = [
    { key: '_id', header: 'İlan ID' },
    {
        key: 'createdAt',
        header: 'İlan Tarihi',
        render: (rowData: any) => {
            const formattedDate = new Date(
                rowData.createdAt
            ).toLocaleDateString('tr-TR');

            return <span>{formattedDate}</span>;
        },
    },
    { key: 'title', header: 'İlan Başlığı' },
    { key: 'price', header: 'Fiyat' },
];

const Dashboard = () => {
    return (
        <div>
            <Table query={useProductsListQuery} columns={columnsAnnouncements}/>
        </div>
    )
}

export default Dashboard
