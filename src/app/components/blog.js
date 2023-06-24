import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

import imagen1 from '../../assets/css/images/blog/techo.jpg'
import imagen2 from '../../assets/css/images/blog/hierro.jpg'
import imagen3 from '../../assets/css/images/blog/drywall.jpeg'

export const  Blog = () => {
    return(
        <>
            <div className='flex-col px-2 py-4 bg-white '>
                <div className='py-2'>
                    <h1 className='text-blue-800 text-4xl text-center font-medium'>Blog</h1>
                </div>
                <div className='flex py-2'>
                    <div className='flex flex-col w-[33.3%] p-1 text-black'>
                        <div className='w-full h-full flex'>
                            <img className="w-[100%]" src={imagen1}/>
                        </div>
                        <div className="flex justify-center font-medium py-2">
                            <span>Tipos de tejas</span>
                        </div>
                        <div className=" flex justify-center">
                            <p className='text-justify'>Las tejas son elementos clave en la construcción de techos y cubiertas. No solo cumplen una función práctica al proteger la estructura de los elementos</p>
                        </div>
                    </div>
                    <div  className='flex flex-col w-[33.3%] p-1 text-black'>
                        <div className='w-full h-full flex'>
                            <img className="w-[100%]" src={imagen2}/>
                        </div>
                        <div className="flex justify-center font-medium py-2">
                            <span>Diferencias entre el hierro y acero</span>
                        </div>
                        <div className=" flex justify-center">
                            <p className='text-justify'>El hierro y el acero son dos materiales ampliamente utilizados en la industria de la construcción y la fabricación. Aunque a menudo se utilizan indistintamente</p>
                        </div>
                    </div>
                    <div  className='flex flex-col w-[33.3%] p-1 text-black'>
                        <div className='w-full h-full flex'>
                            <img className="w-[100%]" src={imagen3}/>
                        </div>    
                        <div className="flex justify-center font-medium py-2">
                            <span className='text-justify'>¿Qué es el sistema DryWall?</span>
                        </div>
                        <div className="flex justify-center">
                            <p className='text-justify'>El sistema Drywall, también conocido como sistema liviano o construcción en seco, es una técnica de construcción ampliamente utilizada en todo el mundo. Consiste en</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

