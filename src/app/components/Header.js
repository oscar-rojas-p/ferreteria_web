import MenuItem from './menuItem';
import logoEmpresa from '../../assets/css/images/Logo.jpeg'
export const Header = () => {
    const menuData = [{ title: 'Inicio', path:'/Productos'},
                      { title: 'Tienda', path:'/catalogo'},
                      { title: 'Marcas', path:'*'},
                      { title: 'Contacto', path:''},
                      { title: 'Preguntas Frecuentas', path:''},
                      { title: 'Blog', path:''}
                    ];
    return (
        <>
            <header className='w-full h-[20%] bg-white'>
                <div className='w-full h-[20%] flex justify-center items-center bg-orange-400'>
                  <label className='text-white font-medium lg:font-light lg:text-xs'>Tiempos de entrega son de 1 a 5 días hábiles para el resto del país (ver políticas de envío y devolución).</label>
                </div>

                <div className='flex w-full h-[80%] bg-white'>
                  <div className='w-[20%] h-full p-2'>
                    <img src={logoEmpresa} className='h-full w-full'></img>
                  </div>
                  <div className='w-[80%] h-full flex p-2'>
                    <div className='w-full h-full flex-col'>
                      <div className='w-full h-[50%] pb-2 flex'>
                        <div className='w-[60%] h-full flex justify-center'>
                            <div className='w-[50%] h-full border rounded-3xl flex justify-center px-2 py-1'>
                                <input className='w-[90%] h-[90%] p-1 hover:placeholder:text-blue-900 font-normal focus:outline-none' placeholder='Busqueda...'></input>
                            </div>
                        </div>
                        <div className='w-[20%] flex justify-start'>
                            <button className='border-2 border-blue-900 rounded-3xl w-[70%] h-full hover:bg-blue-100 text-blue-900 font-medium'>Contactanos</button>
                        </div>
                        <div className='w-[20%] flex justify-start'>
                            <button className='border-2 border-blue-900 rounded-3xl w-[70%] h-full hover:bg-blue-100 hover:text-blue-900 text-slate-50 font-medium bg-blue-900'>Pagos en línea</button>
                        </div>
                      </div>
                      <nav className='w-full h-[50%] pt-2 bg-white'>
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
              {/* <div className='w-full h-35 flex bg-white'>
                <div className='w-[20%] h-full flex justify-center'>
                  <img src={logoEmpresa} className='p-2 rounded-xl'></img>
                </div>
                <div className='w-[80%] h-full flex flex-col'>
                  <div className='w-full h-[50%] flex items-center'>
                    <div className='w-[50%] h-full border-2 border-gray-400 rounded-3xl flex items-center'>
                      <i class="fa fa-search" className='w-[20%]' aria-hidden="true"></i>
                      <input className='border-0 w-[80%] h-[80%] rounded-3xl pointer-events-auto' placeholder='Buscar...'></input>
                    </div>
                    <div className='ml-10 w-[25%] f-full flex justify-center items-center'>
                      <button className='w-full h-full rounded-3xl font-medium hover:transition-colors text-blue-800 hover:text-white border-2 border-blue-700 hover:bg-blue-200'>Contactanos</button>
                    </div>
                    <div className=' mr-10 w-[25%] h-full ml-20  flex justify-center items-center '>
                      <button className='w-full h-full font-medium text-white hover:text-blue-600 rounded-3xl border-2 border-blue-700 hover:bg-blue-200  bg-blue-800'>Pagos en línea</button>
                    </div>
                  </div>
                  <div className='w-full h-[50%] flex justify-end items-center'>
                    <button className='w-[15%] h-[100%] font-medium hover:border-blue-500 hover:border-2 hover:rounded-3xl text-blue-800 hover:text-white hover:bg-blue-400'>Inicio</button>
                    <button className='w-[15%] h-[100%] font-medium hover:border-blue-500 hover:border-2 hover:rounded-3xl text-blue-800 hover:text-white hover:bg-blue-400'>Nosotros</button>
                    <button className='w-[15%] h-[100%] font-medium hover:border-blue-500 hover:border-2 hover:rounded-3xl text-blue-800 hover:text-white hover:bg-blue-400'>Tienda</button>
                    <button className='w-[15%] h-[100%] font-medium hover:border-blue-500 hover:border-2 hover:rounded-3xl text-blue-800 hover:text-white hover:bg-blue-400'>Blog</button>
                    <button className='w-[15%] h-[100%] font-medium hover:border-blue-500 hover:border-2 hover:rounded-3xl text-blue-800 hover:text-white hover:bg-blue-400'>Contactanos</button>
                    <div className='w-[25%]'><i class ="ffas fa-user-alt"></i></div>
                  </div>
                </div>

              </div> */}
            </header>
        </> 
    );
  };

//export default Header;