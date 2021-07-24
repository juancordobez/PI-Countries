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
    const handleSubmit = async(e) => {
        e.preventDefault()
        await fetch('http://localhost:3001/activity', {
            method: 'post',
            body:    JSON.stringify(state),
            headers: { 'Content-Type': 'application/json' },
        })
        console.log('A=>',state);
    }

    return (
        <div>

            <form className='form' onSubmit={e => handleSubmit(e)}>

                <div className=''>

                    <label className=''>
                        Nombre de actividad*:

                        <input
                            name="name"
                            className='imput'
                            onChange={handleChange}
                            value={state.name}
                            placeholder="actividad"
                        />
                    </label>
                    <span className={state.name.length > 20 ? 'alert' : 'disabled'}> Maximo 20 caracteres</span>

                </div>

                <div className=''>

                    <label className='' >
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

                </div>

                <div className=''>

                    <label className=''>
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

                </div>

                <div className=''>

                    <label className='' >
                        Temporada*:

                        <select
                            name="temporada"
                            onChange={handleChange}
                            value={state.temporada}
                            className='imput'
                        >
                            {/* // 'Verano', 'Otoño', 'Invierno', 'Primavera' */}
                            <option value="Verano">Verano</option>

                            <option value="Otoño">Otoño</option>

                            <option value="Invierno">Invierno</option>

                            <option value="Primavera">Primavera</option>

                        </select>
                    </label>

                </div>

                <div className=''>

                    <label className='' >
                        Selecciona paises:
                        <input
                            className='input'
                            onChange={handleChangeNamePais}
                            value={namePais}
                            placeholder="Buscar pais"
                        />

                        <li>
                            {
                                allCountrys.filter( x => x.nombre.includes(namePais)).map(x => 
                                    <ul key={x.ID}>
                                        <span>{x.nombre}</span>
                                        <button type='button' value={x.ID} name="pais" onClick={handleChange}>
                                            {state.pais.includes(x.ID) ? 'Quitar' : 'Agregar'}
                                        </button>
                                    </ul>
                                )
                            }
                        </li>
                        
                    </label>

                </div>

                <span className=''>(*) Input obligatorio</span>

                <input type='submit' value='Subir' />

            </form>

        </div>
    )
}
