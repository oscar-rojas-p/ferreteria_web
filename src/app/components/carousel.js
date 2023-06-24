import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
//IMPROT IMAGENES
import imagen1 from '../../assets/css/images/Alicate de corte.jpg';
import imagen2 from '../../assets/css/images/Alicate.jpg';
import imagen3 from '../../assets/css/images/Cable mellizo blanco.jpg';
import imagen4 from '../../assets/css/images/Cable mellizo verde.jpg';
import imagen5 from '../../assets/css/images/canaleta 15x10x2MT.jpg';
import imagen6 from '../../assets/css/images/Cinta aislante trupper.jpg';
import imagen7 from '../../assets/css/images/Clavos de acero.jpg';
import imagen8 from '../../assets/css/images/descarga.jpg';
import imagen9 from '../../assets/css/images/Destornillador.jpg';
import imagen10 from '../../assets/css/images/Kit de alicates.jpg';
//
import fondoImagen from "../../assets/css/images/Fondo_Carrusel_1.jpg";

const images = [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, imagen8, imagen9, imagen10];

const MiCarousel = () => {
    const carouselStyle = {
      backgroundImage: `url(${fondoImagen})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      
    };
    return (
      <>
        <div className="w-full h-full px-2 pt-5 bg-white">
          <div className="h-[350px] w-full" style={carouselStyle}>
            <Carousel 
              showThumbs={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={3000}
              stopOnHover={true}
              showStatus={true}>
              {/* <Carousel className='w-[50%] h-[500px] flex-col flex justify-center items-center'> */}
              {images.map((imagen,index) => (
                <div key={index} className="flex justify-center h-[350px] w-full items-center">
                  <img src={imagen} alt={`Imagen ${index}`} className="h-[300px]" style={{width:'200px!important'}} />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </>
      
    );
  };

export default MiCarousel;