const spawn = require('child_process');
const c = spawn.fork('compute.js');

c.send('message');

c.on('message', (message)=> {
    console.log(message);
    process.exit();
})

