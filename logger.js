const EventEmitter = require('events');
const uuid = require('uuid');

class Logger extends EventEmitter {
    log(msg) {
        this.emit('message', { id: uuid.v4(), msg });
    }
}

//module.exports = Logger;
const Logger = require('./logger');

const logger = new Logger();

logger.on('message', (data) => console.log('called listener', data));

logger.log('KUA Thunai');
logger.log('Kaneeshka - Kaari');
logger.log('Priya');
