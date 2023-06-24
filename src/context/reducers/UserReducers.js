import { UserTypes } from "../types/UserTypes"

export const UserReducers = (state, action) => {
    switch (action.type) {
        case UserTypes.SIGN_IN:
            return {
                ...state,
                ...action.payload
            }
        case UserTypes.SIGN_OUT:
            return {
                ...state,
                codUsuario: 0,
                nomUsuario: '',
                token: '',
                tokenExpire: 0,
                menus: [],
                permisos: [],
                codComisaria: 0,
                codDepartamento: 0,
                codDistrito: 0,
                codProvincia: 0,
                codUsuarioTipo: 0,
                nomCarpetaFoto: '',
                nomFoto: '',
                zona:''
            }
        case UserTypes.CAMBIAR_ZONA:
            return {
                ...state,
                zona: action.payload.zona
            }
        case UserTypes.CAMBIAR_PUNTOS_POLIGONOS:
            return {
                ...state,
                poligonosInicial: action.payload.puntos,
                zona: action.payload.zona
            }
        case UserTypes.CAMBIAR_UBICACION:
            return {
                ...state,
                ...action.payload.codigosAReiniciar,
                zona: action.payload.zona,
                poligonosInicial: action.payload.nuevosPuntos
            }
        case UserTypes.CAMBIAR_CONFIGURACION:
            return {
                ...state,
                actualizoConfiguracion: !state.actualizoConfiguracion
            }
        default:
            throw new Error()
    }
}
