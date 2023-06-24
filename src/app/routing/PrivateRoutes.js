import React, { useContext, useState, useLazyRef, lazy, useMemo, useEffect } from 'react'
import {
    Switch,
    Route
} from "react-router-dom";
import { UserContext } from '../../context/provider/UserProvider';
import { LayoutMaster } from '../modules/layout/LayoutMaster';
import { IndicadoresGestion } from '../pages/IndicadoresGestion';
import { IndicadoresIncidencias } from '../pages/IndicadoresIncidencias';
import PageNotFound from '../pages/PageNotFound';


export function PrivateRoutes({ token }) {
    // const { stateUser } = useContext(UserContext);
    return (
        <>
            {                
                // token !== '' && localStorage.getItem('currentLocation') !== '/'
                // && (
                    <LayoutMaster>
                        <Switch>
                            <Route exact path='/' component={IndicadoresIncidencias} />
                            <Route path="*" component={PageNotFound} />
                        </Switch>
                    </LayoutMaster>
                // )
            }            
        </>
    )
}