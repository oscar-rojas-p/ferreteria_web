import React from "react";

const urlBase = process.env.REACT_APP_ATU_API + "/api/Ferreteria";

export const useConexBD = () => {

    const listarPersonas = async () => {
        const response  = await fetch(`${urlBase}/listarPersonas`)

        console.log("response -> ",response)
    }
    
    return {listarPersonas}
}