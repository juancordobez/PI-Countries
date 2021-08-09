import React from 'react'

export const AboutScreen = () => {
    return (
        <div>
            <h1>Proyecto individual de bootcamp Henry</h1>
            <h3>Objetivos del proyecto</h3>
            <li>
                <ul>Construir una App utlizando React, Redux, Node y Sequelize.</ul>
                <ul>Afirmar y conectar los conceptos aprendidos en la carrera.</ul>
                <ul>Aprender mejores prácticas.</ul>
                <ul>Aprender y practicar el workflow de GIT.</ul>
                <ul>Usar y practicar testing.</ul>
            </li>

            <h4>Enunciado</h4>
            <p>La idea general es crear una aplicación en la cual se pueda ver información de distintos paises utilizando la api externa restcountries y a partir de ella poder, entre otras cosas:</p>
            <li>
                <ul>Buscar paises</ul>
                <ul>Filtrarlos / Ordenarlos</ul>
                <ul>Crear actividades turísticas</ul>
            </li>
            
        </div>
    )
}
