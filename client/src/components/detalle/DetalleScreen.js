import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export const DetalleScreen = () => {
    const [detalles, setDetalles] = useState()
    const { idPais } = useParams();

    const getDetalles = async (id) => {
        let resp = await fetch(`http://localhost:3001/countries/${id}`)
        let data = await resp.json()
        setDetalles(data)
    }
    useEffect(() => {
        getDetalles(idPais)
    }, [idPais])



    return (
        <div>
            {console.log(detalles)}
        </div>
    )
}
