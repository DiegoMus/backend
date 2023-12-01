const express = require('express')
const app = express();
const port =3001;
const morgan = require('morgan');

app.use(morgan('dev'));
app.set('json spaces', 2);
app.use(express.urlencoded({extended: false}));
app.use(express.json());



//Rutas get
app.use(require('./routes/index'));
app.use('/api/usuarios',require('./routes/usuarios'));



app.listen(port,() =>{
    console.log(`exoample listen on port ${port}`)
})