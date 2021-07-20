import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from "react-redux";
import { getActividades } from "../../actions";


export const Filter = () => {

    const actividades = useSelector(state => state.actividades);
    // const allCountrys = useSelector(state => state.allCountrys)
    // const [state, setstate] = useState(initialState)


    // const [ciudad, setCiudad] = useState('')
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getActividades())
    }, [dispatch])


    return (
        <div>

            <form>
                <select name="orden" defaultValue={['nombre', false]}>
                    <option value={['nombre', false]} >Nombre A-Z</option>
                    <option value={['nombre', true]} >Nombre A-Z</option>
                    <option value={['poblacion', false]}>Poblacion Acendente</option>
                    <option value={['poblacion', true]}>Poblacion Decendente</option>
                </select>
            </form>
            <form>
                <select name="continente" defaultValue='All'>
                    <option value="All" >Select continents</option>
                    <option value="Africa" >Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                    <option value="Polar">Polar</option>
                </select>
                <select name="actividad" defaultValue='All'>
                    <option value="All" >Select activities</option>

                    {
                        actividades.map((x) => <option value={x.id} key={x.id}>{x.name}</option>)
                    }

                </select>
            </form>
        </div>
    )
}
