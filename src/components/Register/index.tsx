import React from 'react';
import styles from '../ChangePassword/index.module.scss';
import Form from '../Form';
import Input, {InputPassword} from '../Input';
import Button from '../Button';
import {useAppDispatch} from '../../redux/hooks';
import {loginUser} from '../../redux/userSlice';

const Register = () => {
    const dispatch = useAppDispatch();

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (e.currentTarget.password.value === e.currentTarget.repeatPassword.value) {
            dispatch(loginUser({
                email: e.currentTarget.email.value,
                password: e.currentTarget.password.value
            }));
        }
    };

    return (
        <Form onSubmit={submitHandler} className={styles.main}>
            <Input label={'Email'} type={'email'} name={'email'} placeholder={'test@test.com'}/>
            <InputPassword label={'Password'} name={'password'} />
            <InputPassword label={'Repeat password'} name={'repeatPassword'} />
            <Button type="submit">Submit</Button>
        </Form>
    );
};

export default Register;