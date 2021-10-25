import React from 'react';
import styles from './index.module.scss';
import {NavLink} from 'react-router-dom';
import {useAppSelector} from '../../redux/hooks';

const Home = () => {
    const email = useAppSelector(state => state.user.email);
    return (
        <div className={styles.main}>
            <p className={styles.title}>Hello, {email?.split('@')[0]} &#128075;&#127995;</p>
            <NavLink exact to="/change-password">Change password</NavLink>
        </div>
    );
};

export default Home;