const mongoose = require('mongoose');
const log = require('lib/log');

const {
      MONGO_URI : mongoURI
} = process.env;

module.exports = (function() {
      mongoose.Promise = global.Promise;
      return {
            connect(){
                  return mongoose.connect(mongoURI)
                  .then(()=>{
                        log.info('Successfully connected to mongodb');
                  }).catch( e => {
                        log.error(e);
                  });
            },
            disconnect (){
                  return mongoose.disconnect()
                  .then(()=> {
                        log.info('Successfully disconnected to mongodb');
                  }).catch( e=> {
                        log.error(e);
                  });
            }
      };
})();