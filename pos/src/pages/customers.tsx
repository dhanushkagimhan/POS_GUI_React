
import { Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import './customer.scss'
import { useEffect, useState } from 'react';
import axios from 'axios';

interface DataType {
    _id: string;
    name: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>Invite {record.name}</a>
                <a>Delete</a>
            </Space>
        ),
    },
];

export default function Customers() {
    const [customerDate, setCustomerDate] = useState<DataType[] | undefined>(undefined);

    const getCustomers = async () => {
        const { data } = await axios.get('http://localhost:9090/customer/');
        console.log(data.customers)
        setCustomerDate(data.customers)
    }

    useEffect(() => {
        getCustomers()
    }, [])

    return (
        <div className='container'>
            <Table columns={columns} dataSource={customerDate} />
        </div>
    )
}