import { Alert, Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import { useContext, useEffect, useState } from "react";
import { regex } from "./signup.js";
import { themerout } from "./AuthApp.js";
import { Link } from "react-router-dom";
// import "./Auth.js"
// import useForm from "antd/es/form/Form";



const Login = ({auth})=>{
  const theme  =useContext(themerout)
const [apiStatus,setApiStatus] = useState("init");
        const [form]  =useForm()

        useEffect(()=>{
            if(apiStatus==="success"){
                form.resetFields()
            }
        },[apiStatus])

const onSubmitForm = async (data)=>{
    setApiStatus("pending")
const {success} = await auth.loginUser(data)
console.log(success);
success?setApiStatus("success"):setApiStatus("error")

}


    return <div className={`container`}>
    <Form className={`form  ${theme==="dark"?"dark":"light"}`} form={form} onFinish={onSubmitForm} layout="vertical">
    {apiStatus==="success"&&<Alert closable showIcon type="success" message="signin success" />}
    {/* {apiStatus==="error"&&<Alert closable showIcon type="error" message="signup failed....." />} */}
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
            label="password"
            name="password"
            rules={[
                { required: true, message: "Please enter Password" },
                { pattern: regex, message: "please Enter Correct Password" }
            ]}
        >
            <Input.Password placeholder="Enter Password" />
        </Form.Item>

        <Button loading={apiStatus === "pending"} type="primary" htmlType="submit" block>
            Login
        </Button>
        <p>signUp for new-account <Link to="/signup">signup</Link>
        </p>
    </Form>
</div>

}

export default Login;