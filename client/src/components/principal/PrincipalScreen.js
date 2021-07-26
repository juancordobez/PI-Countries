import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllCountrys, getNameCountrys, setPage } from "../../actions";
import { FilterOrden } from "./FilterOrden";
import { Pagination } from "./Pagination";


export const PrincipalScreen = () => {

    const currentPage = useSelector(state => state.currentPage);
    const allCountrys = useSelector(state => state.allCountrys)
    const [ciudad, setCiudad] = useState('')
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCountrys())

    }, [dispatch])

    useEffect(() => {
        dispatch(setPage())
    }, [dispatch, allCountrys])

    const handleChange = (e) => {
        console.log(e.target.value);
        setCiudad(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(ciudad);
        dispatch(getNameCountrys(ciudad))
    }

    return (
        <>
            <form className='form' onSubmit={(e) => handleSubmit(e)}>
                <input
                className='input'
                    type='text'
                    placeholder='Ciudad...'
                    name='buscar'
                    id="searchCiudad"
                    autoComplete="off"
                    value={ciudad}
                    onChange={(e) => handleChange(e)}
                />
                <input className='btn' type='submit' value='Buscar' />
            </form>
            
            <FilterOrden />

            <div className='column wrap flex'>
                {
                    currentPage.map(x =>
                        <Link to={`detalle/${x.ID}`} key={x.ID}>
                            <div className='divCard flex'>
                                <img className='cardImg' src={x.bandera} alt={`bandera de ${x.nombre}`} />
                                <h4 className='titulo' >{x.nombre}</h4>
                                <h5 className='span1'>{x.continente}</h5>
                            </div>
                        </Link>
                    )
                }
                
            </div>

            <Pagination />
            PrincipalScreen
        </>
    )
}
