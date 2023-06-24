import React, { useContext } from 'react';

import {
    Redirect,
    useLocation
} from "react-router-dom";

import { UserContext } from '../../context/provider/UserProvider';

// import { PrivateRoutes } from './PrivateRoutes'
import { PublicRoutes } from './PublicRoutes'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const RoutesJSX = () => {
    // const { stateUser } = useContext(UserContext)
    // localStorage.setItem('currentLocation', useLocation().pathname)
    return (
        <>
            {/* {
                !stateUser.token && <Redirect to='/'></Redirect>
            } */}
            {/* <Switch>
                <Redirect exact from="/" to={localStorage.getItem('currentLocation') ? localStorage.getItem('currentLocation') : '/login' }></Redirect>
            </Switch> */}
            <PublicRoutes></PublicRoutes>
            {/* <PrivateRoutes></PrivateRoutes> */}
            <ToastContainer></ToastContainer>
        </>
    )
}