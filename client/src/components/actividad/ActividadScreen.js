import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { } from "../../actions/index";
// Ruta de creación de actividad turística: debe contener

//  Un formulario controlado con los siguientes campos
// Nombre
// Dificultad
// Duración
// Temporada
//  Posibilidad de seleccionar/agregar varios países en simultaneo
//  Botón/Opción para crear una nueva actividad turística

export const ActividadScreen = () => {
    const [state, setState] = useState({
        name: '',
        dificultad: 1,
        duracion: 1,
        temporada: '',
        imagen: '',
        pais: []
    })

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () => {
        
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
                    </label>

                    <input
                        name="duracion"
                        type="number"
                        onChange={(e) => { handleChange(e) }}
                        value={state.duracion}
                        className='imput'
                        // id={styles.lengthBox}
                    />

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

                {/* <div className=''>

                    <label className='' >
                        Paises:

                    <select
                        name="pais"
                        multiple
                        onChange={(e) => { handleChange(e) }}
                        value={countries}
                        className='imput'
                        id=''
                        >

                        {
                            allCountries?.map((country) =>
                            <option key={country.name} value={country.name}>{country.name}</option>
                            )
                        }

                    </select>
                        </label>

                </div> */}

                {/* <div className=''>

                    <label className=''>
                        Image:
                    </label>

                    <input
                        name="image"
                        className='imput'
                        onChange={(e) => { handleChange(e) }}
                        value={state.image}
                        placeholder="INSERT URL"
                    />

                </div>

                <span className={validateUrl(state.image) ? styles.alert : 'disabled'}> you must enter an image url</span> */}

                {/* <div className={styles.buttonContainer}>

                    <button className='homeButton' onClick={(e) => { clearCountries(e) }}>Reset countries</button>

                    <button className='homeButton' onClick={(e) => { clearAll(e) }}>Reset all</button>

                    <button className={state.description.length > 140 || state.name.length > 20 === true || validateUrl(state.image) ? 'disabled' : 'orangeButton'} type="submit">Add activity</button>

                </div> */}

                {/* {
                    response.data === "Activity created" ?
                        <span className={styles.success}>{response.data}</span> :
                        <span className={styles.error}>{response.data}</span>
                } */}

                <span className=''>(*) Input obligatorio</span>

            </form>

        </div>
    )
}
