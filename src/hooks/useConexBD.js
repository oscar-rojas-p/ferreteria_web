import React, { useState } from "react";
import { Modal } from "../app/components/modal/Modal";
import { useModal } from "./useModal";
import { notify } from "../utils/utils";
import { responsiveFontSizes } from "@mui/material";
const urlBase = process.env.REACT_APP_ATU_API + "/api/Ferreteria";

export const useConexBD = () => {
    const productoDefault = {
        nomProducto: '',
        abrevProducto: '',
        codigoProducto: 0,
        descripcionProducto: '',
        codSubCategoria: 0,
        cantidadMinima:0,
        cantidadMaxima: 0,
        precioCompra:'',    
        precioVenta:'',  
        codMonedaCompra:'',    
        codMonedaVenta:'',    
        codUsuarioCreacion:0  
    }
    const [usuarios,setUsuarios] = useState([])
    const [personas,setPersonas] = useState([])
    const [productos,setProductos] = useState([])
    const [producto, setProducto ] = useState(productoDefault);
    const [ isOpenProductos, openModalProductos, closeModalProductos ] = useModal();
    const listarPersonas = async () => {
        await fetch(`${urlBase}/listarPersonas`).then(response => {
            response.json().then((data) => {
                setPersonas(data.content) 
            })
        })
    }

    const registrarPersona = async (nombre, apallidoP, apellidoM, correo) => {
        let urlEnd = `/registrarPersona?nombre=${nombre}&apePaterno=${apallidoP}&apeMaterno=${apellidoM}&correo=${correo}&codigoPersona=2`

        let url = urlBase + urlEnd
        const response = await fetch(url,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            }
        })
        
    }

    const listarUsuarios = async () => {
        await fetch(`${urlBase}/listarUsuarios`).then(response => {
            response.json().then((data) => {
                setUsuarios(data.content) 
            })
        })
    }

    const registrarUsuario = async (nombre, clave, codPersona) => {
        let urlEnd = `/registrarUsuario?nombre=${nombre}&clave=${clave}&codPersona=${codPersona}&codUsuarioTipo=4`  //creo que el 1 es el admin

        let url = urlBase + urlEnd
        const response = await fetch(url,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            }
        })
        
    }


    const listarProductos = async () => {
        await fetch(`${urlBase}/listarProductos`).then(response => {
            response.json().then((data) => {
                setProductos(data.content) 
            })
        })
    }

    const registrarProducto = async () => {
        let urlEnd = `/registrarProducto?nomProducto=${producto.nomProducto}&abrevProducto=${producto.abrevProducto}&descripcionProducto=${producto.descripcionProducto}&codigoProducto=${producto.codigoProducto}&codSubCategoria=${producto.codSubCategoria}&cantidadMinima=${producto.cantidadMinima}&cantidadMaxima=${producto.cantidadMaxima}&precioCompra=${producto.precioCompra}&precioVenta=${producto.precioVenta}&codMonedaCompra=${producto.codMonedaCompra}&codMonedaVenta=${producto.codMonedaVenta}&codUsuarioCreacion=${producto.codUsuarioCreacion}`
        let url = urlBase + urlEnd
        const response = await fetch(url,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            }
        }).then(response => {
            response.json().then((data) => {
                console.log("data -> ",data)
                notify(data.content[0].desResultado, data.isValid? 'success' : 'error');
                if (data.isValid){
                    listarProductos();
                    closeModalProductos()
                }
            })
        })
    }
    const editarValorProducto = (key,value) =>{
        setProducto(producto => {
            return {
                ...producto,
                [key]: value
            }
        });
    }
    return {personas,listarPersonas,producto,editarValorProducto,registrarPersona,usuarios,listarUsuarios,registrarUsuario,productos,listarProductos,registrarProducto,isOpenProductos,openModalProductos,closeModalProductos}
}