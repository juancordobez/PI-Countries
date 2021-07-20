import React, { useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux";
import { getActividades, ordenarAllCountrys, setPage, filrer } from "../../actions";


export const Filter = () => {

    const actividades = useSelector(state => state.actividades);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getActividades())
    }, [dispatch])

    const handleChange = e => {
        dispatch(ordenarAllCountrys(e.target.value))
        dispatch(setPage())
    }

    const filterChange = e => {
        dispatch( filrer( e.target.value ))
    }

    return (
        <div>

            <form>
                <label>
                    Orden
                    < select defaultValue='Nombre A-Z' onChange={(e) => handleChange(e)}>
                        <option value='Nombre A-Z' >Nombre A-Z</option>
                        <option value='Nombre Z-A' >Nombre Z-A</option>
                        <option value='Poblacion Acendente'>Poblacion Acendente</option>
                        <option value='Poblacion Decendente'>Poblacion Decendente</option>
                    </select>
                </label>
            
                <label>
                    Filtros
                    <select name="continente" defaultValue='' onChange={(e) => filterChange(e)}>
                        <option value="" >Select continents</option>
                        <option value="Africa" >Africa</option>
                        <option value="Americas">Americas</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                        <option value="Polar">Polar</option>
                    </select>
                    <select name="actividades" defaultValue='' onChange={(e) => filterChange(e)}>
                        <option value="" >Select activities</option>

                        {
                            actividades.map((x) => <option value={x.id} key={x.id}>{x.name}</option>)
                        }

                    </select>
                </label>
            </form>
        </div>
    )
}
