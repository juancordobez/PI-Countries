import React from 'react'
import { s } from './card.module.css'
import { Link } from 'react-router-dom'

export const CardCountry = (props) => {
    let { ID, nombre, continente, bandera } = props.country
    return (
        <div className={s.divCard}>
            <Link to={`detalle/${ID}`} >

                <img  className={s.cardImg} src={bandera} alt={`bandera de ${nombre}`} />
                <h4 className='input' >{nombre}</h4>
                <h5 className='span1 input'>{continente}</h5>
            </Link>
        </div>
    )
}
