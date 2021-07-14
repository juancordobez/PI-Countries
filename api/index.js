//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { Country, Actividad } = require('./src/db.js');
// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, async () => {

    // const country = await Country.create({
    //   id: 'asd',
    //   name: 'Prueba',
    //   imagen: 'https://vimeo.com/user/112886970/folder/4311510',
    //   continentes: 'americas',
    //   capital: 'capital',
    // })

    await Actividad.create({
      name: 'Prueba Actividad',
      dificultad: 3,
      duracion: 2,
      temporada: 'Invierno',
    })
    
    // country.addActividad(actividad)

    
    

    console.log('%s listening at 3001'); // eslint-disable-line no-console

  });
});
