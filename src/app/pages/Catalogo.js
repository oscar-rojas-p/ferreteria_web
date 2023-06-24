import React from 'react';
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

// import MiCarousel from '../components/carousel';
// import BodyList from '../components/listasBody';
// import Blog from '../components/blog'
export const Catalogo = () => {
    const categorias =[{title :'Cemento'},{title :'Herramientas'},{title :'Hierro'},{title :'Pinturas'},{title :'Disolventes'},{title :'PVC'}, {title :'Tanques'},{title :'Otros'}]
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
                        <div style={{color:'black',width:'100%',border:'1px solid black',marginTop:'50px'}}>
                                <div style={{width:'100%',height:'50px',textAlign:'center',color:'white',background:'#d48051',fontSize:'30px'}}>Tu Carrito</div>
                                <div style={{width:'100%',background:'#f1f1f1',padding:'30px'}}>
                                    <div style={{fontSize:'20px'}}>Tu Total: S/200.00</div>
                                    <div style={{width:'100%',marginTop:'20px',height:'80px',borderRadius:'5px',background:'black',padding:'25px 20px 25px 20px'}}>
                                        <p style={{color:'white',fontSize:'25px',cursor:'pointer'}}>Pagar <i style={{float:'right'}} className="fa fa-shopping-basket" aria-hidden="true"></i></p>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
                <div className='w-[75%]' style={{}}>
                    <div style={{width:'100%'}}>
                        <div style={{display:'flex',width:'100%'}}>
                            <div style={{width:'33%',textAlign:'center',padding:'20px'}}>
                                <div style={{border:'1px solid #888484',boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px',padding:'20px',borderRadius:'20px'}}>
                                    <img style={{margin:'0 auto'}} src={imagen1} />
                                    <div className="hover:scale-110" style={{color:'black',textAlign:'center',width:'100%',fontSize:'30px'}}><button style={{border:'1px solid black',padding:'5px 20px 5px 20px',borderRadius:'15px',background:'#d48051',color:'white'}}>Alicate de corte</button></div>
                                </div>
                            </div>
                            <div style={{width:'33%',textAlign:'center',padding:'20px'}}>
                                <div style={{border:'1px solid #888484',boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px',padding:'20px',borderRadius:'20px'}}>
                                    <img style={{margin:'0 auto'}} src={imagen2} />
                                    <div className="hover:scale-110" style={{color:'black',textAlign:'center',width:'100%',fontSize:'30px'}}><button style={{border:'1px solid black',padding:'5px 20px 5px 20px',borderRadius:'15px',background:'#d48051',color:'white'}}>Alicate</button></div>
                                </div>
                            </div>
                            <div style={{width:'33%',textAlign:'center',padding:'20px'}}>
                                <div style={{border:'1px solid #888484',boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px',padding:'20px',borderRadius:'20px'}}>
                                    <img style={{margin:'0 auto',height:'222px'}} src={imagen3} />
                                    <div className="hover:scale-110" style={{color:'black',textAlign:'center',width:'100%',fontSize:'30px'}}><button style={{border:'1px solid black',padding:'5px 20px 5px 20px',borderRadius:'15px',background:'#d48051',color:'white'}}>Cable mellizo blanco</button></div>
                                </div>
                            </div>
                        </div>
                        <div style={{display:'flex',width:'100%'}}>
                            <div style={{width:'33%',textAlign:'center',padding:'20px'}}>
                                <div style={{border:'1px solid #888484',boxShadow:'box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px',padding:'20px',borderRadius:'20px'}}>
                                    <img style={{margin:'0 auto'}} src={imagen4} />
                                    <div className="hover:scale-110" style={{color:'black',textAlign:'center',width:'100%',fontSize:'30px'}}><button style={{border:'1px solid black',padding:'5px 20px 5px 20px',borderRadius:'15px',background:'#d48051',color:'white'}}>Cable mellizo verde</button></div>
                                </div>

                            </div>
                            <div style={{width:'33%',textAlign:'center',padding:'20px'}}>
                                <div style={{border:'1px solid #888484',boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px',padding:'20px',borderRadius:'20px'}}>
                                    <img style={{margin:'0 auto'}} src={imagen5} />
                                    <div className="hover:scale-110" style={{color:'black',textAlign:'center',width:'100%',fontSize:'30px'}}><button style={{border:'1px solid black',padding:'5px 20px 5px 20px',borderRadius:'15px',background:'#d48051',color:'white'}}>Canaleta 15x10x2MT</button></div>
                                </div>

                            </div>
                            <div style={{width:'33%',textAlign:'center',padding:'20px'}}>
                                <div style={{border:'1px solid #888484',boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px',padding:'20px',borderRadius:'20px'}}>
                                    <img style={{margin:'0 auto'}} src={imagen6} />
                                    <div className="hover:scale-110" style={{color:'black',textAlign:'center',width:'100%',fontSize:'30px'}}><button style={{border:'1px solid black',padding:'5px 20px 5px 20px',borderRadius:'15px',background:'#d48051',color:'white'}}>Cinta aislante trupper</button></div>
                                </div>

                            </div>
                        </div>
                        <div style={{display:'flex',width:'100%'}}>
                            <div style={{width:'33%',textAlign:'center',padding:'20px'}}>
                                <div style={{border:'1px solid #888484',boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px',padding:'20px',borderRadius:'20px'}}>
                                    <img style={{margin:'0 auto',height:'222px'}} src={imagen7} />
                                    <div className="hover:scale-110" style={{color:'black',textAlign:'center',width:'100%',fontSize:'30px'}}><button style={{border:'1px solid black',padding:'5px 20px 5px 20px',borderRadius:'15px',background:'#d48051',color:'white'}}>Clavos de acero</button></div>
                                </div>

                            </div>
                            <div style={{width:'33%',textAlign:'center',padding:'20px'}}>
                                <div style={{border:'1px solid #888484',boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px',padding:'20px',borderRadius:'20px'}}>
                                    <img style={{margin:'0 auto'}} src={imagen8} />
                                    <div className="hover:scale-110" style={{color:'black',textAlign:'center',width:'100%',fontSize:'30px'}}><button style={{border:'1px solid black',padding:'5px 20px 5px 20px',borderRadius:'15px',background:'#d48051',color:'white'}}>Tuerca</button></div>
                                </div>

                            </div>
                            <div style={{width:'33%',textAlign:'center',padding:'20px'}}>
                                <div style={{border:'1px solid #888484',boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px',padding:'20px',borderRadius:'20px'}}>
                                    <img style={{margin:'0 auto'}} src={imagen9} />
                                    <div className="hover:scale-110" style={{color:'black',textAlign:'center',width:'100%',fontSize:'30px'}}><button style={{border:'1px solid black',padding:'5px 20px 5px 20px',borderRadius:'15px',background:'#d48051',color:'white'}}>Destornillador</button></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>   
            </div>
        </>
    )
}  