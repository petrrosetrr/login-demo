import React from 'react';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {logoutUser} from '../../redux/userSlice';
import styles from './index.module.scss';
import {NavLink} from 'react-router-dom';

const Header = () => {
    const {loggedIn, email} = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();
    const logOutHandler = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        dispatch(logoutUser());
    };

    return (
        <div className={styles.main}>
            <div className={styles.inner}>
                <h1 className={styles.title}>Login demo</h1>
                <nav className={styles.nav}>
                    {
                        loggedIn ?
                            <>
                                <NavLink exact to="/" className={styles.link} activeClassName={styles.active}> Home </NavLink>
                                <NavLink exact to="/change-password" className={styles.link} activeClassName={styles.active}> Change password </NavLink>
                            </>
                            :
                            <>
                                <NavLink exact to="/login" className={styles.link} activeClassName={styles.active}> Login </NavLink>
                                <NavLink exact to="/register" className={styles.link} activeClassName={styles.active}> Register </NavLink>
                            </>
                    }
                </nav>
                {
                    loggedIn && <p>Logged in as {email}
                        <button onClick={logOutHandler}>Logout</button>
                    </p>
                }
            </div>
        </div>
    );
};

export default Header;