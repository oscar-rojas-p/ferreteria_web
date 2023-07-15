import { useConexBD } from "../../hooks/useConexBD"
import { Login } from "../pages/Login"
import { Modal} from '../components/modal/Modal'
import { useModal } from "../../hooks/useModal"
import { useEffect } from "react"
export const BodyAdministrador = () =>{
    const {productos,listarProductos,registrarProducto,producto,editarValorProducto,isOpenProductos,openModalProductos,closeModalProductos} =useConexBD()
    
    const abrirModal = ()=>{
        openModalProductos();
    }

    useEffect(() => {
        listarProductos()
    },[])
    return(
        <>
            <div className="bg-black"> 
                {/* <div className="bg-slate-900 ">
                    <nav className="">
                        <ul className="flex">
                            <li className="w-[10%] text-center hover:bg-slate-600 p-3 cursor-pointer">Inicio</li>
                            <li className="w-[20%] text-center hover:bg-slate-600 p-3 cursor-pointer">Usuarios</li>
                            <li className="w-[20%] text-center hover:bg-slate-600 p-3 cursor-pointer">Clientes</li>
                            <li className="w-[20%] text-center hover:bg-slate-600 p-3 cursor-pointer">Proveedores</li>
                            <li className="w-[20%] text-center hover:bg-slate-600 p-3 cursor-pointer">Productos</li>
                            <li className="w-[10%] text-center hover:bg-slate-600 p-3 cursor-pointer">Ventas</li>
                        </ul>
                    </nav>
                </div> */}
                <div>
                    <div className="w-full h-[15%] p-2 flex items-center">
                        <label className="text-2xl font-bold ">Registro de Productos</label>
                        <div className="pl-4">
                            <button onClick={()=>{abrirModal()}} className="cursor-pointer p-2 rounded-2xl border-2 border-white bg-[#2e5289]">
                                <label className=" cursor-pointer font-bold">Nuevo</label>
                                <i className="fa fa-plus pl-2 text-white"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="p-2 h-[100%]">
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="bg-[#2e5289]">N</th>
                                <th className="bg-[#2e5289]">Nombre</th>
                                <th className="bg-[#2e5289]">Cantidad actual</th>
                                <th className="bg-[#2e5289]">Cantidad mínima</th>
                                <th className="bg-[#2e5289]">Cantidad máxima</th>
                                <th className="bg-[#2e5289]">Precio compra</th>
                                <th className="bg-[#2e5289]">Precio venta</th>
                                {/* <th className="bg-[#2e5289]"></th>
                                <th className="bg-[#2e5289]"></th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                productos.length != 0 ?
                                        productos.map(function(data,i){
                                            return (<tr key={i+1}>
                                                        <td className="text-center">{i+1}</td>
                                                        <td className="text-center">{data.nomProducto}</td>
                                                        <td className="text-center">{data.cantidadActual}</td>
                                                        <td className="text-center">{data.cantidadMinima}</td>
                                                        <td className="text-center">{data.cantidadMaxima}</td>
                                                        <td className="text-center">{data.precioCompra}</td>
                                                        <td className="text-center">{data.precioVenta}</td>
                                                        {/* <td className="text-center">
                                                            <button className="bg-blue-600 rounded-md py-1 px-[5px] flex justify-center hover:bg-blue-400">
                                                                <i className="fa fa-pencil-square-o text-[15px] text-white " aria-hidden="true" ></i>
                                                            </button>
                                                        </td>
                                                        <td className="text-center">
                                                            <button className="bg-red-500 rounded-md py-1 px-[5px] flex justify-center hover:bg-blue-400">
                                                                <i className="fa fa-trash text-[15px] text-white" aria-hidden="true"></i>
                                                            </button>
                                                        </td> */}
                                                    </tr>)
                                        
                                        })
                                    :
                                        <tr><td colSpan="8" className="text-center">Sin productos registrados...</td></tr>
                            }
                        </tbody>
                    </table>
                </div>
            </div>


            <Modal title={'Registrar Producto'} isOpen={isOpenProductos} closeModal={closeModalProductos} action={registrarProducto}>
                    <div className="flex flex-col w-full h-full">
                            <div className="w-full flex">
                                <div className="w-[50%] flex flex-col px-1">
                                    <label className="">Nombre</label>
                                    <input className="text-black" onChange={(e) => editarValorProducto("nomProducto", e.target.value)}></input>
                                </div>
                                <div className="w-[50%] flex flex-col px-1">
                                    <label className="">Abreviatura</label>
                                    <input className="text-black" onChange={(e) => editarValorProducto("abrevProducto", e.target.value)}></input>
                                </div>
                            </div>
                            <div className="w-full flex ">
                                <div className="w-[50%] flex flex-col px-1">
                                    <label className="">Codigo</label>
                                    <input className="text-black" onChange={(e) => editarValorProducto("codigoProducto", e.target.value)}></input>
                                </div>
                                <div className="w-[50%] flex flex-col px-1">
                                    <label className="">Descripcion</label>
                                    <input className="text-black" onChange={(e) => editarValorProducto("descripcionProducto", e.target.value)}></input>
                                </div>
                            </div>
                            <div className="w-full flex">
                                <div className="w-[50%] flex flex-col px-1">
                                    <label className="">Código SubCategoria</label>
                                    <input className="text-black" onChange={(e) => editarValorProducto("codSubCategoria", e.target.value)}></input>
                                </div>
                                <div className="w-[50%] flex flex-col px-1">
                                    <label className="">Cantidad Minima</label>
                                    <input className="text-black" onChange={(e) => editarValorProducto("cantidadMinima", e.target.value)}></input>
                                </div>
                            </div>
                            <div className="w-full flex">
                                <div className="w-[50%] flex flex-col px-1">
                                    <label className="">Cantidad Maxima</label>
                                    <input className="text-black" onChange={(e) => editarValorProducto("cantidadMaxima", e.target.value)}></input>
                                </div>
                                <div className="w-[50%] flex flex-col px-1">
                                    <label className="">Precio Compra</label>
                                    <input className="text-black" onChange={(e) => editarValorProducto("precioCompra", e.target.value)}></input>
                                </div>
                            </div>
                            <div className="w-full flex">
                                <div className="w-[50%] flex flex-col px-1">
                                    <label className="">Precio Venta</label>
                                    <input className="text-black" onChange={(e) => editarValorProducto("precioVenta", e.target.value)}></input>
                                </div>
                                <div className="w-[50%] flex flex-col px-1">
                                    <label className="">Codigo Moneda Compra</label>
                                    <input className="text-black" onChange={(e) => editarValorProducto("codMonedaCompra", e.target.value)}></input>
                                </div>
                            </div>
                            <div className="w-full flex">
                                <div className="w-[50%] flex flex-col px-1">
                                    <label className="">Codigo Moneda Venta</label>
                                    <input className="text-black" onChange={(e) => editarValorProducto("codMonedaVenta", e.target.value)}></input>
                                </div>
                                <div className="w-[50%] flex flex-col px-1">
                                    <label className="">Codigo Usuario Creacion</label>
                                    <input className="text-black" onChange={(e) => editarValorProducto("codUsuarioCreacion", e.target.value)}></input>
                                </div>
                            </div>
                            
                    </div>       
            </Modal>
        </>
    )
}