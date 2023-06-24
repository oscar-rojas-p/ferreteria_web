import { toast } from 'react-toastify';

const padTo2Digits = (num) => {
    return num.toString().padStart(2, '0');
}

export const formatDate = (date, format = 103) => {
    let stringFormat = ''
    switch  (format) {
        case 23:
            stringFormat = [
                date.getFullYear(),                
                padTo2Digits(date.getMonth() + 1),
                padTo2Digits(date.getDate())
            ].join('-');
            break;
        case 103:
            stringFormat = [
                padTo2Digits(date.getDate()),
                padTo2Digits(date.getMonth() + 1),
                date.getFullYear()
            ].join('/');
            break;
        default:
            console.error('Ingreso un formato no valido mapeado')
    }

    return stringFormat;
}

export const notify = (title, type, options = {}) => {
    toast[type](title, {
        position: options.position ?? "top-center",
        autoClose: options.autoClose ?? 5000,
        hideProgressBar: options.hideProgressBar ?? false,
        closeOnClick: options.closeOnClick ?? true,
        pauseOnHover: options.pauseOnHover ?? true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
}
export const ObtenerFechaHoraActual =()=>{
    var Fecha = new Date();
    var Dia = Fecha.getDate();
    var numeroMes = Fecha.getMonth();
    var nombresMeses = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
      ];
      var nombreMes = nombresMeses[numeroMes];
    var Año = Fecha.getFullYear()

    Dia = ((Dia < 10) ? '0' + Dia : Dia);
    Fecha = `${Dia} ${nombreMes} ${Año}`;
    
    return Fecha;
}
// export const notify = (title, type, options = {}) => {
//     toast[type](title, {
//         position: options.position ?? "top-center",
//         autoClose: options.autoClose ?? 5000,
//         hideProgressBar: options.hideProgressBar ?? false,
//         closeOnClick: options.closeOnClick ?? true,
//         pauseOnHover: options.pauseOnHover ?? true,
//         draggable: true,
//         progress: undefined,
//         theme: "colored",
//     });
// }



export const soloCelular = (event, element) => {
    const key = event.keyCode ? event.keyCode : event.which
    if (key === 8) return true
    if (key > 47 && key < 58) {
        if (element.value === "") return true
        const regexp = /.[0-9]{8}$/
        if(!(regexp.test(element.value))) {
            return true
        }
    }
    event.preventDefault()
}

export const soloNumero = (event, element) => {
    const key = event.keyCode ? event.keyCode : event.which
    if (key === 8) return true
    if (key > 47 && key < 58) {
        if (element.value === "") return true
        const regexp = /.[0-9]{20}$/
        if(!(regexp.test(element.value))) {
            return true
        }
    }
    event.preventDefault()
}

export const soloDNI = (event, element) => {
    const key = event.keyCode ? event.keyCode : event.which
    if (key === 8) return true
    if (key > 47 && key < 58) {
        if (element.value === "") return true
        const regexp = /.[0-9]{7}$/
        if(!(regexp.test(element.value))) {
            return true
        }
    }
    event.preventDefault()
}

export const soloDecimal = (e, elemento) => {
    const key = e.keyCode ? e.keyCode : e.which

    if (key === 8) return true
    
    if (key > 47 && key < 58) {
        if (elemento.value === "") return true
        const regexp = /.[0-9]{9}$/

        if(!(regexp.test(elemento.value))) {
            return true
        }
    }

    if (key === 46) {
        if (elemento.value === "") return false
        const regexp = /^[0-9]+$/
        console.log("s ", regexp.test(elemento.value))
        if (regexp.test(elemento.value)) {
            return true
        }
    }
    
    e.preventDefault()
}

export const formatState = (codState) => {
    let htmlrespuesta = '';
    
    let className 
    let color 
    if ([1].includes(codState)) color = 'yellow'
    else if ([2].includes(codState)) color = 'green'
    else if ([3].includes(codState)) color = 'red'
    className = `cursor-pointer bg-${color}-600 px-2 py-[2px] rounded uppercase text-[11px] font-bold`
    return className;
}


export const primeraLetraMayuscula = (string) => {
    var str = string;

    str = str.toLowerCase().replace(/\b[a-z]/g, function (letter) {
        return letter.toUpperCase();
    });

    return str; 
}

export const todoMayuscula = (string)=> {
    var str = string;
    str = str.toUpperCase().replace(/\b[a-z]/g, function (letter) {
        return letter.toUpperCase();
    });
    return str;
}

export const quitarTildes = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
} 


