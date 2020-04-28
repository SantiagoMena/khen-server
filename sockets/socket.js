const { io } = require('../bin/www');

io.on('connection', client => {
    console.log('Client Online', client);
});

