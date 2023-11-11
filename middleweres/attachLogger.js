const LoggerService = require("../services/loggerService");
const dotenv = require('dotenv')

dotenv.config()

console.log(process.env.MODE)

const logger = new LoggerService(process.env.MODE)



const attachLogger = (req, res, next) => {
    req.logger = logger.logger
    console.log(logger)
    req.logger.http(`${req.method} en ${req.url} - ${new Date().toLocaleTimeString()}`)
    next()
}

module.exports = attachLogger