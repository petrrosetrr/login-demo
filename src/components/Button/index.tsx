import React from 'react';
import styles from './index.module.scss';

interface IProps {
    [key: string]: any;
}

const Button: React.FC<IProps> = ({children, ...rest}) => {
    return (
        <button {...rest} className={styles.main}>
            {children}
        </button>
    );
};

export default Button;