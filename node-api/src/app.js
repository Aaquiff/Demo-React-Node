var app = require('express') ();


app.get('/',(req,res)=> {
    res.send('test');
})

app.listen(8080,(err) => {
    if(err)
    {
        console.err(err);
        process.exit(-1);
    }
    console.log('listening to port 8080')
        
})