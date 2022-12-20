const express = require('express');
const app = express();


//settings

app.set('port', process.env.PORT || 5000);

//middlewares
app.use(express.json());

app.use(express.urlencoded({extended:false}));

app.use(require('./src/routes'));

app.listen(app.get('port'),()=>{
  console.log('server on port', app.get('port'))
})