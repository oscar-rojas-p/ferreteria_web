import React, { useContext } from 'react';
import {
    Route,
    Redirect
} from "react-router-dom";

import { UserContext } from '../../context/provider/UserProvider';

import PageNotFound from '../pages/PageNotFound';

export const PrivateRoute = ({component: Component, rest}) => {
    const { stateUser } = useContext(UserContext)
    const tienePermitidoEntrar = true //stateUser.menus.find(m => m.urlMenu === localStorage.getItem('currentLocation')) ? true : false

    return (
        <Route exact {...rest} >
            {stateUser.token === '' ? <Redirect to='/'></Redirect> : tienePermitidoEntrar ? <Component></Component> : <PageNotFound codeResponse={403} messageResponse="No tiene permisos para ingresar a esta pagina."></PageNotFound>}
        </Route>
    )
}