const express = require('express')

const testRouter = express.Router()

testRouter.get('/', (req, res) =>{
    console.log('hola')
    /* 
     levels: {
      error: 0,
      warn: 1,
      info: 2,
      http: 3,
      verbose: 4,
      debug: 5,
      silly: 6
    },
    */
    req.logger.error('Prueba de un error')
    req.logger.warn('Prueba de una advertencia')
    req.logger.info('Prueba de un mensaje informativo')
    req.logger.http('Prueba de un log HTTP')
    req.logger.verbose('Prueba de un log Verboso')
    req.logger.debug('Prueba de un log de depuracion')
    req.logger.silly('Prueba de un log silly')
    res.send({ok:true})
})

module.exports = testRouter