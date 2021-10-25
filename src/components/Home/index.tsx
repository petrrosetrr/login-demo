import React from 'react';
import styles from './index.module.scss';
import {NavLink} from 'react-router-dom';

const Home = () => {
    return (
        <div className={styles.main}>
            <h1>Home Page</h1>
            <NavLink exact to="/change-password">Change password</NavLink>
        </div>
    );
};

export default Home;