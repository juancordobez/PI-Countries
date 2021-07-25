import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useParams } from 'react-router-dom';
import { getDetalleCountry } from '../../actions';

export const DetalleScreen = () => {
    // const [detalles, setDetalles] = useState()
    const detalleCountry = useSelector(state => state.detalleCountry)
    const loading = useSelector(state => state.loading)
    const dispatch = useDispatch()
    const { idPais } = useParams();

    useEffect(() => {
        dispatch(getDetalleCountry(idPais))

    }, [dispatch, idPais])

    // Ruta de detalle de país: debe contener

    // Los campos mostrados en la ruta principal para cada país (imagen de la bandera, nombre, código de país de 3 letras y continente)
    // Código de país de 3 letras (id)
    // Capital
    // Subregión
    // Área (Mostrarla en km2 o millones de km2)
    // Población
    // Actividades turísticas con toda su información asociada
    return (
        <div>
            {
                loading ? 'cargando...' :

                <p>{console.log(detalleCountry.country?.nombre)}fin</p>

            }
        </div>
    )
}
