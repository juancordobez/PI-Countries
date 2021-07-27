import React from 'react';
import { Link } from "react-router-dom";


export const InicialScreen = () => {
    return (
        <div className='divCard'>
            <h2 className='input'>COUNTRI APP</h2>
                <Link className='btn ' to='/principal'>Home</Link>
        </div>
    )
}
