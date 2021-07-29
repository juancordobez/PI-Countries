import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from "react-redux";
import { getActividades, ordenarAllCountrys, filrer, setPage } from "../../actions";


export const FilterOrden = () => {

    const [form, setForm] = useState({
        orden: 'Nombre A-Z',
        continente: '',
        actividades: ''
    })
    const actividades = useSelector(state => state.actividades);
    const allCountrys = useSelector(state => state.allCountrys)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getActividades())
    }, [dispatch])

    useEffect(() => {
        setForm({
            
            orden: 'Nombre A-Z',
            continente: '',
            actividades: ''
        })
    }, [allCountrys])

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    
    const handleSubmit = e => {
        e.preventDefault()
        console.log(form);
        dispatch(ordenarAllCountrys( form.orden ))
        dispatch( filrer( form.continente, form.actividades))
        dispatch( setPage() )
    } 

    return (
        <div className='row wrap'>

            <form className='form' onSubmit={handleSubmit}>
                <label className='input row wrap'>
                    Orden
                    <select className='input' name='orden' value={form.orden} onChange={handleChange}>
                        <option value='Nombre A-Z' >Nombre A-Z</option>
                        <option value='Nombre Z-A' >Nombre Z-A</option>
                        <option value='Poblacion Acendente'>Poblacion Acendente</option>
                        <option value='Poblacion Decendente'>Poblacion Decendente</option>
                    </select>
                </label>
            
                <label className='input row wrap'>
                    Filtros
                    {/* <label className='input'> */}

                    <select className='input' name="continente" value={form.continente} onChange={handleChange}>
                        <option value="" >Todos</option>
                        <option value="Africa" >Africa</option>
                        <option value="Americas">Americas</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                        <option value="Polar">Polar</option>
                    </select>
                    {/* </label>
                    <label className='input row nowrap'> */}
                        
                    <select className='input' name="actividades" value={form.actividades} onChange={handleChange}>
                        <option value="" >Todos</option>

                        {
                            actividades.map((x) => <option value={x.id} key={x.id}>{x.name}</option>)
                        }

                    </select>
                    {/* </label> */}
                </label>

                <input className='input' type='submit' value='Aplicar'/>
            </form>
        </div>
    )
}
