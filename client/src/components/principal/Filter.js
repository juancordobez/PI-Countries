import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from "react-redux";
import { getActividades } from "../../actions";


export const Filter = () => {

    const actividades = useSelector(state => state.actividades);
    // const allCountrys = useSelector(state => state.allCountrys)
    const [state, setstate] = useState(initialState)
    
    
    // const [ciudad, setCiudad] = useState('')
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( getActividades() )
    }, [dispatch])


    return (
        <form>
            <select name="orden" defaultValue='value1'>
                <option value="value1" >Nombre A-Z</option>
                <option value="value2" >Nombre A-Z</option>
                <option value="value3">Poblacion Acendente</option>
                <option value="value3">Poblacion Decendente</option>
            </select>

            <select name="continente" defaultValue='All'>
                <option value="All" >All continents</option>
                <option value="Africa" >Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
                <option value="Polar">Polar</option>
            </select>
            <select name="actividad" defaultValue='All'>
            <option value="All" >All activities</option>

            {
                actividades.map((x) => <option value={x.id} key={x.id}>{x.name}</option>)
            }
               
            </select>
        </form>
    )
}
