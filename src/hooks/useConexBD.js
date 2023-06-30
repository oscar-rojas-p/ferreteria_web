import React, { useState } from "react";

const urlBase = process.env.REACT_APP_ATU_API + "/api/Ferreteria";

export const useConexBD = () => {
    const [usuarios,setUsuarios] = useState([])

    const listarPersonas = async () => {
        await fetch(`${urlBase}/listarPersonas`).then(response => {
            response.json().then((data) => {
                console.log(data);
            })
        })
    }

    const registrarPersona = async (nombre, apallidoP, apellidoM, correo) => {
        let urlEnd = `/registrarPersona?nombre=${nombre}&apePaterno=${apallidoP}&apeMaterno=${apellidoM}&correo=${correo}&codigoPersona=1`
        await fetch(urlBase + urlEnd)
        
    }

    const listarUsuarios = async () => {
        await fetch(`${urlBase}/listarUsuarios`).then(response => {
            response.json().then((data) => {
                setUsuarios(data.content) 
            })
        })
    }
    
    return {listarPersonas,registrarPersona,usuarios,listarUsuarios}
}