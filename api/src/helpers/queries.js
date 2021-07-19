// const { conn } = require('../db.js');
const { Op } = require('sequelize');
const { Country, Actividad } = require('../db');
const fetch = require('node-fetch');


const countryFindAll = async () => {

    let countries = await Country.findAll({
        attributes: [ 'ID', 'nombre', 'bandera', 'continente', 'poblacion' ]
    });

    if(!countries.length){
        let all = await fetch('https://restcountries.eu/rest/v2/all');

        all = await all.json()

        all =  all.map( x => {
            return   {
                ID: x.alpha3Code,
                nombre: x.name,
                bandera: x.flag,
                continente: x.region,
                capital: x.capital,
                subregion: x.subregion,
                area: x.area,
                poblacion: x.population
            }
        })

        await Country.bulkCreate(all);

        countries = await Country.findAll({
            attributes: [ 'ID', 'nombre', 'bandera', 'continente', 'poblacion' ]
        });
    }
    return countries
    
    
}

const paisDetalle = async (idPais) => {
    let country = await Country.findOne({
        where: {
            ID: idPais 
        }
    })
    let actividades = await country.getActividads()
    return { country, actividades }
}

const nameFind = async ( name ) => {
    name = name[0].toUpperCase() + name.slice(1)

    let country = await Country.findAll({
        where: {
            
            nombre: {
                [Op.startsWith]: name
            }
        }
    })
    console.log(country);
    return country
}

const activityForm = async ( body ) => {
    let {name,
        dificultad,
        duracion,
        temporada,
        imagen,
        pais} = body;

    let  actividad = await Actividad.create({
        name,
        dificultad,
        duracion,
        temporada,
        imagen,
    })
    let actividades = await actividad.addCountry(pais)

    return { actividad, actividades }
}

module.exports = {
    countryFindAll,
    paisDetalle,
    nameFind,
    activityForm
}