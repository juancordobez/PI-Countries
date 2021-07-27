import {
    ALL_COUTRYS,
    NAME_COUTRYS,
    ORDEN,
    FILTER,
    PAGE,
    DETALLE_COUNTRY,
    GET_ACTIVIDADES,
    LOADING
} from '../actions/index'

const initialState = {
    allCountrys: [],
    viewCountrys: [],
    currentPage: [],
    detalleCountry: {},
    actividades: [],
    loading: false
}

function rootReducer(state = initialState, { type, payload }) {
    switch (type) {

        case ALL_COUTRYS:
            return {
                ...state,
                allCountrys: payload,
                viewCountrys: payload
            }
        case NAME_COUTRYS:
            return {
                ...state,
                allCountrys: payload,
                viewCountrys: payload

            }
        case FILTER:
            return {
                ...state,
                viewCountrys: state.allCountrys.filter(x => 
                    {return (payload.continente.length ? x.continente === payload.continente : true)
                    &&  
                    (payload.actividad.length ?  x.actividades.includes(Number(payload.actividad)) : true)}
                )
            }
        case ORDEN:
            let x = 1
            if (payload.decendente) x = -1
            const compare = (a, b) => a[payload.prop] > b[payload.prop] ? 1 * x : -1 * x;
            return {
                ...state,
                viewCountrys: state.allCountrys.sort(compare)
            }
        case PAGE:
            return {
                ...state,
                currentPage: state.viewCountrys.slice(10 * payload - 10, 10 * payload)
            }
        case DETALLE_COUNTRY:
            return {
                ...state,
                detalleCountry: payload
            }
        case GET_ACTIVIDADES:
            return {
                ...state,
                actividades: payload
            }
        case LOADING:
            return {
                ...state,
                loading: !state.loading
            }

        default:
            return state
    }
}


export default rootReducer;