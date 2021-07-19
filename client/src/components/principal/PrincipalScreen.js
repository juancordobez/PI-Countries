import React from 'react';
import { Link } from "react-router-dom";


export const PrincipalScreen = () => {
    return (
        <>
            <form>
                <input type='text' placeholder='ciudad' name='buscar' />
                <input type='submit' value='Buscar' />
            </form>
            <form>
                <select name="continentes">
                    <option value="value1" selected>All continents</option>
                    <option value="value2" >Value 2</option>
                    <option value="value3">Value 3</option>
                </select>
                <select name="orden">
                    <option value="value1" selected>Name A-Z</option>
                    <option value="value2" >Value 2</option>
                    <option value="value3">Value 3</option>
                </select>
                <select name="actividad">
                    <option value="value1" selected>All activities</option>
                    <option value="value2" >Value 2</option>
                    <option value="value3">Value 3</option>
                </select>
                <input type='submit' value='Buscar' />
            </form>
            <div>

                <Link to={`detalle/${'COL'}`}>
                    <div>
                        <img src={'https://restcountries.eu/data/col.svg'} alt={`bandera de ${'nombre'}`} />
                        <h4>{'nombre'}</h4>
                        <h5>{'continente'}</h5>
                    </div>
                </Link>
            </div>

            PrincipalScreen
        </>
    )
}
