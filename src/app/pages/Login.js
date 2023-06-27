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

    const {listarPersonas} = useConexBD()

    useEffect(() => {
        listarPersonas()
    })

    const [nombre,setNombre] = useState('')
    const [contraseña,setContraseña] = useState('')
    const  history = useHistory();
    const [usuarioCreado,setUsuarioCreado] = useState('')
    const [contraseñaCreada,setContraseñaCreada] = useState('')

    const [error,setError] = useState(false)
    const [error2,setError2] = useState(false)
    const usuarios = [{user:'admin',password:'admin'},{user:'root',password:'123'}]
    const handleSubmit = (e) => {
        const usuario = e.target[0].value
        const contraseña = e.target[1].value
        e.preventDefault()
        if(nombre == '' || contraseña == ''){
            setError(true)
            return
        }else{
            const user = usuarios.find(
                (u) => u.user === usuario && u.password === contraseña
              )
              if(user){
                  notify(`Bienvenido a Alpa usuario: ${usuario}`,'success')
                  cambiarVista()
              }else{
                notify('Error al ingresar usuario y/o contraseña','error')
              }
        }
        setError(false)

        //setUser([nombre])  
    }
    const cambiarVista = () =>{
        history.push('/Productos')
    }
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setUsuarioCreado('')
        setContraseñaCreada('')
        setOpen(true);
    };

    const handleClose = () => {
        setError2(false)
        setOpen(false);
    };

    const comprobarRegistroNuevo = () => {
        if(usuarioCreado=='' || contraseñaCreada==''){
            setError2(true)
            return
        }else{
            handleClose()
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
                    {error && <p style={{color:'red'}}>Todos los campos son necesarios</p>}
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
                                        <input placeholder='Nombre' value={usuarioCreado} onChange={(e) => setUsuarioCreado(e.target.value)} style={{border:'1px solid #cfcaca',borderRadius:'5px',padding:'5px',width:'190px'}} type='text'></input>
                                        <input placeholder='Apellido' value={usuarioCreado} onChange={(e) => setUsuarioCreado(e.target.value)} style={{border:'1px solid #cfcaca',borderRadius:'5px',padding:'5px',width:'190px',marginLeft:'20px'}} type='text'></input>
                                    </div>
                                    <div style={{marginTop:'20px'}}>
                                        <input placeholder='Correo Electronico' value={contraseñaCreada} onChange={(e) => setContraseñaCreada(e.target.value)} style={{border:'1px solid #cfcaca',borderRadius:'5px',padding:'5px',width:'400px'}} type='password'></input>
                                    </div>
                                    <div style={{marginTop:'20px',marginBottom:'20px'}}>
                                        <input placeholder='Contraseña' value={contraseñaCreada} onChange={(e) => setContraseñaCreada(e.target.value)} style={{border:'1px solid #cfcaca',borderRadius:'5px',padding:'5px',width:'400px'}} type='password'></input>
                                    </div>
                                    <FormControl>
                                        <FormLabel id="demo-row-radio-buttons-group-label">Género</FormLabel>
                                        <RadioGroup
                                            row
                                            aria-labelledby="demo-row-radio-buttons-group-label"
                                            name="row-radio-buttons-group"
                                        >
                                            <FormControlLabel value="female" control={<Radio />} label="Mujer" />
                                            <FormControlLabel value="male" control={<Radio />} label="Hombre" />
                                            <FormControlLabel value="other" control={<Radio />} label="Otro" />
                                            <FormControlLabel
                                            value="disabled"
                                            disabled
                                            control={<Radio />}
                                            label="LGTBQ+"
                                            />
                                        </RadioGroup>
                                    </FormControl>
                                </div>
                                {error2 && <p style={{color:'red',textAlign:'center'}}>Todos los campos son necesarios</p>}
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
