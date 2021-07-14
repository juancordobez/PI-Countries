const { Router } = require('express');
const fetch = require('node-fetch');
const { countryFindAll, paisDetalle, nameFind } = require('../helpers/queries');


const countriesRouter = Router();

countriesRouter.get('/', async (req, res, next) => {
    let { name } = req.query
    if(name){
        let country = await nameFind(name);
        res.status(200).send(country.length ? country : [{msj: 'No se encontraron  paises'}])
    }else{
        const all = await countryFindAll();
        res.status(200).send(all)
    }
})

countriesRouter.get('/:idPais', async (req, res, next) => {

    let {idPais} = req.params
    let all = await paisDetalle(idPais)
    res.status(200).send(all)
})
module.exports = countriesRouter;
