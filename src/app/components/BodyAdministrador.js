
export const BodyAdministrador = () =>{
    return(
        <>
            <div>
                <div className="bg-slate-900">
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
            </div>
        </>
    )
}