import { ObtenerFechaHoraActual } from '../../utils/utils'
import { Timer } from '../modules/layout/Timer'
import logoEmpresa from '../../assets/css/images/Logo.jpeg'
export const CabeceraAdministrador = ()=>{
    return(
        <>
            <header className='w-full h-[20%] '>
                <div className="flex">
                    <div className='w-[20%] py-2 flex justify-center items-center'>
                        <img src={logoEmpresa} className='rounded-xl w-[80%] h-[80%]'></img>
                    </div>
                    <div className='w-[30%] flex justify-center items-center'>
                        <label className='text-3xl font-medium  text-white'>{ObtenerFechaHoraActual()}</label>
                        <Timer></Timer>
                    </div>
                    <div className='flex justify-end items-center'>
                        <label>Admin</label>
                        <img src='https://cdn-icons-png.flaticon.com/512/6326/6326055.png' className='w-[10%] h-[50%]'></img>
                    </div>
                </div>
            </header>
        </>
    )
}