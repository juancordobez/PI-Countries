const { Router } = require('express');
const fetch = require('node-fetch');
const { activityForm } = require('../helpers/queries');


const activityRouter = Router();

activityRouter.post('/', async (req, res, next) => {
    
    const respuesta = await activityForm(req.body)
    res.status(200).send(respuesta)
})

module.exports = activityRouter;
