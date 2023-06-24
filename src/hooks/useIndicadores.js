import { useState,useEffect } from 'react'
import { notify } from '../utils/utils';
import { AuthFetch,Fetch } from '../services/api';

const urlDashBoard = 'https://dashboardwebapi.abexacloud.com/api/Empresa/listaEmpresa';

export const useIndicadores = () => {

    const indicesDefault = {
        equipos: [
            {
                nomEquipo: "GPS",
                existentes: 0,
                operativos: 0,
                inoperativos: {
                    inoperativoSinDespacho: 0,
                    inoperativoConDespacho: 0
                },
                mantenimiento:{
                    cantidadEquipoNuevo:0,
                    cantidadEquipoProceso:0
                }
            },
            {
                nomEquipo: "MPOS",
                existentes: 0,
                operativos: 0,
                inoperativos: {
                    inoperativoSinDespacho: 0,
                    inoperativoConDespacho: 0
                },
                mantenimiento:{
                    cantidadEquipoNuevo:0,
                    cantidadEquipoProceso:0
                }
            }
        ],
        detallesIncidenciasGPS: [
            {
                nomEmpresa: "Empresa",
                cantidadIncidenciaGPS: 0,
                nomPersonaTecnico: "Técnico"
            }
        ],
        detallesIncidenciasMPOS: [
            {
            nomEmpresa: "Empresa",
            cantidadIncidenciaMPOS: 0,
            nomPersonaTecnico: "Técnico"
            }
        ],
        detallesIncidenciasSistema: [
            {
            nomEmpresa: "Empresa",
            cantidadIncidenciaSistema: 0,
            nomPersonaTecnico: "Técnico"
            }
        ]
    }

    const [ indices , setIndices  ] = useState(indicesDefault)

    const obtenerDatosEquipos = async () => {const response = await Fetch({url: urlDashBoard});

        if (response.isValid){
            setIndices(response.content)          
        }else{
            notify(response.content)       
        }
    }
    
    return { obtenerDatosEquipos, indices  }
}
