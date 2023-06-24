import React from "react";
import MenuItem from './menuItem';
import logoEmpresa from '../../assets/css/images/Logo.jpeg'

import { Login } from "../pages/Login";
export const Cabecera = () =>{

    const menuData = [{ title: 'Inicio', path:'/Productos'},
                      { title: 'Tienda', path:'/catalogo'},
                      { title: 'Marcas', path:'*'},
                      { title: 'Contacto', path:'*'},
                    ];
    return (
        <>
            <header className='w-full h-[20%] bg-white'>
                <div className='w-full h-[40px] flex justify-center items-center bg-orange-500'>
                    <label className='text-white font-medium lg:font-light lg:text-xs'>Tiempos de entrega son de 1 a 5 días hábiles para el resto del país (ver políticas de envío y devolución).</label>
                </div>
                <div className='flex w-full h-auto bg-white'>
                    <div className='w-[20%] h-full p-2'>
                        <a href="/login">
                            <img src={logoEmpresa} className='h-full w-full'></img>
                        </a>
                    </div>
                    <div className='w-[80%] h-full flex p-2'>
                        <div className='w-full h-full flex-col'>
                            <div className='w-full h-[50%] pb-2 flex'>
                                <div className='w-[60%] h-full flex justify-center'>
                                    <div className='w-[50%] h-full border rounded-3xl flex justify-center px-2 py-1 hover:border-blue-900'>
                                        <input className='w-[90%] h-[90%]  text-black p-1 hover:placeholder:text-blue-900 font-normal focus:outline-none' placeholder='Busqueda...'></input>
                                    </div>
                                </div>
                            </div>
                            <nav className='w-full h-[50%] pt-2 bg-white '>
                            <ul className='flex justify-end'>
                                {menuData.map((menuItem) => (
                                    <MenuItem
                                        key={menuItem.title}
                                        title={menuItem.title}
                                        path={menuItem.path}
                                    />
                                ))}
                            </ul>
                            </nav>
                        </div>                   
                    </div>
                </div>
            </header>
        </> 
    );
}