import React, {useState, useEffect, useReducer, useMemo, useContext}  from "react";
import { useRegiones } from '../../../hooks/useRegiones';
import { Spinner } from '../utils/Spinner';
import { useSpinner } from "../../../hooks/useSpinner";
import Draggable from "react-draggable";
import {notify}  from "../../../utils/utils";
import { UserContext } from '../../../context/provider/UserProvider';
import { AuthFetch } from "../../../services/api";

const urlBasePlamin = process.env.REACT_APP_PLAMIN_API + "/api";

const catastroTipo = {
    CAMBIAR_VALORES_CODIGO: 'CAMBIAR_VALORES_CODIGO'
}

const catastroTerritorialReducer = (state, action) => {
    switch (action.type) {
        case catastroTipo.CAMBIAR_VALORES_CODIGO:
            return {
                ...state,
                ...action.payload
            }
        default:
            throw new Error('Not implemented');
    }
}

const estadoInicial = {
    zona: '',
    codDepartamento: 0,
    codProvincia: 0,
    codDistrito: 0,
    codPais: 1,
    puntosPoligonoPais: null,
    puntosPoligonoDepartamento: null,
    puntosPoligonoProvincia: null,
    puntosPoligonoDistrito: null
}

const useCatastroTerritorial = () => {
    const [ paises, obtenerPaises, departamentos, obtenerDepartamentos, provincias, obtenerProvincias, distritos, obtenerDistritos ] = useRegiones();
    const { stateUser, cambiarZona, cargarDatosPoligonos, editarLocalizacionStorage } = useContext(UserContext)
    const [ primeraCarga, setPrimeraCarga ] = useState(true);
    
    const [ state, dispatch ] = useReducer(catastroTerritorialReducer, estadoInicial);

    const guardarUsuarioLocalizacion = async () => {
        const response = await AuthFetch({
            url: urlBasePlamin + '/Usuario/editarLocalizacion',
            method: 'POST',
            body: JSON.stringify({
                codUsuario: stateUser.codUsuario,
                codDistrito: state.codDistrito,
                codProvincia: state.codProvincia,
                codDepartamento: state.codDepartamento,
                codPais: 1
            })
        });
        notify(response.content, (response.isValid ? 'success' : 'error'));
        if (response.isValid) {
            editarLocalizacionStorage(state)

            estadoInicial.zona = stateUser.zona
            estadoInicial.codDepartamento = state.codDepartamento
            estadoInicial.codProvincia = state.codProvincia
            estadoInicial.codDistrito = state.codDistrito
            estadoInicial.puntosPoligonoPais = stateUser.poligonosInicial.puntosPoligonoPais
            estadoInicial.puntosPoligonoDepartamento = stateUser.poligonosInicial.puntosPoligonoDepartamento
            estadoInicial.puntosPoligonoProvincia = stateUser.poligonosInicial.puntosPoligonoProvincia
            estadoInicial.puntosPoligonoDistrito = stateUser.poligonosInicial.puntosPoligonoDistrito
        }
    }

    useEffect(() => {
        estadoInicial.zona = stateUser.zona
        estadoInicial.codDepartamento = stateUser.codDepartamento
        estadoInicial.codProvincia = stateUser.codProvincia
        estadoInicial.codDistrito = stateUser.codDistrito
        obtenerPaises(state.codPais);
    }, [])

    useEffect(() => {
        if (paises.length > 0) {
            obtenerDepartamentos(state.codPais);
        }
    }, [paises])

    useEffect(() => {
        if (departamentos.length > 0) {
            if (estadoInicial.codDepartamento === 0 && primeraCarga) {
                cargarDatosIniciales()
            }

            obtenerProvincias(Number(state.codDepartamento))
        }
    },[state.codDepartamento, departamentos])

    useEffect(() => {
        if (provincias.length > 0) {
            if (estadoInicial.codProvincia === 0 && primeraCarga) {
                cargarDatosIniciales()
            }

            obtenerDistritos(Number(state.codProvincia))
        }
    }, [state.codProvincia, provincias])

    useEffect(() => {
        if (distritos.length > 0) {
            if (primeraCarga) {
                cargarDatosIniciales()
            }
        }
    }, [state.codDistrito, distritos])

    const cargarDatosIniciales = async (cancelarAccion = false) => {
        let puntosPoligono = {
            puntosPoligonoPais: estadoInicial.puntosPoligonoPais || (paises.find(d => d.codPais === estadoInicial.codPais)?.puntosPoligonoPais || ''),
            puntosPoligonoDepartamento: estadoInicial.puntosPoligonoDepartamento || (departamentos.find(d => d.codDepartamento === estadoInicial.codDepartamento)?.puntosPoligonoDepartamento || ''),
            puntosPoligonoProvincia: estadoInicial.puntosPoligonoProvincia || (provincias.find(d => d.codProvincia === estadoInicial.codProvincia)?.puntosPoligonoProvincia || ''),
            puntosPoligonoDistrito: estadoInicial.puntosPoligonoDistrito || (distritos.find(d => d.codDistrito === estadoInicial.codDistrito)?.puntosPoligonoDistrito || ''),
        }

        if (primeraCarga) {
            estadoInicial.puntosPoligonoPais = puntosPoligono.puntosPoligonoPais
            estadoInicial.puntosPoligonoDepartamento = puntosPoligono.puntosPoligonoDepartamento
            estadoInicial.puntosPoligonoProvincia = puntosPoligono.puntosPoligonoProvincia
            estadoInicial.puntosPoligonoDistrito = puntosPoligono.puntosPoligonoDistrito
        }

        cancelarAccion && (dispatch({ type: catastroTipo.CAMBIAR_VALORES_CODIGO, payload: {
            codDepartamento: estadoInicial.codDepartamento,
            codProvincia: estadoInicial.codProvincia,
            codDistrito: estadoInicial.codDistrito
        }}))

        setPrimeraCarga(false);
        cargarDatosPoligonos(puntosPoligono, estadoInicial.zona);
    }

    const cambiarZonaGeneral = (e, key) => {
        const value = Number(e.target.value);
        let nombreZona = '';
        let nombrePuntoPoligono = '';
        let puntosPoligono = '';
        let codigosAReiniciar = {};

        const accionKey = {
            'codDepartamento': () => {
                codigosAReiniciar = {
                    codDepartamento: value,
                    codProvincia: 0,
                    codDistrito: 0,
                }

                if (value === 0) {
                    nombreZona = 'Seleccione un Motor de Filtro'
                } else {
                    
                    nombreZona = 'Departamento : ' + e.target.options[e.target.selectedIndex].textContent
                }

                nombrePuntoPoligono = 'puntosPoligonoDepartamento'
                puntosPoligono = departamentos.find(d => d.codDepartamento === value)?.puntosPoligonoDepartamento || ''

                return nombreZona
            },
            'codProvincia': () => {
                codigosAReiniciar = {
                    codProvincia: value,
                    codDistrito: 0,
                }

                if (value === 0) {
                    nombreZona = 'Departamento : ' + departamentos.find(d => d.codDepartamento === state.codDepartamento)?.nomDepartamento
                } else {
                    nombreZona = 'Provincia : ' + e.target.options[e.target.selectedIndex].textContent
                }

                nombrePuntoPoligono = 'puntosPoligonoProvincia';
                puntosPoligono = provincias.find(d => d.codProvincia === value)?.puntosPoligonoProvincia || ''

                return nombreZona;
            },
            'codDistrito': () => {
                codigosAReiniciar = {
                    codDistrito: value
                }
                if (value === 0) {
                    nombreZona = 'Provincia : ' + provincias.find(p => p.codProvincia === state.codProvincia)?.nomProvincia
                } else {
                    nombreZona = 'Distrito : ' + e.target.options[e.target.selectedIndex].textContent
                }

                nombrePuntoPoligono = 'puntosPoligonoDistrito'
                puntosPoligono = distritos.find(d => d.codDistrito === value)?.puntosPoligonoDistrito || '';

                return nombreZona
            }
        }
        nombreZona = accionKey[key]()
        dispatch({ type: catastroTipo.CAMBIAR_VALORES_CODIGO, payload: codigosAReiniciar })
        cambiarZona(nombreZona, nombrePuntoPoligono, puntosPoligono, codigosAReiniciar)
    }

return {
        state,
        departamentos,
        provincias,
        distritos,
        guardarUsuarioLocalizacion,
        cambiarZonaGeneral,
        cargarDatosIniciales
    }
}

export const ModalMotorFiltro = ({
    isOpen, 
    closeModal, 
    action, 
    width, 
    // children, 
    title, 
    cerrarAlGuardar = true,
    textButtons = { confirm: 'Guardar', denied: 'Cerrar' }, 
    validButton = { confirm: true , denied: true}
}) => {
    const [ spinner, mostrarSpinner, ocultarSpinner ] = useSpinner(); 
    const estiloBotonDiv = 'text-l rounded-tr-lg hover:bg-[#336fbb] px-2 py-2 lg:px-0 lg:py-0'
    const classNameInput = "containerScroll h-[30px] text-white rounded px-4 w-[250px] lg:w-[200px] bg-zinc-800 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
    const [visibleDivision , setVisibleDivision ] = useState(true)
    const [visibleComisarias , setVisibleComisarias ] = useState(false)
    const [estiloBotonDivision, setEstiloBotonDivision ] = useState(estiloBotonDiv)
    const [estiloBotonComisaria, setEstiloBotonComisarias] = useState(estiloBotonDiv)
    const { state, departamentos, provincias, distritos, guardarUsuarioLocalizacion, cambiarZonaGeneral, cargarDatosIniciales } = useCatastroTerritorial();
    
    const activarDivs = (d)=>{
        if (d === 1){ //viene del boton division politica
            setVisibleDivision(true)
            setVisibleComisarias(false)
            setEstiloBotonDivision('text-l rounded-tr-lg hover:bg-[#336fbb] px-2 py-2 lg:px-0 lg:py-0 bg-[#23467a] border')
            setEstiloBotonComisarias(estiloBotonDiv)
        }else if (d === 2){ //viene del boton comisarias
            setVisibleDivision(false)
            setVisibleComisarias(true)
            setEstiloBotonComisarias('text-l rounded-tr-lg hover:bg-[#336fbb] px-2 py-2 lg:px-0 lg:py-0 bg-[#23467a] border')
            setEstiloBotonDivision(estiloBotonDiv)
        }
    }

    const cerrarModal = () => {
        if (state.codDepartamento === 0 ){
            notify('Seleccione al menos un Departamento para el Motor de Filtro', 'error')
            return
        }

        cargarDatosIniciales(true)
        closeModal()
    }

    const guardarCambios = () => {
        if (state.codDepartamento === 0 ){
            notify('Seleccione al menos un Departamento para el Motor de Filtro', 'error')
            return
        }
        mostrarSpinner();
        guardarUsuarioLocalizacion()
        ocultarSpinner();
        closeModal();
    }

    return (
        <>  
            {  isOpen ? (
                <>
                    <Draggable handle="strong">
                        <div className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[1050] outline-none focus:outline-none">
                            <div className={`divMovible relative w-${width ? width : 'auto'} my-6 mx-auto max-w-[90%]`}>
                                {/*content*/}
                                <div className="bg-[#2d2f30] border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                                    {/*header*/}
                                    <strong> {/*ETIQUETA PARA HACER MOVIBLE HACIENDO CLICK AQUI */}
                                        <div className="divMovibleCabecera bg-[#003478]  flex items-start justify-between p-5 border-b border-solid border-[#4e4e4e] rounded-t">
                                            <h3 className="text-xl font-semibold">
                                                {title}
                                            </h3>
                                            <button
                                                className=""
                                                onClick={cerrarModal}
                                                >
                                                <i className="fas fa-times"></i>
                                            </button>
                                        </div>
                                    </strong>
                                    
                                    {/*body*/}
                                    <div className="relative p-6 flex-auto bg-[#2f3134]">
                                        <div className="w-[450px] ">
                                            <div className=''>
                                                <button onClick={()=> activarDivs(1)} style={{boxShadow:'rgba(51, 111, 187, 0.5) 0px 30px 60px -12px inset, #336fbb 0px 18px 36px -18px inset',border:'1px solid #336fbb'}} className={`${estiloBotonDivision}`}> Division Politica</button>
                                                <button onClick={()=> activarDivs(2)} style={{boxShadow:'rgba(51, 111, 187, 0.5) 0px 30px 60px -12px inset, #336fbb 0px 18px 36px -18px inset',border:'1px solid #336fbb'}} className={` hidden ${estiloBotonComisaria}`}> Comisaria</button>
                                            </div>

                                            <div className='flex flex-col justify-between w-full form-content lg:h-[250px] lg:w-[300px]   rounded-r-lg h-[200px]' style={{border:'1px solid white',display: `${visibleDivision ? '':'none'}`}}>
                                                
                                                <div className='mt-5 lg:flex-col lg:w-full items-center w-[400px] ml-5 lg:ml-0'>
                                                    <label className=' lg:mb-1'>Departamento: </label>
                                                    <div className="flex items-center gap-4 w-[250px]">
                                                        <select className={`${classNameInput} lg:ml-5 `} defaultValue={state.codDepartamento} onChange={(e) => cambiarZonaGeneral(e, 'codDepartamento')}>
                                                            <option value="0">-- Seleccione --</option>
                                                            {
                                                                departamentos.map(departamento => {
                                                                    return <option key={departamento.codDepartamento} value={departamento.codDepartamento}>{departamento.nomDepartamento}</option>
                                                                })
                                                            }
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className='lg:flex-col lg:w-full items-center w-[400px] ml-5 lg:ml-0'>
                                                    <label className='lg:mb-1 '>Provincia: </label>
                                                    <div className="flex items-center gap-4 w-[250px]">
                                                        <select className={`${classNameInput} lg:ml-5`} defaultValue={state.codProvincia} onChange={(e) => cambiarZonaGeneral(e, 'codProvincia')}>
                                                            <option value="0">-- Todos --</option>
                                                            {
                                                                provincias.map(provincia => {
                                                                    return <option key={provincia.codProvincia} value={provincia.codProvincia}>{provincia.nomProvincia}</option>
                                                                })
                                                            }
                                                        </select>
                                                    </div>
                                                </div>
                                            
                                                <div className='lg:flex-col lg:w-full items-center w-[400px] ml-5 lg:ml-0'>
                                                    <label className='lg:mb-1'>Distrito: </label>
                                                    <div className="flex  w-[250px]">
                                                            <select className={`${classNameInput} lg:ml-5`} defaultValue={state.codDistrito} onChange={(e) => cambiarZonaGeneral(e, 'codDistrito')}>
                                                                <option value="0">-- Todos --</option>
                                                                {
                                                                    distritos.map(distrito => {
                                                                        return <option key={distrito.codDistrito} value={distrito.codDistrito}>{distrito.nomDistrito}</option>
                                                                    })
                                                                }
                                                            </select>
                                                        </div>
                                                </div>
                                            </div>

                                            <div className='rounded-r-lg h-[200px]' style={{border:'1px solid white', display: `${visibleComisarias ? '':'none'}`}}>
                                                <div className='relative flex m-4 h-[30px]'>
                                                    <label className=''>Comisaria</label>
                                                    <select className={`${classNameInput} right-0 absolute`}> 
                                                        <option value='0'>- Todos -</option>
                                                    </select>
                                                </div>

                                                <div className='items-center justify-center h-[50px]'>
                                                    <div style={{marginLeft: '80px'}}>
                                                        <label className=''>Departamento : </label>
                                                        <label className=''>Lima</label>
                                                    </div>
                                                    <div style={{marginLeft: '80px'}}>
                                                        <label className=''>Provincia : </label>
                                                        <label className=''>Lima</label>
                                                    </div>
                                                    <div style={{marginLeft: '80px'}}>
                                                        <label className=''>Distrito(s) : </label>
                                                        <label className=''>Los Olivos/Independencia</label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='relative mt-[8px] text-right max-w-full lg:w-[300px]'> 
                                                <label className='mr-[10px]'>Mantener sesión siempre abierta</label><label className="switch top-1">
                                                    <input className='' type="checkbox" defaultChecked='checked' />
                                                    <div className="slider"></div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    {/*footer*/}
                                    <div className="bg-[#2d2f30] flex items-center justify-end p-6 rounded-b">
                                        {validButton.confirm ?
                                            <button
                                                className="min-w-[100px] bg-blue-500 hover:bg-blue-600 text-white active:bg-blue-600 font-bold capitalize px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 text-xs"
                                                type="button"
                                                onClick={guardarCambios}
                                            >
                                                {
                                                    spinner
                                                    ? <Spinner spinner={spinner.toString()}></Spinner>
                                                    : <span>{textButtons.confirm}</span>
                                                }
                                            </button>
                                            : ''
                                        }
                                        {validButton.denied ?
                                            <button
                                                className=" text-white-500 hover:bg-stone-600 rounded background-transparent font-bold capitalize px-6 py-2 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 text-xs"
                                                type="button"
                                                onClick={cerrarModal}
                                            >
                                                {textButtons.denied} 
                                            </button>
                                            : ''
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Draggable>    
                </>
            ) : null}
        </>
    );
}
















