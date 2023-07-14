import React, { useEffect, useState } from 'react';
//import '../../assets/css/views/LayoutMaster.css'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {useHistory} from "react-router-dom";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { notify } from '../../utils/utils';

import { useConexBD } from '../../hooks/useConexBD';


export const Login = () => {

    const {personas,listarPersonas,registrarPersona,usuarios,listarUsuarios,registrarUsuario,productos,listarProductos,registrarProducto} = useConexBD()

    useEffect(() => {
        listarPersonas()
        console.log("hola")
    },[usuarios])
    
    useEffect(() => {
        listarUsuarios()
        console.log("hola 3")
    },[])

    
    const [nombre,setNombre] = useState('')
    const [contraseña,setContraseña] = useState('')
    const  history = useHistory();

    
    const [nomNew,setNomNew] = useState('')
    const [apePNew,setApePNew] = useState('')
    const [apeMNew,setApeMNew] = useState('')
    const [correoNew,setCorreoNew] = useState('')
    const [contraseñaNew,setContraseñaNew] = useState('')
    
    useEffect(() => {
        if(correoNew != ''){
            //aqui agregar el codigo de la persona CodPersona en el listarpersona
            console.log("test")
            let codigoPersonaRegistrada = personas.find(elm => elm.correoElectronico == correoNew)
            codigoPersonaRegistrada = codigoPersonaRegistrada.codPersona
            registrarUsuario(correoNew,contraseñaNew,codigoPersonaRegistrada)
        }
        console.log("hola 2")
    },[personas])



    const [error,setError] = useState(false)
    const [error2,setError2] = useState(false)
    // const usuarios = [{user:'admin',password:'admin'},{user:'root',password:'123'}]
    const handleSubmit = (e) => {
        const usuario = e.target[0].value
        const contraseña = e.target[1].value
        e.preventDefault()
        if(nombre == '' || contraseña == ''){
            setError(true)
            return
        }else{
            const user = usuarios.find(
                (u) => u.nomUsuario === usuario && u.claveUsuario === contraseña
            )
            if(user){
                notify(`Bienvenido a Alpa usuario: ${usuario}`,'success')
                cambiarVista(user.codUsuarioTipo)
            }else{
                notify('Error al ingresar usuario y/o contraseña','error')
            }
        }
        setError(false)

        //setUser([nombre])  
    }
    const cambiarVista = (codigoUser) =>{
        if(codigoUser == 1){
            history.push('/Administrador')
        }else if(codigoUser == 4){
            history.push('/Productos')
        }
        else{
            history.push('/Administrador')
        }
    }
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setNomNew('')
        setApePNew('')
        setApeMNew('')
        setCorreoNew('')
        setContraseñaNew('')
        
        setOpen(true);
    };

    const handleClose = () => {
        setError2(false)
        setOpen(false);
    };

    const comprobarRegistroNuevo = async () => {
        if(correoNew =='' || contraseñaNew ==''){
            setError2(true)
            return
        }else{
            await registrarPersona(nomNew,apePNew,apeMNew,correoNew)
            listarPersonas()
            notify(`Usuario ${nomNew} registrado con exito`,'success')
            handleClose()
            // history.push('/Productos')
        }
    }

    
    return (
        <div style={{display:'flex',width:'100vw',height:'100vh',background:'radial-gradient(circle at 48.94% 50%, #2d3433 0, #292c2b 25%, #242424 50%, #1f1c1d 75%, #1b1517 100%)'}} className='overflow-hidden'>
            <div className='App' style={{margin:'0px auto',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <div>
                    <h1 className='text-blue-800 text-5xl text-center py-5'>Ferreteria Alpha</h1>
                    <form className='formulario' onSubmit={handleSubmit}>
                        <input style={{textAlign:'center',width:'400px',height:'50px',padding:'10px',borderRadius:'15px'}} className='text-black hover:placeholder-orange-500 placeholder:font-medium' placeholder='Usuario' type='text' value={nombre} onChange={e => setNombre(e.target.value)}></input>
                            <input style={{textAlign:'center',width:'400px',height:'50px',padding:'10px',borderRadius:'15px'}} className='text-black hover:placeholder-orange-500 placeholder:font-medium'  placeholder='Contraseña' type='password' value={contraseña} onChange={e => setContraseña(e.target.value)}></input>
                        <button className='rounded-xl bg-white text-blue-800 font-medium py-4 px-5 hover:bg-orange-500 hover:shadow-inner hover:shadow-orange-800'>Iniciar sesion</button>
                    </form>
                    <div id="myDiv" onClick={handleClickOpen} className='text-white hover:text-blue-800 cursor-pointer pt-5 text-center'>¿Eres nuevo? Registrar Usuario</div>
                    {error && <div style={{color:'red'}}>Todos los campos son necesarios</div>}
                    <div className='py-10 w-full text-center cursor-pointer hover:text-orange-500' onClick={()=>cambiarVista()}>Continuar sin iniciar sesión</div>
                </div>
            </div>

            <div>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <div style={{padding:'20px'}}>
                        <div>
                            <DialogTitle id="alert-dialog-title">
                                <label style={{fontSize:'25px',width:'100%',textAlign:'center'}}><b>Registrar Usuario</b></label>
                            </DialogTitle>
                        </div>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                <div>
                                    <div style={{display:'flex',width:'100%'}}>
                                    <input placeholder='Nombres' value={nomNew} onChange={(e) => setNomNew(e.target.value)} style={{border:'1px solid #cfcaca',borderRadius:'5px',padding:'5px',width:'400px'}} type='text'></input>
                                    </div>
                                    <div style={{display:'flex',width:'100%',marginTop:'20px'}}>
                                        <input placeholder='Apellido Paterno' value={apePNew} onChange={(e) => setApePNew(e.target.value)} style={{border:'1px solid #cfcaca',borderRadius:'5px',padding:'5px',width:'190px'}} type='text'></input>
                                        <input placeholder='Apellido Materno' value={apeMNew} onChange={(e) => setApeMNew(e.target.value)} style={{border:'1px solid #cfcaca',borderRadius:'5px',padding:'5px',width:'190px',marginLeft:'20px'}} type='text'></input>
                                    </div>
                                    <div style={{marginTop:'20px'}}>
                                        <input placeholder='Correo Electronico' value={correoNew} onChange={(e) => setCorreoNew(e.target.value)} style={{border:'1px solid #cfcaca',borderRadius:'5px',padding:'5px',width:'400px'}} type='text'></input>
                                    </div>
                                    <div style={{marginTop:'20px',marginBottom:'20px'}}>
                                        <input placeholder='Contraseña' value={contraseñaNew} onChange={(e) => setContraseñaNew(e.target.value)} style={{border:'1px solid #cfcaca',borderRadius:'5px',padding:'5px',width:'400px'}} type='password'></input>
                                    </div>
                                    
                                </div>
                                {error2 && <div style={{color:'red',textAlign:'center'}}>Todos los campos son necesarios</div>}
                            </DialogContentText>
                        </DialogContent>
                    </div>
                    <DialogActions>
                    <Button onClick={handleClose}>Cancelar</Button>
                    <Button onClick={comprobarRegistroNuevo} autoFocus>
                        Registrar
                    </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    );
};
