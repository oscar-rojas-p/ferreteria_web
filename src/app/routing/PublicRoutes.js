import React, { useContext, useState } from 'react'
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
// import { Web } from '../pages/Web'
import { IndicadoresIncidencias } from '../pages/IndicadoresIncidencias';
import { LayoutMaster } from '../modules/layout/LayoutMaster';
import { IndicadoresGestion } from '../pages/IndicadoresGestion';
import { Login } from '../pages/Login';
import { Productos } from '../pages/Productos';
import { Catalogo } from '../pages/Catalogo';
import PageNotFound from '../pages/PageNotFound';
import { Administrador } from '../pages/Administrador';
export function PublicRoutes() {
    const [user,setUser] = useState([])
    return (
        <>
            <LayoutMaster>
                <Switch>             
                    {/* <Route exact path='/' component={IndicadoresIncidencias} /> */}
                    <Route exact path='/' component={Login}/>
                    <Route exact path='/Productos' component={Productos}/>
                    <Route exact path='/incidencias' component={IndicadoresIncidencias} />
                    <Route exact path='/gestion' component={IndicadoresGestion} />
                    <Route exact path='/catalogo' component={Catalogo} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/Administrador' component={Administrador} />
                    <Route exact path="*" component={PageNotFound} />
                </Switch>
            </LayoutMaster>
        </>
    )
}


