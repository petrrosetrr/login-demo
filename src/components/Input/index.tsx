import React from 'react';
import styles from './index.module.scss';

interface IProps {
    label: string;

    [key: string]: any;
}


export const InputPassword: React.FC<IProps> = (props) => {
    return (
        <Input
            required
            {...props}
            type={'password'}
            pattern={'^((?=.*[A-Z])(?=.*)).{4,8}$'}
            placeholder={"Between 4 and 10 characters, at least one capital letter"}
        />
    )
}


const Input: React.FC<IProps> = ({label, ...rest}) => {
    return (
        <label className={styles.main}>
            <span>{label}</span>
            <input className={styles.input} {...rest}/>
        </label>
    );
};

export default Input;