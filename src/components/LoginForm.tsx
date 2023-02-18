import React, {FC, useState, useEffect} from 'react';
import {Button, Form, Input} from "antd";
import {rules} from "../utils/rules";
import { useAppSelector, useAppDispatch } from '../hooks/redux';
import { authenticateUser } from '../store/reducers/AuthSlice';
import { useNavigate } from 'react-router-dom';
import { isAuth } from '../services/authService';
import { getAccessToken } from '../services/storage';


const LoginForm: FC = () => {
    const {isLoggedin} = useAppSelector(state => state.authReducer);
    // const [username, setUsername] = useState('')
    // const [password, setPassword] = useState('')
	const dispatch = useAppDispatch()

    // const submit = () => {
    //     login(username, password)
    // }
	let navigate = useNavigate();
	useEffect(() => {
		if(isLoggedin) {
			navigate('/');
		}
	}, [isLoggedin])

	
    // if (isAuth()) {
    //  	navigate('/');
    // }

	 const onFinish = async(values: any) => {
        await dispatch(authenticateUser(values));
    };

    return (
        <Form
			name="basic"
            onFinish={onFinish}
			initialValues={{ remember: true }}
			autoComplete="off"
        >
            {/* {err && <div style={{color: 'red'}}>
                {err}
            </div>} */}
            <Form.Item
                // label="Name"
                // name="username"
                // rules={[rules.required("Enter user name!")]}
				label="Email"
				name="username"
				rules={[{ required: true, message: 'Please input your email!' , type: 'email'} ]}
            >
                {/* <Input
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                /> */}
				 <Input />
            </Form.Item>
            <Form.Item
                label="Password"
                name="password"
                rules={[rules.required("Enter please password")]}
            >
                {/* <Input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type={"password"}
                /> */}
				 <Input.Password />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Log In
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;