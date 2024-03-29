import React from 'react';
import styles from './index.module.scss';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {changePassword} from '../../redux/userSlice';
import Form from '../Form';
import {InputPassword} from '../Input';
import Button from '../Button';

const ChangePassword = () => {
    const password = useAppSelector(state => state.user.password);
    const dispatch = useAppDispatch();

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const currentPass = e.currentTarget.currentPassword.value
        const newPass = e.currentTarget.newPassword.value
        const repeatPass = e.currentTarget.repeatPassword.value

        if (currentPass === password
            && newPass === repeatPass) {
            dispatch(changePassword(newPass));
        }
    };

    return (
        <Form onSubmit={submitHandler} className={styles.main}>
            <InputPassword label={'Current password'} name={'currentPassword'}/>
            <InputPassword label={'New password'} name={'newPassword'}/>
            <InputPassword label={'Repeat password'} name={'repeatPassword'}/>
            <Button type="submit">Submit</Button>
        </Form>
    );
};

export default ChangePassword;