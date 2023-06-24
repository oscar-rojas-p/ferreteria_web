import React, { useEffect, createContext, useReducer } from "react";
import { UserReducers } from '../reducers/UserReducers'
import { UserTypes } from "../types/UserTypes"

// import { useEncriptado } from "../../hooks/useEncriptado";

export const UserContext = createContext()

export function UserProvider(props) {
    const decifrado = atob(localStorage.getItem('pm-session') || '')
    const datosSession = decifrado == '' ? {} : JSON.parse(decifrado);

    const decifradoPuntos = atob(localStorage.getItem('pm-poligonos') || '')
    const localPuntos = decifradoPuntos === '' ? {} : JSON.parse(decifradoPuntos);

    const initialUserState = {
        codUsuario: datosSession.codUsuario || 0,
        nomUsuario: datosSession.nomUsuario || '',
        token: 'tokernasklrjklaejrlkaejrlekajlkajerlk',
        tokenExpire: datosSession.tokenExpire || 0,
        menus: datosSession.menus || [],
        permisos: datosSession.permisos || [],
        codComisaria: datosSession.codComisaria || 0,
        codDepartamento: datosSession.codDepartamento || 0,
        codDistrito: datosSession.codDistrito || 0,
        codProvincia: datosSession.codProvincia || 0,
        codUsuarioTipo: datosSession.codUsuarioTipo || 0,
        nomCarpetaFoto: datosSession.nomCarpetaFoto || '',
        nomFoto: datosSession.nomFoto || '',
        zona: datosSession.zona || 'Seleccione un Motor de Filtro',
        poligonosInicial: {
            puntosPoligonoPais: localPuntos.puntosPoligonoPais || '',
            puntosPoligonoDepartamento: localPuntos.puntosPoligonoDepartamento || '',
            puntosPoligonoProvincia: localPuntos.puntosPoligonoProvincia || '',
            puntosPoligonoDistrito: localPuntos.puntosPoligonoDistrito || '',
        },
        actualizoConfiguracion: false,
    }

    const [ state, dispatch ] = useReducer(UserReducers, initialUserState)

    const signIn = (objSession) => {
        var cifrado = btoa(JSON.stringify(objSession));
        localStorage.setItem('pm-session', cifrado);

        dispatch({type: UserTypes.SIGN_IN, payload: objSession})
    }
    const signOut = () => {
        localStorage.clear();
        
        dispatch({type: UserTypes.SIGN_OUT})
    }

    const cambiarZona = (zona, key, puntos, codigosAReiniciar) => {
        let nuevoObj = {
            'puntosPoligonoDepartamento': {
                puntosPoligonoProvincia: '',
                puntosPoligonoDistrito: ''
            },
            'puntosPoligonoProvincia': {
                puntosPoligonoDistrito: ''
            },
            'puntosPoligonoDistrito': {
            }
        };

        const nuevosPuntos = {
            ...state.poligonosInicial,
            [key]: puntos,
            ...nuevoObj[key]
        }; 
        dispatch({type: UserTypes.CAMBIAR_UBICACION, payload: { zona, nuevosPuntos, codigosAReiniciar }})
    }
    
    const cargarDatosPoligonos = (puntosPoligonos, zona) => {
        dispatch({type: UserTypes.CAMBIAR_PUNTOS_POLIGONOS, payload: { puntos: { ...puntosPoligonos }, zona: zona } })
    }
    
    const editarLocalizacionStorage = (codigos) => {
        const decifrado = atob(localStorage.getItem('pm-session') || '')
        const datosSession = decifrado == '' ? {} : JSON.parse(decifrado);
        const nuevosDatos = {
            ...datosSession,
            codDepartamento: codigos.codDepartamento || 0,
            codDistrito: codigos.codDistrito || 0,
            codProvincia: codigos.codProvincia || 0,
            zona: state.zona
        }

        localStorage.setItem('pm-session', btoa(JSON.stringify(nuevosDatos)));
        localStorage.setItem('pm-poligonos', btoa(JSON.stringify(state.poligonosInicial)))
        dispatch({ type: UserTypes.CAMBIAR_CONFIGURACION })
    }

    return (
        <UserContext.Provider value={{stateUser: state, signIn, signOut, cambiarZona, cargarDatosPoligonos, editarLocalizacionStorage}}>
            {props.children}
        </UserContext.Provider>
    )
}