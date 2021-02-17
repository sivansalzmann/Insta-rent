import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {useCookies} from 'react-cookie'

const UserRouter = ({component: Component, ...rest}) => {
    const [cookies] = useCookies(['user']);

    return (
        <Route {...rest} render={props => (
            cookies.user ? <Component {...props} /> : <Redirect to="/"/>
        )}/>
    )
}

export default UserRouter