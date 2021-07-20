const { Router } = require('express');
const fetch = require('node-fetch');
const { activityForm, getActividades } = require('../helpers/queries');


const activityRouter = Router();

activityRouter.post('/', async (req, res, next) => {
    
    const respuesta = await activityForm(req.body)
    res.status(200).send(respuesta)
})

activityRouter.get('/', async (req, res, next) => {
    
    const respuesta = await getActividades()
    res.status(200).send(respuesta)
})


module.exports = activityRouter;
