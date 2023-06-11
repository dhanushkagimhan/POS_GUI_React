
import { Button, Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import './customer.scss'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
        setCustomerDate(data.customers)
    }

    useEffect(() => {
        getCustomers()
    }, [])

    return (
        <div className='container'>
            <div className='createButton'><Link to='/create'><Button type='primary'>Create new customer</Button> </Link></div>
            <Table columns={columns} dataSource={customerDate} rowKey={(record) => record._id} />
        </div>
    )
}