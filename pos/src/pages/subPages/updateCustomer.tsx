import { Button, Form, FormRule, Input } from "antd";
import './updateCustomer.scss';
import axios from "axios";

export default function UpdateCustomer(props: any) {

    console.log(props.data)

    const onSubmit = async (values: FormRule) => {
        const response = axios.patch('http://localhost:9090/customer/' + props.data._id, values);
        response.then(() => {
            props.loadCustomers()
            props.showUpdateForm(false)
        }
        ).catch((err) => console.log(err))
    }
    return (
        <div className="container">
            <Form onFinish={onSubmit} initialValues={{ name: props.data.name }}>
                <Form.Item name="name" label="Name">
                    <Input id="name" />
                </Form.Item>
                <Button type="primary" htmlType="submit">Update</Button>
                <Button type="primary" htmlType="submit" onClick={() => props.showUpdateForm(false)} style={{ background: "red", marginLeft: "5px" }}>Cancel</Button>
            </Form>
        </div>
    )
}