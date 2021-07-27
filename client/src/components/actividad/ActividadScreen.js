import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getAllCountrys } from "../../actions/index";
// Ruta de creación de actividad turística: debe contener

//  Un formulario controlado con los siguientes campos
// Nombre
// Dificultad
// Duración
// Temporada
//  Posibilidad de seleccionar/agregar varios países en simultaneo
//  Botón/Opción para crear una nueva actividad turística

export const ActividadScreen = () => {

    const allCountrys = useSelector(state => state.allCountrys)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllCountrys())
    }, [dispatch])


    const [state, setState] = useState({
        name: '',
        dificultad: 1,
        duracion: 1,
        temporada: 'Verano',
        // imagen: '',
        pais: []
    })

    const [namePais, setNamePais] = useState('')

    const handleChange = (e) => {
        let { name, value } = e.target;
        console.log(value);
        if (name === 'pais') {
            if (state.pais.includes(value)) {
                setState({
                    ...state,
                    pais: state.pais.filter(x => x !== value)
                })
            } else {
                setState({
                    ...state,
                    pais: [...state.pais, value]
                })
            }
        } else {
            setState({
                ...state,
                [name]: value
            })
        }
    }

    const handleChangeNamePais = (e) => {
        let { value } = e.target
        let str = value ? value[0].toUpperCase() + value.slice(1) : '';
        setNamePais(str)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        await fetch('http://localhost:3001/activity', {
            method: 'post',
            body: JSON.stringify(state),
            headers: { 'Content-Type': 'application/json' },
        })
        console.log('A=>', state);
    }

    return (
        <div className=''>

            <form className='form row' onSubmit={e => handleSubmit(e)}>

                <div className='column'>

                    <label className='input row'>
                        Nombre de actividad*:

                        <input
                            name="name"
                            className='input'
                            onChange={handleChange}
                            value={state.name}
                            placeholder="actividad"
                        />
                    </label>
                    <span className={state.name.length > 20 ? 'alert' : 'disabled'}> Maximo 20 caracteres</span>

                    <label className='input row' >
                        Dificultad*:

                        <input

                            type="range"
                            min='1'
                            max='5'
                            name="dificultad"
                            value={state.dificultad}
                            onChange={handleChange}
                        />

                    </label>

                    <label className='input row'>
                        Duracion*:

                        <input
                            name="duracion"
                            type="number"
                            onChange={handleChange}
                            value={state.duracion}
                            className='input'
                            min="1"
                        />

                        Horas
                    </label>

                    <label className='input row' >
                        Temporada*:

                        <select
                            name="temporada"
                            onChange={handleChange}
                            value={state.temporada}
                            className='input'
                        >
                            {/* // 'Verano', 'Otoño', 'Invierno', 'Primavera' */}
                            <option value="Verano">Verano</option>

                            <option value="Otoño">Otoño</option>

                            <option value="Invierno">Invierno</option>

                            <option value="Primavera">Primavera</option>

                        </select>
                    </label>

                </div>
                <div className='row wrap'>

                    <label className='input listDiv' >
                        
                        <input
                            className='input'
                            onChange={handleChangeNamePais}
                            value={namePais}
                            placeholder="Buscar pais"
                        />
                        {
                            state.pais.length
                                ?
                                <ul className='row wrap input'>
                                    {
                                        allCountrys.filter(x => state.pais.includes(x.ID)).map(x =>
                                            <li key={x.ID} className='row input'>
                                                <span className='input'>{x.nombre}</span>
                                                <button className='cardBtn' type='button' value={x.ID} name="pais" onClick={handleChange}>
                                                    -
                                                </button>
                                            </li>
                                        )
                                    }
                                </ul>
                                :
                                null
                        }

                        <ul className='row wrap'>
                            {
                                allCountrys.filter(x => x.nombre.includes(namePais) && !state.pais.includes(x.ID)).map(x =>
                                    <li key={x.ID} className='row input'>
                                        <span className='input'>{x.nombre}</span>
                                        <button className='cardBtn' type='button' value={x.ID} name="pais" onClick={handleChange}>
                                            +
                                        </button>
                                    </li>
                                )
                            }
                        </ul>

                    </label>

                </div>

                <span className='input span1'>(*) Input obligatorio</span>

                <input type='submit' value='Subir' className='btn'/>

            </form>

        </div>
    )
}
