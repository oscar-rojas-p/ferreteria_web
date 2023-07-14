import React, { useEffect, useState } from 'react';
import {Cabecera} from '../components/Cabecera';

import imagen1 from '../../assets/css/images/Alicate de corte.jpg';
import imagen2 from '../../assets/css/images/Alicate.jpg';
import imagen3 from '../../assets/css/images/Cable mellizo blanco.jpg';
import imagen4 from '../../assets/css/images/Cable mellizo verde.jpg';
import imagen5 from '../../assets/css/images/canaleta 15x10x2MT.jpg';
import imagen6 from '../../assets/css/images/Cinta aislante trupper.jpg';
import imagen7 from '../../assets/css/images/Clavos de acero.jpg';
import imagen8 from '../../assets/css/images/descarga.jpg';
import imagen9 from '../../assets/css/images/Destornillador.jpg';
import imagen10 from '../../assets/css/images/Kit de alicates.jpg';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import generico from '../../assets/css/images/generico.jpg';
import interrogacion from '../../assets/css/images/pregunta.jpg';
import { useConexBD } from '../../hooks/useConexBD';

// import MiCarousel from '../components/carousel';
// import BodyList from '../components/listasBody';
// import Blog from '../components/blog'

export const Catalogo = () => {

    const {listarProductos,productos} = useConexBD()
    const categorias =[{title :'Cemento'},{title :'Herramientas'},{title :'Hierro'},{title :'Pinturas'},{title :'Disolventes'},{title :'PVC'}, {title :'Tanques'},{title :'Otros'}]

    const [costoTotal,setCostoTotal] = useState(0)

    const [open, setOpen] = useState(false);

    
    useEffect(() => {
        listarProductos()
    },[])

    return(
        <>
            <Cabecera/>
            <div className='bg-white w-full h-[60%] flex p-5 '>
                <div className='w-[25%] h-full'>
                    <div className='w-full h-[70%] flex flex-col px-10'>
                        <div className='font-bold text-orange-400 text-2xl'>Categorías</div>
                        <div className='pt-2'>
                            <ul className='list-disc px-5'>
                                {
                                    categorias.map((categoria)=>{
                                        return<li className='text-blue-900 cursor-pointer hover:text-orange-500 hover:font-medium'>{categoria.title}</li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div className='w-full h-[30%] flex flex-col px-10'>
                        <div className='font-bold text-orange-400 text-2xl '>Distribuidor</div>
                        <div className=''>
                            <p className='break-words text-blue-700 text-justify'>¿Tienes interés en un producto que no está en nuestro catálogo? <p className='text-blue-900 font-semibold'>¡Queremos saberlo!</p> <p className='font-semibold text-orange-500 cursor-pointer'>hablar con nuestros asesores</p></p>
                        </div>
                        <div className='text-black w-full border border-black mt-12'>
                                <div className='w-full h-12 text-center text-white text-3xl bg-[#d48051]'>Tu Carrito</div>
                                <div className='w-full bg-[#f1f1f1] p-8'>
                                    <div className='text-xl'>Tu Total: S/{costoTotal}</div>

                                    <div onClick={() => setOpen(true)} className='w-full mt-5 h-20 rounded-md cursor-pointer bg-black px-6 py-5'>
                                        <p className='text-white text-2xl'>Pagar <i className="float-right fa fa-shopping-basket" aria-hidden="true"></i></p>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
                <div className='w-[75%]'>
                    <div className='w-full'>
                        <div className='grid grid-cols-3 gap-4 w-full'>
                            {
                                productos.map(function(data,i){
                                    return  (
                                        <div className='border border-[#888484] rounded-2xl p-5' >
                                            <div className='w-full text-black text-center pb-4 font-medium text-3xl'>{(data.nomProducto).toUpperCase()}</div>
                                            <img className='m-auto pb-5' src={generico} />
                                            <div onClick={() => setCostoTotal(costoTotal+data.precioVenta)} className="hover:scale-110 text-black text-center w-[90%] m-auto"><button className='border border-black px-6 w-full py-2 rounded-xl bg-[#d48051] text-white text-lg'>S/. {data.precioVenta}</button></div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>   
            </div>

            <Dialog
                    open={open}
                    onClose={() => setOpen(false)}
            >   
                <DialogTitle id="alert-dialog-title">
                    <label className='text-2xl  w-full'><b>Confirmar Compra</b></label>
                </DialogTitle>

                <DialogContent>
                    <div className='flex'>
                        <div className='w-44 text-center'>Esta seguro de realizar la compra?</div>
                        <img src={interrogacion} className='w-16'></img>
                    </div>
                </DialogContent>
                
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Cancelar</Button>
                    <Button onClick={{}} >Confirmar</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}  