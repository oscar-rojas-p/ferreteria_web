import React from "react";
import { CabeceraAdministrador } from "../components/CabeceraAdministrador"
import { BodyAdministrador } from "../components/BodyAdministrador";
import { LayoutMaster } from "../modules/layout/LayoutMaster";
export const  Administrador = ()=>{
    return(
        <>
            <LayoutMaster>
                <CabeceraAdministrador></CabeceraAdministrador>
                <BodyAdministrador></BodyAdministrador>
            </LayoutMaster>
        </>
    )
}