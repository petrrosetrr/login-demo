import React from 'react';
import styles from './index.module.scss';
import cn from 'classnames';

interface IProps {
    className?: string;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Form: React.FC<IProps> = ({className, onSubmit, children}) => {

    return (
        <form className={cn(styles.main, className)} onSubmit={onSubmit}>
            {children}
        </form>
    );
};

export default Form;