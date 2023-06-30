import React, { useState } from "react";

const urlBase = process.env.REACT_APP_ATU_API + "/api/Ferreteria";

export const useConexBD = () => {
    const [usuarios,setUsuarios] = useState([])
    const [personas,setPersonas] =useState([])

    const listarPersonas = async () => {
        await fetch(`${urlBase}/listarPersonas`).then(response => {
            response.json().then((data) => {
                setPersonas(data.content) 
            })
        })
    }

    const registrarPersona = async (nombre, apallidoP, apellidoM, correo) => {
        let urlEnd = `/registrarPersona?nombre=${nombre}&apePaterno=${apallidoP}&apeMaterno=${apellidoM}&correo=${correo}&codigoPersona=1`

        let url = urlBase + urlEnd
        const response = await fetch(url,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            }
        })
        
    }

    const listarUsuarios = async () => {
        await fetch(`${urlBase}/listarUsuarios`).then(response => {
            response.json().then((data) => {
                setUsuarios(data.content) 
            })
        })
    }

    const registrarUsuario = async (nombre, clave, codPersona) => {
        let urlEnd = `/registrarUsuario?nombre=${nombre}&clave=${clave}&codPersona=${codPersona}&codUsuarioTipo=1`  //creo que el 1 es el admin

        let url = urlBase + urlEnd
        const response = await fetch(url,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            }
        })
        
    }
    
    return {personas,listarPersonas,registrarPersona,usuarios,listarUsuarios,registrarUsuario}
}