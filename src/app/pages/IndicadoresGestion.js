import React, { useState, useEffect} from 'react';
import {useHistory} from "react-router-dom";
import logoAbexa from '../../assets/css/images/LogoAbexa_BR.png'
import { Timer } from '../modules/layout/Timer';
import {ObtenerFechaHoraActual } from '../../utils/utils';
export const IndicadoresGestion= () => {
    // const history = useHistory();
    const  history = useHistory();
    useEffect(()=>{
    },[])
    
    const cambiarVista = ()=>{
        history.push('/incidencias')
    }

    
    return (
        <>
        <div className=" m-0 h-full w-full scrool-none py-5 px-14 flex-col items-center" >
            <div className="h-[8%] w-full">
                <div className='border h-full flex justify-center items-center rounded-xl w-full text-center'>
                    <label className="text-5xl lg:text-2xl font-bold text-slate-300 h-[80%] ">INDICADORES DE GESTIÓN</label>
                </div>
            </div>    
            <div className="w-full h-[84%]" >
                <div className='w-full h-full flex-col'>
                    <div className='h-[49%] w-full'>
                        <div className='w-full h-full flex-col'>
                            <div className='h-[15%] w-full flex p-2 pb-0'>
                                <div className='w-[26.5%] h-full'></div>
                                <div className='w-[73.5%] h-full flex'>
                                    <div className='w-[32.3%] flex-col px-1'>
                                        <div className='border-b text-lg text-center w-full font-medium'>PROGRAMADO</div>
                                        <div className='w-full h-full flex'>
                                            <div className='w-[33%] pl-1 text-center text-base font-medium'>MES</div>
                                            <div className='w-[33%] pl-1 text-center text-base font-medium'>SEM</div>
                                            <div className='w-[33%] pl-1 text-center text-base font-medium'>DIA</div>
                                        </div>
                                    </div>
                                    <div className='w-[32.3%] flex-col mx-2'>
                                        <div className='border-b text-lg text-center w-full font-medium'>EJECUTADO</div>
                                        <div className='w-full h-full flex'>
                                            <div className='w-[33%] pl-1 text-center text-base font-medium'>MES</div>
                                            <div className='w-[33%] pl-1 text-center text-base font-medium'>SEM</div>
                                            <div className='w-[33%] pl-1 text-center text-base font-medium'>DIA</div>
                                        </div>
                                    </div>
                                    <div className='w-[32.3%] flex-col mx-2'>
                                        <div className='border-b text-lg text-center w-full font-medium'>PENDIENTE</div>
                                        <div className='w-full h-full flex'>
                                            <div className='w-[33%] h-full pl-1 text-center text-base font-medium'>MES</div>
                                            <div className='w-[33%] h-full pl-1 text-center text-base font-medium'>SEM</div>
                                            <div className='w-[33%] h-full pl-1 text-center text-base font-medium'>DIA</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full h-[40%] p-2'>
                                <div className='flex w-full h-full m-0 p-0'>
                                    <div className='w-[20%] h-full flex justify-center p-2 items-center'>
                                        <div className='w-full h-[80%] bg-blue-500 text-4xl font-medium flex justify-center items-center rounded'>INGRESOS</div>
                                    </div>
                                    <div className='w-[80%] h-full flex-col p-2'>
                                        <div className='w-full h-[50%] flex pb-1'>
                                            <div className='w-[7%] h-full'>
                                                <div className='w-full h-full border rounded text-xl font-medium lg:text-xs lg:font-normal flex justify-center items-center '>MN</div>
                                            </div>
                                            <div className='w-[31%] h-full flex pl-2'>
                                                <div className='w-[33%] h-full bg-violet-700 rounded'></div>
                                                <div className='w-[33%] h-full bg-violet-700 rounded ml-1'></div>
                                                <div className='w-[33%] h-full bg-violet-700 rounded ml-1'></div>
                                            </div>
                                            <div className='w-[31%] h-full flex pl-2'>
                                                <div className='w-[33%] h-full bg-purple-600 rounded'></div>
                                                <div className='w-[33%] h-full bg-purple-600 rounded ml-1'></div>
                                                <div className='w-[33%] h-full bg-purple-600 rounded ml-1'></div>
                                            </div>
                                            <div className='w-[31%] h-full flex pl-2'>
                                                <div className='w-[33%] h-full bg-fuchsia-400 rounded'></div>
                                                <div className='w-[33%] h-full bg-fuchsia-400 rounded ml-1'></div>
                                                <div className='w-[33%] h-full bg-fuchsia-400 rounded ml-1'></div>
                                            </div>
                                        </div>
                                        <div className='w-full h-[50%] flex pt-1'>
                                            <div className='w-[7%] h-full'>
                                                <div className='w-full h-full border rounded text-xl font-medium lg:text-xs lg:font-normal flex justify-center items-center '>ME</div>
                                            </div>
                                            <div className='w-[31%] h-full flex pl-2'>
                                                <div className='w-[33%] h-full bg-violet-700 rounded'></div>
                                                <div className='w-[33%] h-full bg-violet-700 rounded ml-1'></div>
                                                <div className='w-[33%] h-full bg-violet-700 rounded ml-1'></div>
                                            </div>
                                            <div className='w-[31%] h-full flex pl-2'>
                                                <div className='w-[33%] h-full bg-purple-600 rounded'></div>
                                                <div className='w-[33%] h-full bg-purple-600 rounded ml-1'></div>
                                                <div className='w-[33%] h-full bg-purple-600 rounded ml-1'></div>
                                            </div>
                                            <div className='w-[31%] h-full flex pl-2'>
                                                <div className='w-[33%] h-full bg-fuchsia-400 rounded'></div>
                                                <div className='w-[33%] h-full bg-fuchsia-400 rounded ml-1'></div>
                                                <div className='w-[33%] h-full bg-fuchsia-400 rounded ml-1'></div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[5%] w-full flex'>
                                <div className='w-[26.5%] h-full'></div>
                                <div className='w-[73.5%] h-full flex'>
                                    <div className='w-[32.3%] flex-col px-1'>
                                        <div className='w-full h-full flex'>
                                            <div className='w-[33%] pl-1 text-center text-base font-medium'>MES</div>
                                            <div className='w-[33%] pl-1 text-center text-base font-medium'>SEM</div>
                                            <div className='w-[33%] pl-1 text-center text-base font-medium'>DIA</div>
                                        </div>
                                    </div>
                                    <div className='w-[32.3%] flex-col mx-2'>
                                        <div className='w-full h-full flex'>
                                            <div className='w-[33%] pl-1 text-center text-base font-medium'>MES</div>
                                            <div className='w-[33%] pl-1 text-center text-base font-medium'>SEM</div>
                                            <div className='w-[33%] pl-1 text-center text-base font-medium'>DIA</div>
                                        </div>
                                    </div>
                                    <div className='w-[32.3%] flex-col mx-2'>
                                        <div className='w-full h-full flex'>
                                            <div className='w-[33%] pl-1 text-center text-base font-medium'>MES</div>
                                            <div className='w-[33%] pl-1 text-center text-base font-medium'>SEM</div>
                                            <div className='w-[33%] pl-1 text-center text-base font-medium'>DIA</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full h-[40%] flex p-2'>
                                <div className='flex w-full h-full'>
                                    <div className='w-[20%] h-full flex justify-center p-2 items-center'>
                                        <div className='w-full h-[80%] bg-blue-500 text-4xl font-medium flex justify-center items-center rounded'>EGRESOS</div>
                                    </div>
                                    <div className='w-[80%] h-full flex-col p-2'>
                                        <div className='w-full h-[50%] flex pb-1'>
                                            <div className='w-[7%] h-full'>
                                                <div className='w-full h-full border rounded text-xl font-medium lg:text-xs lg:font-normal flex justify-center items-center '>MN</div>
                                            </div>
                                            <div className='w-[31%] h-full flex pl-2'>
                                                <div className='w-[33%] h-full bg-violet-700 rounded'></div>
                                                <div className='w-[33%] h-full bg-violet-700 rounded ml-1'></div>
                                                <div className='w-[33%] h-full bg-violet-700 rounded ml-1'></div>
                                            </div>
                                            <div className='w-[31%] h-full flex pl-2'>
                                                <div className='w-[33%] h-full bg-purple-600 rounded'></div>
                                                <div className='w-[33%] h-full bg-purple-600 rounded ml-1'></div>
                                                <div className='w-[33%] h-full bg-purple-600 rounded ml-1'></div>
                                            </div>
                                            <div className='w-[31%] h-full flex pl-2'>
                                                <div className='w-[33%] h-full bg-fuchsia-400 rounded'></div>
                                                <div className='w-[33%] h-full bg-fuchsia-400 rounded ml-1'></div>
                                                <div className='w-[33%] h-full bg-fuchsia-400 rounded ml-1'></div>
                                            </div>
                                        </div>
                                        <div className='w-full h-[50%] flex pt-1'>
                                            <div className='w-[7%] h-full'>
                                                <div className='w-full h-full border rounded text-xl font-medium lg:text-xs lg:font-normal flex justify-center items-center '>ME</div>
                                            </div>
                                            <div className='w-[31%] h-full flex pl-2'>
                                                <div className='w-[33%] h-full bg-violet-700 rounded'></div>
                                                <div className='w-[33%] h-full bg-violet-700 rounded ml-1'></div>
                                                <div className='w-[33%] h-full bg-violet-700 rounded ml-1'></div>
                                            </div>
                                            <div className='w-[31%] h-full flex pl-2'>
                                                <div className='w-[33%] h-full bg-purple-600 rounded'></div>
                                                <div className='w-[33%] h-full bg-purple-600 rounded ml-1'></div>
                                                <div className='w-[33%] h-full bg-purple-600 rounded ml-1'></div>
                                            </div>
                                            <div className='w-[31%] h-full flex pl-2'>
                                                <div className='w-[33%] h-full bg-fuchsia-400 rounded'></div>
                                                <div className='w-[33%] h-full bg-fuchsia-400 rounded ml-1'></div>
                                                <div className='w-[33%] h-full bg-fuchsia-400 rounded ml-1'></div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='h-[2%] w-full p-2'>
                        <hr className='bg-slate-400 w-full h-0.5'></hr>
                    </div>
                    <div className='h-[49%] w-full'>
                        <div className='w-full h-full flex-col'>
                            <div className='h-[15%] w-full flex p-2 pb-0'>
                                <div className='w-[26.5%] h-full'></div>
                                <div className='w-[73.5%] h-full flex'>
                                    <div className='w-[32.3%] flex-col px-1'>
                                        <div className='border-b text-lg text-center w-full font-medium'>PROGRAMADO</div>
                                        <div className='w-full h-full flex'>
                                            <div className='w-[33%] pl-1 text-center text-base font-medium'>MES</div>
                                            <div className='w-[33%] pl-1 text-center text-base font-medium'>SEM</div>
                                            <div className='w-[33%] pl-1 text-center text-base font-medium'>DIA</div>
                                        </div>
                                    </div>
                                    <div className='w-[32.3%] flex-col mx-2'>
                                        <div className='border-b text-lg text-center w-full font-medium'>EJECUTADO</div>
                                        <div className='w-full h-full flex'>
                                            <div className='w-[33%] pl-1 text-center text-base font-medium'>MES</div>
                                            <div className='w-[33%] pl-1 text-center text-base font-medium'>SEM</div>
                                            <div className='w-[33%] pl-1 text-center text-base font-medium'>DIA</div>
                                        </div>
                                    </div>
                                    <div className='w-[32.3%] flex-col mx-2'>
                                        <div className='border-b text-lg text-center w-full font-medium'>PENDIENTE</div>
                                        <div className='w-full h-full flex'>
                                            <div className='w-[33%] pl-1 text-center text-base font-medium'>MES</div>
                                            <div className='w-[33%] pl-1 text-center text-base font-medium'>SEM</div>
                                            <div className='w-[33%] pl-1 text-center text-base font-medium'>DIA</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full h-[40%] p-2'>
                                <div className='flex w-full h-full m-0 p-0'>
                                    <div className='w-[20%] h-full flex justify-center p-2 items-center'>
                                        <div className='w-full h-[80%] bg-blue-500 text-4xl font-medium flex justify-center items-center rounded'>FACTURACIÓN</div>
                                    </div>
                                    <div className='w-[80%] h-full flex-col p-2'>
                                        <div className='w-full h-[50%] flex pb-1'>
                                            <div className='w-[7%] h-full'>
                                                <div className='w-full h-full border rounded text-xl font-medium lg:text-xs lg:font-normal flex justify-center items-center '>MN</div>
                                            </div>
                                            <div className='w-[31%] h-full flex pl-2'>
                                                <div className='w-[33%] h-full bg-violet-700 rounded'></div>
                                                <div className='w-[33%] h-full bg-violet-700 rounded ml-1'></div>
                                                <div className='w-[33%] h-full bg-violet-700 rounded ml-1'></div>
                                            </div>
                                            <div className='w-[31%] h-full flex pl-2'>
                                                <div className='w-[33%] h-full bg-purple-600 rounded'></div>
                                                <div className='w-[33%] h-full bg-purple-600 rounded ml-1'></div>
                                                <div className='w-[33%] h-full bg-purple-600 rounded ml-1'></div>
                                            </div>
                                            <div className='w-[31%] h-full flex pl-2'>
                                                <div className='w-[33%] h-full bg-fuchsia-400 rounded'></div>
                                                <div className='w-[33%] h-full bg-fuchsia-400 rounded ml-1'></div>
                                                <div className='w-[33%] h-full bg-fuchsia-400 rounded ml-1'></div>
                                            </div>
                                        </div>
                                        <div className='w-full h-[50%] flex pt-1'>
                                            <div className='w-[7%] h-full'>
                                                <div className='w-full h-full border rounded text-xl font-medium lg:text-xs lg:font-normal flex justify-center items-center '>ME</div>
                                            </div>
                                            <div className='w-[31%] h-full flex pl-2'>
                                                <div className='w-[33%] h-full bg-violet-700 rounded'></div>
                                                <div className='w-[33%] h-full bg-violet-700 rounded ml-1'></div>
                                                <div className='w-[33%] h-full bg-violet-700 rounded ml-1'></div>
                                            </div>
                                            <div className='w-[31%] h-full flex pl-2'>
                                                <div className='w-[33%] h-full bg-purple-600 rounded'></div>
                                                <div className='w-[33%] h-full bg-purple-600 rounded ml-1'></div>
                                                <div className='w-[33%] h-full bg-purple-600 rounded ml-1'></div>
                                            </div>
                                            <div className='w-[31%] h-full flex pl-2'>
                                                <div className='w-[33%] h-full bg-fuchsia-400 rounded'></div>
                                                <div className='w-[33%] h-full bg-fuchsia-400 rounded ml-1'></div>
                                                <div className='w-[33%] h-full bg-fuchsia-400 rounded ml-1'></div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full h-[5%] flex'>
                                <div className='w-[26.5%] h-full'></div>
                                <div className='w-[73.5%] h-full flex'>
                                    <div className='w-[32.3%] flex-col px-1'>
                                        <div className='w-full h-full flex'>
                                            <div className='w-[33%] pl-1 text-center text-base font-medium'>MES</div>
                                            <div className='w-[33%] pl-1 text-center text-base font-medium'>SEM</div>
                                            <div className='w-[33%] pl-1 text-center text-base font-medium'>DIA</div>
                                        </div>
                                    </div>
                                    <div className='w-[32.3%] flex-col mx-2'>
                                        <div className='w-full h-full flex'>
                                            <div className='w-[33%] pl-1 text-center text-base font-medium'>MES</div>
                                            <div className='w-[33%] pl-1 text-center text-base font-medium'>SEM</div>
                                            <div className='w-[33%] pl-1 text-center text-base font-medium'>DIA</div>
                                        </div>
                                    </div>
                                    <div className='w-[32.3%] flex-col mx-2'>
                                        <div className='w-full h-full flex'>
                                            <div className='w-[33%] pl-1 text-center text-base font-medium'>MES</div>
                                            <div className='w-[33%] pl-1 text-center text-base font-medium'>SEM</div>
                                            <div className='w-[33%] pl-1 text-center text-base font-medium'>DIA</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full h-[40%] flex p-2'>
                                <div className='flex w-full h-full'>
                                    <div className='w-[20%] h-full flex justify-center p-2 items-center'>
                                        <div className='w-full h-[80%] bg-blue-500 text-4xl font-medium flex justify-center items-center rounded'>COBRANZA</div>
                                    </div>
                                    <div className='w-[80%] h-full flex-col p-2'>
                                        <div className='w-full h-[50%] flex pb-1'>
                                            <div className='w-[7%] h-full'>
                                                <div className='w-full h-full border rounded text-xl font-medium lg:text-xs lg:font-normal flex justify-center items-center '>MN</div>
                                            </div>
                                            <div className='w-[31%] h-full flex pl-2'>
                                                <div className='w-[33%] h-full bg-violet-700 rounded'></div>
                                                <div className='w-[33%] h-full bg-violet-700 rounded ml-1'></div>
                                                <div className='w-[33%] h-full bg-violet-700 rounded ml-1'></div>
                                            </div>
                                            <div className='w-[31%] h-full flex pl-2'>
                                                <div className='w-[33%] h-full bg-purple-600 rounded'></div>
                                                <div className='w-[33%] h-full bg-purple-600 rounded ml-1'></div>
                                                <div className='w-[33%] h-full bg-purple-600 rounded ml-1'></div>
                                            </div>
                                            <div className='w-[31%] h-full flex pl-2'>
                                                <div className='w-[33%] h-full bg-fuchsia-400 rounded'></div>
                                                <div className='w-[33%] h-full bg-fuchsia-400 rounded ml-1'></div>
                                                <div className='w-[33%] h-full bg-fuchsia-400 rounded ml-1'></div>
                                            </div>
                                        </div>
                                        <div className='w-full h-[50%] flex pt-1'>
                                            <div className='w-[7%] h-full'>
                                                <div className='w-full h-full border rounded text-xl font-medium lg:text-xs lg:font-normal flex justify-center items-center '>ME</div>
                                            </div>
                                            <div className='w-[31%] h-full flex pl-2'>
                                                <div className='w-[33%] h-full bg-violet-700 rounded'></div>
                                                <div className='w-[33%] h-full bg-violet-700 rounded ml-1'></div>
                                                <div className='w-[33%] h-full bg-violet-700 rounded ml-1'></div>
                                            </div>
                                            <div className='w-[31%] h-full flex pl-2'>
                                                <div className='w-[33%] h-full bg-purple-600 rounded'></div>
                                                <div className='w-[33%] h-full bg-purple-600 rounded ml-1'></div>
                                                <div className='w-[33%] h-full bg-purple-600 rounded ml-1'></div>
                                            </div>
                                            <div className='w-[31%] h-full flex pl-2'>
                                                <div className='w-[33%] h-full bg-fuchsia-400 rounded'></div>
                                                <div className='w-[33%] h-full bg-fuchsia-400 rounded ml-1'></div>
                                                <div className='w-[33%] h-full bg-fuchsia-400 rounded ml-1'></div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="flex w-full  justify-end items-center h-[8%] ">
                <div className='w-[15%] h-[100%] flex items-end lg:w-[20%] lg:h-[100%] '>
                    <img onClick={()=>cambiarVista()} src={logoAbexa} className='w-full h-[100%]  rounded'/>
                </div>
                <div className=" flex w-[70%] mr-10 ml-10 items-end h-full lg:w-[60%] lg:h-full">
                    <label className='h-[3px] border border-blue-600 bg-blue-600 w-full'></label>
                </div>
                <div className='w-[15%] h-full  flex  items-end lg:w-[20%] lg:h-full '>
                    <button className=" h-[100%] w-[100%] items-center rounded  p-2 flex flex-col bg-red-700">
                        <Timer></Timer>
                        <label className='w-full h-[30%] text-lg lg:text-xs font-medium'>{ObtenerFechaHoraActual()}</label>
                    </button>
                </div>
            </div>
        </div>
            
        </>
)}