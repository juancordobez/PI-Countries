export const ALL_COUTRYS = 'ALL_COUTRYS';
export const NAME_COUTRYS = 'NAME_COUTRYS';
export const ORDEN = 'ORDEN';
export const FILTER = 'FILTER';
export const PAGE = 'PAGE';
export const DETALLE_COUNTRY = 'DETALLE_COUNTRY';

const initialState = {
    allCountrys: [],
    currentPage:[],
    detalleCountry: []
}

function rootReducer(state = initialState, { type, payload }) {
    switch (type) {

        case ALL_COUTRYS:
            return {
                ...state,
                allCountrys: payload
            }
        case NAME_COUTRYS:
            return {
                ...state,
                allCountrys: payload
            }
        case FILTER:
            return {
                ...state, 
                allCountrys: state.allCountrys.filter(x => x[payload.prop].includes(payload.valor) ) 
            }
        case ORDEN:
            let x = 1
            if (payload.decendente) x = -1
            const compare = (a, b) => {
                if (a[payload.valor] > b[payload.valor]) {
                    return 1 * x;
                }
                if (a[payload.valor] < b[payload.valor]) {
                    return -1 * x;
                }
                return 0;
            }
            return { 
                ...state, 
                allCountrys: state.allCountrys.sort(compare)    
            }
        case PAGE:
            return {
                ...state, 
                currentPage: state.allCountrys.slice(10*payload - 10 , 10*payload)    
            }
        case DETALLE_COUNTRY:
            return { 
                ...state, 
                detalleCountry: payload 
            }

        default:
            return state
    }
}


export default rootReducer;