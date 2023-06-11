import { Button, Form, FormRule, Input } from "antd";
import './createCustomer.scss';
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateCustomer() {
    const navigate = useNavigate();

    const onSubmit = async (values: FormRule) => {
        const response = axios.post('http://localhost:9090/customer/', values);
        response.then(() => navigate('/')
        ).catch((err) => console.log(err))
    }
    return (
        <div className="container">
            <Form onFinish={onSubmit}>
                <Form.Item name="name" label="Name">
                    <Input id="name" />
                </Form.Item>
                <Button type="primary" htmlType="submit">Create</Button>
            </Form>
        </div>
    )
}