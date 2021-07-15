import React from 'react';
import { Link } from "react-router-dom";


export const InicialScreen = () => {
    return (
        <div>
            <h2>COUNTRI APP</h2>
            <p>
                A continuación se detallaran los requerimientos
                mínimos para la aprobación del proyecto individial.
                Aquellos que deseen agregar más funcionalidades podrán
                hacerlo. En cuanto al diseño visual no va a haber wireframes
                ni prototipos prefijados sino que tendrán libertad de hacerlo
                a su gusto pero tienen que aplicar los conocimientos de estilos
                vistos en el curso para que quede agradable a la vista.
            </p>
            <Link to='/principal'>Home</Link>
        </div>
    )
}
