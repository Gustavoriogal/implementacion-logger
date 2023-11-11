const winston  = require('winston')

class LoggerService {
    constructor(env){

        this.logger = this.createLogger(env)
    }

    createLogger (env) {
        switch(env){
            case 'production':
                
                return winston.createLogger({
                    transports: [
                    new winston.transports.Console({
                        level: 'info'
                    }),
                    new winston.transports.File({
                        level: 'error',
                        filename: './errorsProduction.log'
                    })
                    ]
                })

            case 'development':
                return winston.createLogger({
                    transports: [
                    new winston.transports.Console({
                        level: 'debug'
                    }),
                    new winston.transports.File({
                        level: 'error',
                        filename: './errorsDevelopment.log'
                    })
                    ]
                })

        }
    }
}


module.exports = LoggerService