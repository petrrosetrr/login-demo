import React from 'react';
import styles from './index.module.scss';

interface IProps {
    label: string;

    [key: string]: any;
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