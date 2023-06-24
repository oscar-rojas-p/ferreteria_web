import React from 'react';

//import '../../layaouts/style.css';
//import Catalogo from '../pages/Catalogo';
import { Link } from 'react-router-dom'
import imagen1 from '../../assets/css/images/iconos/patio.png';
import imagen2 from '../../assets/css/images/iconos/electrico.png';
import imagen3 from '../../assets/css/images/iconos/tubo.png';
import imagen4 from '../../assets/css/images/iconos/pintura.png';
import imagen5 from '../../assets/css/images/iconos/fierro.png';
import imagen6 from '../../assets/css/images/iconos/herramienta.png';
import imagen7 from '../../assets/css/images/iconos/cementoSol.png';

const images = [imagen1,imagen2,imagen3,imagen4,imagen5,imagen6]

const bodyList = () => {
    return (
        <>
            <div className='flex-col bg-white py-5'>
                <div className='w-full text-blue-800 text-3xl text-center py-3'>Categorias</div>
                <div className='w-full h-full p-2 flex'>
                    <div className='w-[70%] h-full'>
                        <div className='w-full h-full border-2 rounded-3xl border-blue-800 text-black'>
                            <div className='flex-col'>
                                <div className='w-full h-full flex'>
                                    <div className="w-[33.3%] h-full text-center p-5 ">
                                        <div className='rounded-3xl bg-slate-100 flex flex-col items-center py-1'>
                                            <div className='w-full h-full flex justify-center'>
                                                <img className="imgClas" src={imagen1}/>
                                            </div>
                                            <h3 className='w-full h-full text-center text-orange-500'>Patio</h3>
                                            <div className='w-full text-blue-800 font-medium'>
                                                <Link to='/catalogo'>Abrir aqui</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[33.3%] h-full text-center p-5">
                                        <div className='rounded-3xl bg-slate-100 flex flex-col items-center py-1'>
                                            <div className='w-full h-full flex justify-center'>
                                                <img className="imgClas" src={imagen2}/>
                                            </div>
                                            <h3 className='w-full h-full text-center text-orange-500'>Materiales Eléctricos</h3>
                                            <div className='w-full text-blue-800 font-medium'>
                                                <Link to='/catalogo'>Abrir aqui</Link>
                                            </div>
                                        </div>    
                                    </div>
                                    <div className="w-[33.3%] h-full text-center p-5">
                                        <div className='rounded-3xl bg-slate-100 flex flex-col items-center py-1'>
                                            <div className='w-full h-full flex justify-center'>
                                                <img className="imgClas" src={imagen3}/>
                                            </div>
                                            <h3 className='w-full h-full text-center text-orange-500'>Tuberías y Accesorios en PVC</h3>
                                            <div className='w-full text-blue-800 font-medium'>
                                                <Link to='/catalogo'>Abrir aqui</Link>
                                            </div>
                                        </div>    
                                    </div>
                                </div>
                                <div className='w-full h-full flex'>
                                    <div className="w-[33.3%] h-full text-center p-5">
                                        <div className='rounded-3xl bg-slate-100 flex flex-col items-center py-1'>
                                            <div className='w-full h-full flex justify-center'>
                                                <img className="imgClas" src={imagen4}/>
                                            </div>
                                            <h3 className='w-full h-full text-center text-orange-500'>Pinturas y disolventes</h3>
                                            <div className='w-full text-blue-800 font-medium'>
                                                <Link to='/catalogo'>Abrir aqui</Link>
                                            </div>
                                        </div>    
                                    </div>
                                    <div className="w-[33.3%] h-full text-center p-5">
                                        <div className='rounded-3xl bg-slate-100 flex flex-col items-center py-1'>
                                            <div className='w-full h-full flex justify-center'>
                                                <img className="imgClas" src={imagen5}/>
                                            </div>
                                            <h3 className='w-full h-full text-center text-orange-500'>Hierro</h3>
                                            <div className='w-full text-blue-800 font-medium'>
                                                <Link to='/catalogo'>Abrir aqui</Link>
                                            </div>
                                        </div>    
                                    </div>
                                    <div className="w-[33.3%] h-full text-center p-5">
                                        <div className='rounded-3xl bg-slate-100 flex flex-col items-center py-1'>
                                            <div className='w-full h-full flex justify-center'>
                                                <img className="imgClas" src={imagen6}/>
                                            </div>
                                            <h3 className='w-full h-full text-center text-orange-500'>Herramientas</h3>
                                            <div className='w-full text-blue-800 font-medium'>
                                                <Link to='/catalogo'>Abrir aqui</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[30%] h-full'>
                        <div className='w-full h-full border-2 rounded-3xl border-blue-800 text-black'>
                            <div className='flex justify-center text-blue-900 font-medium text-xl'>
                                <h2>Destacado</h2>
                            </div>
                            <div className='w-full h-full p-5'>
                                <div className='flex flex-col p-2 bg-slate-100 rounded-3xl'>
                                    <div className='w-full h-full flex justify-center'>
                                        <img src={imagen7} className='w-[50%] h-[183px] flex justify-center'/>
                                    </div>
                                    <div className='text-center'>
                                        <h3>CEMENTO SOL</h3>
                                    </div>
                                    <div className='w-full h-full flex justify-center items-center'>
                                        <a href="https://wa.me/923358202" className="buttonA w-[50%] h-[50%] text-center">Cotizar</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    );
}

export default bodyList;