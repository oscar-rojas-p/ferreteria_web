//import '../../App.css';
//import '../../layaouts/style.css'
import React from 'react';
import {Cabecera} from '../components/Cabecera';
import MiCarousel from '../components/carousel';
import BodyList from '../components/listasBody';
import {Blog} from '../components/blog'

export const  Productos = () => {
    return (
        <>
            <Cabecera/>
            <MiCarousel />
            <BodyList />
            <Blog /> 
        </>
    );
}
