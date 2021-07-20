const fetch = require('node-fetch');


export const ALL_COUTRYS = 'ALL_COUTRYS';
export const NAME_COUTRYS = 'NAME_COUTRYS';
export const ORDEN = 'ORDEN';
export const FILTER = 'FILTER';
export const PAGE = 'PAGE';
export const DETALLE_COUNTRY = 'DETALLE_COUNTRY';
export const GET_ACTIVIDADES = 'GET_ACTIVIDADES';


export function getAllCountrys(){
    return async function (dispatch) {
    try{
        let request = await fetch(`http://localhost:3001/countries`);
        let data = await request.json()
        dispatch({type: ALL_COUTRYS, payload: data})
    }
    catch(err){
        console.log(err)
    }
    } 
}

export function getNameCountrys(name){
    return async function (dispatch) {
    try{
        let request = await fetch(`http://localhost:3001/countries?name=${name}`)
        let data = await request.json()

        dispatch({type: NAME_COUTRYS, payload: data})
    }catch(err){
        console.log(NAME_COUTRYS, err)
    }
    } 
}


export function orden(valor, decendente){
    // let x = 1
    // if(decendente) x = -1
    // const compare = (a, b) => {
    //     if (a[valor] > b[valor]) {
    //       return 1*x;
    //     }
    //     if (a[valor] < b[valor]) {
    //       return -1*x;
    //     }
    //     return 0;
    // }
    return {
        type: ORDEN,
        payload : {valor, decendente}
    }
    
}


export function getDetalleCountry(id){
    return async function (dispatch) {
        try{
            let request = await fetch(`http://localhost:3001/countries/${id}`)
            let data = await request.json()
            dispatch({
                type: DETALLE_COUNTRY, 
                payload: data
            })
        }catch(err){
            console.log(err)
        }
    }
}


export function filrer(prop, valor) {
    console.log(prop, valor)
    return {
        type: FILTER,
        payload: {prop, valor}
    }
}


export function setPage(payload) {
    // console.log(payload)
    return {
        type: PAGE,
        payload
    }
}


export function getActividades(id){
    return async function (dispatch) {
        try{
            let request = await fetch(`http://localhost:3001/activity`)
            let data = await request.json()
            dispatch({
                type: GET_ACTIVIDADES, 
                payload: data
            })
        }catch(err){
            console.log(err)
        }
    }
}
