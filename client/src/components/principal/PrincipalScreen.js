import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllCountrys, getNameCountrys, setPage } from "../../actions";
import { Filter } from "./Filter";


export const PrincipalScreen = () => {

    const currentPage = useSelector(state => state.currentPage);
    const allCountrys = useSelector(state => state.allCountrys)
    const [ciudad, setCiudad] = useState('')
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCountrys())

    }, [dispatch])

    useEffect(() => {
        dispatch(setPage(1))
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
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    type='text'
                    placeholder='Ciudad...'
                    name='buscar'
                    id="searchCiudad"
                    autoComplete="off"
                    value={ciudad}
                    onChange={(e) => handleChange(e)}
                />
                <input type='submit' value='Buscar' />
            </form>
            
            <Filter />

            <div>
                {
                    currentPage.map(x =>
                        <Link to={`detalle/${x.ID}`} key={x.ID}>
                            <div>
                                <img src={x.bandera} alt={`bandera de ${x.nombre}`} />
                                <h4>{x.nombre}</h4>
                                <h5>{x.continente}</h5>
                            </div>
                        </Link>
                    )
                }
                {/* <Link to={`detalle/${'COL'}`}>
                    <div>
                        <img src={'https://restcountries.eu/data/col.svg'} alt={`bandera de ${'nombre'}`} />
                        <h4>{'nombre'}</h4>
                        <h5>{'continente'}</h5>
                    </div>
                </Link> */}
            </div>

            PrincipalScreen
        </>
    )
}
