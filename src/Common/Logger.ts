import {Logger, transports} from 'winston';

// Logger with winston
export default new (Logger)({
  transports: [
    new (transports.Console)({ json: false, timestamp: true }),
    new transports.File({ filename: (process.env.LOG_DIR || __dirname) + '/debug.log', json: false })
  ],
  exceptionHandlers: [
    new (transports.Console)({ json: false, timestamp: true }),
    new transports.File({ filename: (process.env.LOG_DIR || __dirname) + '/exceptions.log', json: false })
  ],
  exitOnError: false
});