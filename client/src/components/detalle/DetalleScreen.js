import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useParams } from 'react-router-dom';
import { getDetalleCountry } from '../../actions';
import { Spin } from '../ui/Spin';

export const DetalleScreen = () => {
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
         
                    <>

                            <Spin/>
                        <div className='row wrap'>
                            <div className=' divCard column'>
                                <img className='cardImg' src={detalleCountry.country?.bandera} alt={`bandera de ${detalleCountry.country?.nombre}`} />
                            </div>
                            <div className='divCard column'>
                                <h3 className='input'>{detalleCountry.country?.nombre}</h3>
                                <h6 className='input'>{detalleCountry.country?.continente}</h6>
                            </div>
                            <div className='divCard'>
                                <p className='input'>Capital: {detalleCountry.country?.capital}</p>
                                <p className='input'>Subregión: {detalleCountry.country?.subregion}</p>
                                <p className='input'>Codigo: {detalleCountry.country?.ID}</p>
                            </div>
                            <div className='divCard'>
                                <p className='input'>Area: {detalleCountry.country?.area} km2</p>
                                <p className='input'>Población: {detalleCountry.country?.poblacion}</p>
                            </div>
                        </div >
                        <hr />
                            <p className='input'>Actividades</p>
                        <div className='divCars'>
                            
                            {
                                detalleCountry.actividades?.length ?
                                    detalleCountry.actividades.map(x =>
                                        <div className='column divCard'>
                                            {/* <img src={x.imagen ? x.imagen : detalleCountry.country?.bandera} alt={`imagen de  ${x.name}`} /> */}
                                            <h4 className='input'>{x.name}</h4>

                                            <p className='input'>Dificultad: {x.dificultad}</p>
                                            <p className='input'>Duracion: {x.duracion}</p>
                                            <p className='input'>Temporada: {x.temporada}</p>
                                        </div>
                                    )
                                    : <p className='input'>No tiene actividades.</p>



                            }
                        </div>
                    </>
          
    )
}
