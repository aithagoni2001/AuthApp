import { Alert, Button, Form, Input, Radio } from "antd";
import { useForm } from "antd/es/form/Form";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const Signup =  ({ auth }) => {

    const [apiStatus, setApiStatus] = useState("init");

    const [form]=useForm();

    const onSubmitForm = async (data) => {
        setApiStatus("pending")
   console.log(data);
    const {success}=await auth.signUp(data);
    setApiStatus(success?"success":"error")

    };

        useEffect(()=>{
            if(apiStatus==="success"){
                form.resetFields()
            }
        },[apiStatus]);
    return (
        <div className="container">
            <Form className="form" form={form} onFinish={onSubmitForm} layout="vertical">
                {apiStatus==="success"&&<Alert closable showIcon type="success" message="signin success you can login now!!" />}
                {apiStatus==="error"&&<Alert closable showIcon type="error" message="signup failed....." />}
                <Form.Item
                    label="E-mail"
                    name="email"
                    rules={[
                        { required: true, message: "Enter Email" }
                    ]}
                >
                    <Input placeholder="Email" />
                </Form.Item>
                
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                        { required: true, message: "Please Enter Name" }
                    ]}
                >
                    <Input placeholder="Name" />
                </Form.Item>
                
                <Form.Item
                    label="City"
                    name="city"
                    rules={[
                        { required: true, message: "Please Enter City" }
                    ]}
                >
                    <Input placeholder="Enter City" />
                </Form.Item>

                <Form.Item
                    name="gender"
                    label="Select your gender"
                    rules={[
                        { required: true, message: "Select your gender" }
                    ]}
                >
                    <Radio.Group>
                        <Radio value="MALE">Male</Radio>
                        <Radio value="FEMALE">Female</Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item
                    label="Create password"
                    name="password"
                    rules={[
                        { required: true, message: "Please enter Password" },
                        { pattern: regex, message: "Please ensure your password meets the criteria: At least 8 characters long, At least one uppercase letter, At least one lowercase letter, At least one digit, At least one special character" }
                    ]}
                >
                    <Input.Password placeholder="Enter Password" />
                </Form.Item>

                <Button loading={apiStatus === "pending"} type="primary" htmlType="submit" block>
                    Submit
                </Button>
                <p>
                    if you have an account <Link to="/login">Login</Link>
                </p>
            </Form>
        </div>
    );
};

export default Signup;
 