import React from 'react';
import {useAppSelector} from '../../redux/hooks';
import styles from './index.module.scss';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import ChangePassword from '../ChangePassword';
import Home from '../Home';
import Login from '../Login';
import Register from '../Register';
import Header from '../Header';

const App: React.FC = () => {
    const {loggedIn, loading} = useAppSelector(state => state.user);

    return (
        <div className={styles.main}>
            <Router basename="/login-demo">
                <Header /> {
                loading ?
                    <p>Loading...</p>
                    :
                    <Switch>
                        {
                            loggedIn ?
                                <>
                                    <Route exact path="/">
                                        <Home/>
                                    </Route>
                                    <Route exact path="/change-password">
                                        <ChangePassword/>
                                    </Route>
                                    <Redirect to="/"/>
                                </>
                                :
                                <>
                                    <Route exact path="/login"> <Login/> </Route>
                                    <Route exact path="/register">
                                        <Register/>
                                    </Route>
                                    <Redirect to="/login"/>
                                </>
                        }
                    </Switch>
            }
            </Router>
        </div>
    );
};

export default App;