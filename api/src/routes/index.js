const { Router } = require('express');
const countriesRouter = require('./countriesRouter')
const activityRouter = require('./activityRouter')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/countries', countriesRouter)
router.use('/activity', activityRouter)

module.exports = router;
