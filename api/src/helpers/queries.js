// const { conn } = require('../db.js');
const { Op } = require('sequelize');
const { Country, Actividad } = require('../db');
const fetch = require('node-fetch');


const countryFindAll = async () => {
    try {
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

        await countries[0].addActividad(1)

        for (let x of countries) {
            let actividad = await x.getActividads()
            x.dataValues.actividades = actividad.map( x => x.dataValues.id )
        }

        return countries

    } catch (error) {
        console.log(error);
    }
    
    
}

const paisDetalle = async (idPais) => {
    try {
        let country = await Country.findByPk(idPais)
        let actividades = await country.getActividads()
        return { country, actividades }
    } catch (error) {
        console.log(error);
    }
}

const nameFind = async ( name ) => {
    try {
        name = name[0].toUpperCase() + name.slice(1)
    
        let countries = await Country.findAll({
            attributes: [ 'ID', 'nombre', 'bandera', 'continente', 'poblacion' ],
            where: {
                nombre: {
                    [Op.startsWith]: name
                }
            }
        })
        
        for (let x of countries) {
            let actividad = await x.getActividads()
            x.dataValues.actividades = actividad.map( x => x.dataValues.id )
        }
        return countries
        
    } catch (error) {
        console.log(error);
    }
}

const activityForm = async ( body ) => {
    try {
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
        
    } catch (error) {
        console.log(error);
    }
}
const getActividades = async () => {
    try {
        let actividades = await Actividad.findAll({
            attributes: [ 'id', 'name' ]
        });
        return actividades
        
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    countryFindAll,
    paisDetalle,
    nameFind,
    activityForm,
    getActividades
}