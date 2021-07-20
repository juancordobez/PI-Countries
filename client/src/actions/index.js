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


export function ordenarAllCountrys(value){
    switch (value) {
        case 'Nombre A-Z':
            return {
                type: ORDEN,
                payload : { prop: 'nombre', decendente: false }
            }
        case 'Nombre Z-A':
            return {
                type: ORDEN,
                payload : { prop: 'nombre', decendente: true }
            }
        case 'Poblacion Acendente':
            return {
                type: ORDEN,
                payload : { prop: 'poblacion', decendente: false }
            }
            
        case 'Poblacion Decendente':
            return {
                type: ORDEN,
                payload : { prop: 'poblacion', decendente: true }
            }

        default:
            return {
                type: ORDEN,
                payload : { prop: 'nombre', decendente: false }
            }
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


export function filrer(valor) {
    // console.log(valor)
    return {
        type: FILTER,
        payload: valor
    }
}


export function setPage(payload) {
    // console.log(payload)
    payload= payload ? payload : 1
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
