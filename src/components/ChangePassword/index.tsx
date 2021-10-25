import React from 'react';
import styles from './index.module.scss';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {changePassword} from '../../redux/userSlice';
import Form from '../Form';
import Input from '../Input';
import Button from '../Button';

const ChangePassword = () => {
    const password = useAppSelector(state => state.user.password);
    const dispatch = useAppDispatch();

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (e.currentTarget.currentPassword === password) {
            dispatch(changePassword(e.currentTarget.newPassword));
        }
    };

    return (
        <Form onSubmit={submitHandler} className={styles.main}>
            <Input label={'Current password'} type={'password'} name={'currentPassword'}/>
            <Input label={'New password'} type={'password'} name={'newPassword'}/>
            <Input label={'Repeat password'} type={'password'} name={'repeatPassword'}/>
            <Button type="submit">Submit</Button>
        </Form>
    );
};

export default ChangePassword;