
export const BodyAdministrador = () =>{
    const Productos =[
        {codProducto:'1',nomProducto:'Cemento Sol',cantidadActual:'40',cantidadMinima:'5 unidades',cantidadMaxima:'50 unidades',precioCompra:'25.00',precioVenta:'35.00'},
        {codProducto:'2',nomProducto:'Cemento Pacasmayo',cantidadActual:'40',cantidadMinima:'5 unidades',cantidadMaxima:'50 unidades',precioCompra:'28.00',precioVenta:'38.00'},
        {codProducto:'3',nomProducto:'Arena fina',cantidadActual:'40',cantidadMinima:'5 m3',cantidadMaxima:'50 m3',precioCompra:'50.00',precioVenta:'65.00'},
        {codProducto:'4',nomProducto:'Arena gruesa',cantidadActual:'40',cantidadMinima:'5 m3',cantidadMaxima:'50 m3',precioCompra:'40.00',precioVenta:'45.00'},
        {codProducto:'5',nomProducto:'Taladro',cantidadActual:'10',cantidadMinima:'2',cantidadMaxima:'20',precioCompra:'125.00',precioVenta:'200.00'},
        {codProducto:'6',nomProducto:'Alicate',cantidadActual:'12',cantidadMinima:'3',cantidadMaxima:'15',precioCompra:'30.00',precioVenta:'35.00'},
        {codProducto:'7',nomProducto:'Escalera',cantidadActual:'5',cantidadMinima:'2',cantidadMaxima:'10',precioCompra:'95.00',precioVenta:'115.00'},
        {codProducto:'8',nomProducto:'Clavos de 1 pulgada',cantidadActual:'5 cajas',cantidadMinima:'2 cajas',cantidadMaxima:'10 cajas',precioCompra:'5.00',precioVenta:'15.00'},
        {codProducto:'9',nomProducto:'Clavos de 2 pulgada',cantidadActual:'5 cajas',cantidadMinima:'2 cajas',cantidadMaxima:'10 cajas',precioCompra:'6.00',precioVenta:'16.00'},
        {codProducto:'10',nomProducto:'Clavos de 3 pulgada',cantidadActual:'5 cajas',cantidadMinima:'2 cajas',cantidadMaxima:'10 cajas',precioCompra:'5.50',precioVenta:'15.50'},
        {codProducto:'11',nomProducto:'Destornillador de estrella',cantidadActual:'5',cantidadMinima:'2',cantidadMaxima:'10',precioCompra:'13.00',precioVenta:'24.00'},
        {codProducto:'12',nomProducto:'Destornillador plano',cantidadActual:'5',cantidadMinima:'2',cantidadMaxima:'10',precioCompra:'13.00',precioVenta:'24.00'},
        {codProducto:'13',nomProducto:'Caja de tornillos de estrella',cantidadActual:'5',cantidadMinima:'2',cantidadMaxima:'10',precioCompra:'95.00',precioVenta:'115.00'},
        {codProducto:'14',nomProducto:'Caja de tornillos plano',cantidadActual:'5',cantidadMinima:'2',cantidadMaxima:'10',precioCompra:'95.00',precioVenta:'115.00'},
        {codProducto:'15',nomProducto:'Chapa clásica',cantidadActual:'5',cantidadMinima:'2',cantidadMaxima:'10',precioCompra:'95.00',precioVenta:'115.00'},
    ]
    return(
        <>
            <div className="bg-black"> 
                <div className="bg-slate-900 ">
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
                </div>
                <div>
                    <div className="w-full h-[15%] p-2">
                        <label className="text-2xl font-bold ">Panel de Control</label>
                    </div>
                </div>
                <div className="p-2 h-[100%]">
                    <table className="table">
                        <thead>
                            <th className="bg-[#2e5289]">N</th>
                            <th className="bg-[#2e5289]">Nombre</th>
                            <th className="bg-[#2e5289]">Cantidad actual</th>
                            <th className="bg-[#2e5289]">Cantidad mínima</th>
                            <th className="bg-[#2e5289]">Cantidad máxima</th>
                            <th className="bg-[#2e5289]">Precio compra</th>
                            <th className="bg-[#2e5289]">Precio venta</th>
                            <th className="bg-[#2e5289]"></th>
                            <th className="bg-[#2e5289]"></th>
                        </thead>
                        <tbody>
                            {
                                Productos.map((data,i)=>{
                                    return(
                                        <tr>
                                            <td className="text-center">{i+1}</td>
                                            <td className="text-center">{data.nomProducto}</td>
                                            <td className="text-center">{data.cantidadActual}</td>
                                            <td className="text-center">{data.cantidadMinima}</td>
                                            <td className="text-center">{data.cantidadMaxima}</td>
                                            <td className="text-center">{data.precioCompra}</td>
                                            <td className="text-center">{data.precioVenta}</td>
                                            <td className="text-center">
                                                {/* <button className="bg-blue-600 rounded-md py-1 px-[5px] flex justify-center hover:bg-blue-400">
                                                    <i className="fa fa-pencil-square-o text-[15px] text-white " aria-hidden="true" ></i>
                                                </button> */}
                                            </td>
                                            <td className="text-center">
                                                {/* <button className="bg-red-500 rounded-md py-1 px-[5px] flex justify-center hover:bg-blue-400">
                                                    <i className="fa fa-trash text-[15px] text-white" aria-hidden="true"></i>
                                                </button> */}
                                            </td>
                                        </tr>
                                    )
                                    
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}