'use strict'

const app = require('express') ();
const bodyParser = require('body-parser');
const routes = require('./routes');
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes);

app.listen(PORT,(err) => {
    if(err)
    {
        console.err(err);
        process.exit(-1);
    }
    console.log('listening to port ' + PORT)
        
})