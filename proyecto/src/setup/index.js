const sequelize = require('../config/db');

;
'use strict'
require('../config/db')
const app = require('./app'),
      port =   process.env.PORT || 3500

      app.listen(port, function () {
          console.log(`Servidor funcionando en ${port}` );

        sequelize.sync({ force: true }).then(() => {
            console.log("Base de Datos Conectada");
        }).catch(error => {
            console.log(error); 
        })

      })