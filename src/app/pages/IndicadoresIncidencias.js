import React, { useState, useEffect } from 'react';
import {useHistory} from "react-router-dom";
import { useIndicadores } from '../../hooks/useIndicadores';
import logoAbexa from '../../assets/css/images/LogoAbexa_BR.png'
import {ProgressBar} from '../components/ProgressBar';
import {Marquee} from '../components/Marquee';
import { Timer } from '../modules/layout/Timer';
import ReactTooltip from 'react-tooltip';
import {ObtenerFechaHoraActual } from '../../utils/utils';

export const IndicadoresIncidencias= () => {
    const  history = useHistory();

    const {obtenerDatosEquipos, indices} = useIndicadores();

    useEffect(()=>{
        const interval = setInterval(() => {            
                obtenerDatosEquipos();                
            }, 15000);
            return () => clearInterval(interval);
        },[])
        
        
    const cambiarVista = () =>{
        history.push('/gestion')
    }
        
    return (
        <>
        <div className="m-0 h-full w-full scrool-none py-5 px-14 flex-col items-center" >
            <div className="h-[8%] w-full">
                <div className='border h-full flex justify-center items-center rounded-xl w-full'>
                    <label className="text-5xl lg:text-base font-bold text-blue-600 flex h-[100%]">INDICADORES DE OPERACIÓN</label>
                </div>
            </div>    
            <div className="rounded-xl h-[84%] p-2" >
                <div className='h-[47.5%]'>
                    <div className='h-full w-full flex flex-col'>
                        <div className="pb-1 flex h-[50%] w-full">
                            <div className='w-[15%] h-full text-center flex flex-col items-end'>
                                <label className='w-full h-[22%]'></label>
                                <button className="text-white text-5xl lg:text-2xl font-extrabold bg-sky-500 rounded p-2 w-full h-[78%]">{indices.equipos[0].nomEquipo}</button>
                            </div>
                            <div className='pl-5 w-[15%] h-full text-center flex flex-col'>
                                <label className='w-full lg:text-xs text-lg h-[22%] flex items-center justify-center'>EXISTENTES</label>
                                <button className=" text-white text-5xl lg:text-2xl font-extrabold border-blue-600 border-2 rounded p-2 h-[78%] w-full">{indices.equipos[0].existentes}</button>
                            </div>
                            <div className='pl-6 w-[20%] h-full text-center flex flex-col'>
                                <label className='w-full lg:text-xs text-lg h-[22%] flex items-center justify-center'>OPERATIVOS</label>
                                <button className="text-white text-5xl lg:text-2xl font-extrabold bg-blue-600 rounded p-2  w-full h-[78%] ">{indices.equipos[0].operativos}</button>
                            </div>
                            <div className='pl-5 w-[20%] h-full text-center flex flex-col'>
                                <label className='w-full lg:text-xs text-lg h-[22%] flex items-center justify-center'>NO OPERATIVO</label>
                                <div className='flex bg-indigo-600 rounded-[5px] w-full h-[78%]'>
                                    <div className='w-[50%]'>
                                        <div className='flex flex-col w-full h-full'>
                                            <div className='w-full h-[22%] flex items-center justify-center p-1'>
                                                <label className='font normal text-base lg:text-xs lg:truncate'>Sin despacho</label>
                                            </div>
                                            <div className='w-full h-[78%] flex items-center justify-center px-1 pb-7'>
                                                <label className='text-5xl font-extrabold lg:text-2xl'>{indices.equipos[0]?.inoperativos?.inoperativoSinDespacho}</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='border-l-2 border-l-black w-[50%]'>
                                        <div className='flex flex-col w-full h-full'>
                                            <div className='w-full h-[22%] flex items-center justify-center p-1'>
                                                <label className='font normal text-base lg:text-xs lg:truncate'>Despachados</label>
                                            </div>
                                            <div className='w-full h-[78%] flex items-center justify-center px-1 pb-7'>
                                                <label className='text-5xl font-extrabold lg:text-2xl'>
                                                    {indices.equipos[0]?.inoperativos?.inoperativoConDespacho}
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='pl-6 w-[15%] h-full text-center  flex flex-col items-end'>
                                <label className='w-full lg:text-xs  text-lg h-[22%]'>OPERATIVIDAD</label>
                                <ProgressBar operativos={indices.equipos[0].operativos} existentes={indices.equipos[0].existentes}  />
                            </div>
                            <div className='pl-5 w-[15%] h-full text-center flex flex-col items-end'>
                                <label className='w-full lg:text-xs  text-lg h-[22%]'>MANTENIMIENTO</label>
                                <div data-tip data-for="botonTooltip-tracking0" className='h-[78%] w-full text-5xl lg:text-xs bg-transparent border-2 border-blue-600 rounded flex justify-center items-center font-extrabold'>{Number(indices.equipos[0]?.mantenimiento?.cantidadEquipoNuevo + indices.equipos[0]?.mantenimiento?.cantidadEquipoProceso)||0}</div>
                                <ReactTooltip id={'botonTooltip-tracking0'} place='top' type='light' effect='solid' className='tooltipDashBoard'>
                                {`Equipo nuevo: ${indices.equipos[0]?.mantenimiento?.cantidadEquipoNuevo || 0}`}<br></br>{`Equipo proceso: ${indices.equipos[0]?.mantenimiento?.cantidadEquipoProceso || 0}`}
                                </ReactTooltip>
                            </div>
                            {/* <button className="ml-2 text-white text-2xl bg-orange-500 rounded p-2 w-3/12 ">20</button> */}
                        </div>
                        <div className='flex h-[50%] w-full'>
                            <div className='w-[15%] h-full flex-col justify-center '>
                                <label className='w-full flex justify-center font-bold text-lg h-[22%]'></label>
                                <button className="text-white text-5xl lg:text-2xl font-extrabold  bg-sky-500 rounded p-2 h-[78%] w-full ">{indices.equipos[1]?.nomEquipo}</button>
                            </div>
                            <div className='pl-5 w-[15%] h-full flex-col justify-center '>
                                <label className='w-full flex justify-center font-bold text-lg h-[22%]'></label>
                                <button className=" text-white text-5xl lg:text-2xl font-extrabold border-blue-600 border-2 rounded p-2 h-[78%] w-full">{indices.equipos[1]?.existentes}</button>
                            </div>
                            <div className='pl-6 w-[20%] h-full flex-col justify-center '>
                                <label className='w-full flex justify-center font-bold text-lg h-[22%]'></label>
                                <button className=" text-white text-5xl lg:text-2xl font-extrabold bg-blue-600 rounded p-2 h-[78%] w-full">{indices.equipos[1]?.operativos}</button>
                            </div>
                            <div className='pl-5 w-[20%] h-full text-center'>
                                <div className='h-[22%] flex'></div>
                                <div className='flex bg-indigo-600 rounded-[5px] w-full h-[78%]'>
                                    <div className='w-[50%]'>
                                        <div className='flex flex-col w-full h-full'>
                                            <div className='w-full h-[22%] flex items-center justify-center p-1'>
                                                <label className='font normal text-base lg:text-xs lg:truncate'>Sin despacho</label>
                                            </div>
                                            <div className='w-full h-[78%] flex items-center justify-center px-1 pb-7'>
                                                <label className='text-5xl font-extrabold  lg:text-2xl'>{indices.equipos[1]?.inoperativos?.inoperativoSinDespacho}</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='border-l-2 border-l-black w-[50%]'>
                                        <div className='flex flex-col w-full h-full'>
                                            <div className='w-full h-[22%] flex items-center justify-center p-1'>
                                                <label className='font normal text-base lg:text-xs lg:truncate'>Despachados</label>
                                            </div>
                                            <div className='w-full h-[78%] flex items-center justify-center px-1 pb-7'>
                                                <label className='text-5xl font-extrabold lg:text-2xl'>
                                                    {indices.equipos[1]?.inoperativos?.inoperativoConDespacho}
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='pl-5 w-[15%] h-full flex-col justify-center '>
                                <label className='w-full flex justify-center font-bold text-lg h-[22%]'></label>
                                <ProgressBar operativos={indices.equipos[1].operativos} existentes={indices.equipos[1].existentes} />
                            </div>
                            <div className='pl-5 w-[15%] h-full text-center flex flex-col items-end'>
                                <label  className='w-full lg:text-xs  text-lg h-[22%]'></label>
                                <div data-tip data-for="botonTooltip-tracking1"  className='h-[78%] w-full text-5xl lg:text-xs border-2 border-blue-600 rounded flex justify-center items-center font-extrabold'>{Number(indices.equipos[1]?.mantenimiento?.cantidadEquipoNuevo + indices.equipos[1]?.mantenimiento?.cantidadEquipoProceso)||0}</div>
                                <ReactTooltip id={'botonTooltip-tracking1'} place='top' type='light' effect='solid' className='tooltipDashBoard'>
                                    {`Equipo nuevo: ${indices.equipos[1]?.mantenimiento?.cantidadEquipoNuevo}`}<br></br>{`Equipo proceso: ${indices.equipos[1]?.mantenimiento?.cantidadEquipoProceso}`}
                                </ReactTooltip>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='w-full flex items-center h-[5%] pt-2 pb-2'>
                    <hr className=" w-[100%] h-[2px] bg-gray-400 font-extrabold "></hr>
                </div>
                
                <div className='h-[47.5%]'>
                    {/* <button className="text-white text-5xl lg:text-2xl  font-extrabold bg-indigo-700 rounded p-1  w-full">INCIDENCIAS</button> */}
                    <div className="h-full w-full flex">
                        <div className='w-[15%] h-full  flex items-center justify-center'>
                            <button className="text-white text-2xl lg:text-xs  font-extrabold bg-sky-500 rounded p-2 w-full h-[80%]">INCIDENCIAS</button>
                        </div>
                        <div className='w-[15%] h-full flex flex-col pl-5'>
                            <div className='w-full h-[33.3%] pb-1'>
                                <button className=' border-blue-600 border-2 text-2xl lg:text-xl text-white  rounded w-full h-full'>GPS</button>
                            </div>
                            <div className='w-full h-[33.3%] pt-1 pb-1'>
                                <button className=' border-blue-600 border-2 text-2xl lg:text-xl text-white  rounded w-full h-full'>MPOS</button>
                            </div>
                            <div className='w-full h-[33.3%] pt-1'>
                                <button className=' border-blue-600 border-2 text-2xl lg:text-xl text-white  rounded w-full h-full'>SISTEMA</button>
                            </div>
                        </div>
                        <div className='pl-5 w-[70%] h-full flex-col flex'>
                            <div className='w-full h-[33.3%] flex text-center pb-1'>
                            { 
                                indices.detallesIncidenciasGPS.map((g,i) => {
                                    return  <div className='w-[20%] h-full px-1'>
                                                <div className={` bg-sky-600 border-2 border-gray-300 rounded w-full h-full`}>
                                                    <div className='w-full h-[25%] flex justify-center items-center px-1'>
                                                        <label data-tip data-for={`botonTooltip-gps${i}`} className='w-full lg:text-xs text-sm h-[80%] truncate'>{g?.nomEmpresa ? g?.nomEmpresa:"-"}</label>
                                                    </div>
                                                    <div className='w-full h-[52%] flex justify-center items-center text-5xl lg:text-2xl font-extrabold'>
                                                        {g?.cantidadIncidenciaGPS? g?.cantidadIncidenciaGPS:"0"}
                                                    </div>
                                                    
                                                    <Marquee>{g.nomPersonaTecnico != null && g.nomPersonaTecnico.substr(0,1) == ',' ? g.nomPersonaTecnico.substr(1) : ( g.nomPersonaTecnico != null && g.nomPersonaTecnico.substr(0,1) != ',' ? g.nomPersonaTecnico : '')}</Marquee>
                                                    {/* <Marquee>{g.nomPersonaTecnico ?  g.nomPersonaTecnico : ''}</Marquee> */}
                                                    <ReactTooltip id={`botonTooltip-gps${i}`} place='top' type='light' effect='solid' className='tooltipDashBoard'>
                                                        {g.nomEmpresa ? g.nomEmpresa : "-"}
                                                    </ReactTooltip>
                                                </div>
                                            </div>
                                })
                            }
                            </div>
                            <div className='w-full h-[33.3%] flex text-center pt-1 pb-1'>
                            {
                                indices.detallesIncidenciasMPOS.map((g,i) => {
                                    return  <div className='w-[20%] h-full px-1'>
                                                <div className={` bg-blue-600 border-2 border-gray-300 rounded w-full h-full`}>
                                                    <div className='w-full h-[25%] flex justify-center items-center'>
                                                        <label data-tip data-for={`botonTooltip-mpos${i}`} className='w-full lg:text-xs text-sm h-[80%] truncate'>{g?.nomEmpresa ? g?.nomEmpresa:"-"}</label>
                                                    </div>
                                                    <div className='w-full h-[52%] flex justify-center items-center text-5xl lg:text-2xl font-extrabold'>
                                                        {g?.cantidadIncidenciaMPOS? g?.cantidadIncidenciaMPOS:"0"}
                                                    </div>
                                                    <Marquee>{g.nomPersonaTecnico != null && g.nomPersonaTecnico.substr(0,1) == ',' ? g.nomPersonaTecnico.substr(1) : ( g.nomPersonaTecnico != null && g.nomPersonaTecnico.substr(0,1) != ',' ? g.nomPersonaTecnico : '')}</Marquee>
                                                    {/* <Marquee>{g.nomPersonaTecnico ? g.nomPersonaTecnico  : '' }</Marquee> */}
                                                    <ReactTooltip id={`botonTooltip-mpos${i}`} place='top' type='light' effect='solid' className='tooltipDashBoard'>
                                                        {g.nomEmpresa ? g.nomEmpresa : "-"}
                                                    </ReactTooltip>
                                                </div>
                                            </div>    
                                })
                            }
                            
                            </div>
                            <div className='w-full h-[33.3%] flex text-center pt-1'>           
                            {
                                indices.detallesIncidenciasSistema.map((g,i) => {
                                    return  <div className='w-[20%] h-full px-1'>
                                                <div className={`bg-indigo-600 border-2 border-gray-300 rounded w-full h-full  justify-end`}>
                                                    <div className='w-full h-[25%] flex justify-center items-center'>
                                                        <label data-tip data-for={`botonTooltip-sistemas${i}`} className='w-full lg:text-xs text-sm h-[80%] truncate'>{g?.nomEmpresa ? g?.nomEmpresa:"-"}</label>
                                                    </div>
                                                    <div className='w-full h-[52%] flex justify-center items-center text-5xl lg:text-2xl font-extrabold'>
                                                        {g?.cantidadIncidenciaSistema? g?.cantidadIncidenciaSistema:"0"}
                                                    </div>
                                                    <Marquee>{g.nomPersonaTecnico != null && g.nomPersonaTecnico.substr(0,1) == ',' ? g.nomPersonaTecnico.substr(1) : ( g.nomPersonaTecnico != null && g.nomPersonaTecnico.substr(0,1) != ',' ? g.nomPersonaTecnico : '')}</Marquee>
                                                    {/* <Marquee>{g.nomPersonaTecnico ? g.nomPersonaTecnico : '' }</Marquee> */}
                                                    <ReactTooltip id={`botonTooltip-sistemas${i}`} place='top' type='light' effect='solid' className='tooltipDashBoard'>
                                                        {g.nomEmpresa ? g.nomEmpresa : "-"}
                                                    </ReactTooltip>
                                                </div>
                                            </div>    
                                })
                            }                            
                            </div>
                        </div>   
                    </div>
                </div>
                
            </div>
            <div className="flex w-full  justify-end items-center h-[8%]">
                <div className='w-[15%] h-[100%] flex items-end lg:w-[15%] lg:h-[100%] '>
                    <img  src={logoAbexa} className='w-full h-[100%] rounded-md' onClick={()=>cambiarVista()}/>
                </div>
                <div className=" flex w-[70%] px-10 items-end h-full lg:w-[60%] lg:h-full">
                    <label className='h-[3px] border border-blue-600 bg-blue-600 w-full'></label>
                </div>
                <div className='w-[15%] h-full  flex  items-end lg:w-[15%] lg:h-full p-1'>
                    <button className=" h-full w-full rounded m-0 p-1 flex flex-col items-center bg-red-700">
                        <Timer></Timer>
                        <label className='w-full h-[30%] flex items-center justify-center text-lg font-medium lg:text-xs lg:truncate'>{ObtenerFechaHoraActual()}</label>
                    </button>
                </div>
            </div>
        </div>
            
        </>

)}