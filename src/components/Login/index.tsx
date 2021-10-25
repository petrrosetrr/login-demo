import React from 'react';
import Form from '../Form';
import styles from '../ChangePassword/index.module.scss';
import Input from '../Input';
import Button from '../Button';
import {loginUser} from '../../redux/userSlice';
import {useAppDispatch} from '../../redux/hooks';

const Login = () => {
    const dispatch = useAppDispatch();

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch(loginUser({
            email: e.currentTarget.email.value,
            password: e.currentTarget.password.value
        }));
    };

    return (
        <Form onSubmit={submitHandler} className={styles.main}>
            <Input label={'Email'} type={'email'} name={'email'}/>
            <Input label={'Password'} type={'password'} name={'password'}/>
            <Button type="submit">Submit</Button>
        </Form>
    );
};

export default Login;