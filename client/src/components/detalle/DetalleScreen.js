import React, { useEffect } from 'react'
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
                    <>
                        <div>
                            <div>
                                <img src={detalleCountry.country?.bandera} alt={`bandera de ${detalleCountry.country?.nombre}`} />
                            </div>
                            <div>
                                <h3>{detalleCountry.country?.nombre}</h3>
                                <h6>{detalleCountry.country?.continente}</h6>
                            </div>
                            <div>
                                <p>Capital: {detalleCountry.country?.capital}</p>
                                <p>Subregión: {detalleCountry.country?.subregion}</p>
                                <p>Codigo: {detalleCountry.country?.ID}</p>
                            </div>
                            <div>
                                <p>Area: {detalleCountry.country?.area} km2</p>
                                <p>Población: {detalleCountry.country?.poblacion}</p>
                            </div>
                        </div >
                        <div>
                            {/* id(pin):1
name(pin):"Prueba Actividad"
dificultad(pin):3
duracion(pin):2
temporada(pin):"Invierno"
imagen(pin):null */}
                            {
                                detalleCountry.actividades?.length ?
                                    detalleCountry.actividades.map(x =>
                                        <div>
                                            <img src={x.imagen ? x.imagen : detalleCountry.country?.bandera} alt={`imagen de  ${x.name}`} />
                                            <h4>{x.name}</h4>

                                            <p>Dificultad: {x.dificultad}</p>
                                            <p>Duracion: {x.duracion}</p>
                                            <p>Temporada: {x.temporada}</p>
                                        </div>
                                    )
                                    : 'No tiene actividades.'



                            }
                        </div>
                    </>
            }
        </div >
    )
}
