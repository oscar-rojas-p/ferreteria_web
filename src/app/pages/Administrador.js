import React from "react";
import { CabeceraAdministrador } from "../components/CabeceraAdministrador"
import { BodyAdministrador } from "../components/BodyAdministrador";
export const  Administrador = ()=>{
    return(
        <>
            
            <CabeceraAdministrador></CabeceraAdministrador>
            <BodyAdministrador></BodyAdministrador>

            <div className="w-full bg-white"></div>
        </>
    )
}