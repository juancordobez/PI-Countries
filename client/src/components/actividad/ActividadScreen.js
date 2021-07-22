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
        dispatch( getAllCountrys() )
        
    }, [dispatch])


    const [state, setState] = useState({
        name: '',
        dificultad: 1,
        duracion: 1,
        temporada: '',
        imagen: '',
        pais: []
    })

    const handleChange = (e) => {
        if (e.target.name === 'pais') {
            console.log(e.target.value);
            if(state.pais.includes(e.target.value)){
                setState({
                    ...state,
                    pais: state.pais.filter( x => x !== e.target.value )
                })
            } else {
                setState({
                    ...state,
                    pais: [ ...state.pais, e.target.value ]
                })
            }
        } else {
            setState({
                ...state,
                [e.target.name]: e.target.value
            })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(state);
    }

    return (
        <div>

            <form className='form' onSubmit={(e) => { handleSubmit(e) }}>

                <div className=''>

                    <label className=''>
                        Nombre de actividad*:

                        <input
                            name="name"
                            className='imput'
                            onChange={(e) => { handleChange(e) }}
                            value={state.name}
                            placeholder="Paris city tour"
                        />
                    </label>
                    <span className={state.name.length > 20 ? 'alert' : 'disabled'}> Maximo 20 caracteres</span>

                </div>

                <div className=''>

                    <label className='' >
                        Dificultad*:

                        <select
                            name="dificultad"
                            onChange={(e) => { handleChange(e) }}
                            value={state.dificultad}
                            className='imput'
                        >

                            <option value='1'>1 </option>

                            <option value='2'>2 </option>

                            <option value='3'>3 </option>

                            <option value='4'>4 </option>

                            <option value='5'>5 </option>

                        </select>
                    </label>

                </div>

                <div className=''>

                    <label className=''>
                        Duracion*:

                        <input
                            name="duracion"
                            type="number"
                            onChange={(e) => { handleChange(e) }}
                            value={state.duracion}
                            className='input'
                        // id={styles.lengthBox}
                        /> Horas
                    </label>

                </div>

                <div className=''>

                    <label className='' >
                        Temporada*:

                        <select
                            name="temporada"
                            onChange={(e) => { handleChange(e) }}
                            value={state.temporada}
                            className='imput'
                        >
                            {/* // 'Verano', 'Otoño', 'Invierno', 'Primavera' */}
                            <option value="Verano">'Verano'</option>

                            <option value="Otoño">Otoño</option>

                            <option value="Invierno">Invierno</option>

                            <option value="Primavera">Primavera</option>

                        </select>
                    </label>

                </div>

                <div className=''>

                    <label className='' >
                        Paises:

                        <select
                            name="pais"
                            multiple
                            onChange={(e) => { handleChange(e) }}
                            value={state.pais}
                            className='imput'
                            id=''
                        >
                            <option value=''>Selecciona paises</option>
                            {
                                allCountrys.map((country) =>
                                    <option key={country.ID} value={country.ID}>{country.nombre}</option>
                                )
                            }

                        </select>
                    </label>

                </div>

                <span className=''>(*) Input obligatorio</span>

                <input type='submit' value='Subir' />

            </form>

        </div>
    )
}
