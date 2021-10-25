import React from 'react';
import styles from '../ChangePassword/index.module.scss';
import Form from '../Form';
import Input from '../Input';
import Button from '../Button';
import {useAppDispatch} from '../../redux/hooks';
import {loginUser} from '../../redux/userSlice';

const Register = () => {
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

export default Register;