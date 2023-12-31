import { ObtenerFechaHoraActual } from '../../utils/utils'
import { Timer } from '../modules/layout/Timer'
import logoEmpresa from '../../assets/css/images/Logo.jpeg'
import { Login } from '../pages/Login'
export const CabeceraAdministrador = ()=>{
    return(
        <>
            <header className='w-full h-[30%] '>
                <div className="flex">
                    <div className='w-[20%] py-2 flex justify-center items-center'>
                        <a href='/Login' className='cursor-pointer'>
                            <img src={logoEmpresa} className='rounded-xl w-[80%] h-[80%]'></img>
                        </a>
                    </div>
                    <div className='w-[30%] flex justify-center items-center'>
                        <label className='text-3xl font-medium  text-white'>{ObtenerFechaHoraActual()}</label>
                        <Timer></Timer>
                    </div>
                    <div className='flex justify-end items-center w-[50%]'>
                        <label>Admin</label>
                        <img src='https://cdn-icons-png.flaticon.com/512/6326/6326055.png' className='w-[10%] h-[50%]'></img>
                    </div>
                </div>
            </header>
        </>
    )
}