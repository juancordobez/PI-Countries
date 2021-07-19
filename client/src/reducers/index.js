export const ALL_COUTRYS = 'ALL_COUTRYS';
export const NAME_COUTRYS = 'NAME_COUTRYS';
export const ORDEN = 'ORDEN';
export const FILTER = 'FILTER';
export const PAGE = 'PAGE';
export const DETALLE_COUNTRY = 'DETALLE_COUNTRY';

const initialState = {
    allCountrys: []
}

function rootReducer(state = initialState, { type, payload }) {
    switch (type) {

        case ALL_COUTRYS:
            return { 
                ...state,
                allCountrys: payload 
            }
        case NAME_COUTRYS:
            return{ 
                ...state,
                allCountrys: payload 
            }
        case FILTER:
            return { ...state, ...payload }
        case ORDEN:
            return { ...state, ...payload }
        case PAGE:
            return { ...state, ...payload }
        case DETALLE_COUNTRY:
            return { ...state, ...payload }

        default:
            return state
    }
}


export default rootReducer;