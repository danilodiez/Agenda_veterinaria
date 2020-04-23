//Configuracion del backend y el servidor

const express = require('express')
const app = express()
const port = 4000


const routes = require('./routes')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cors = require('cors');

//Habilitar CORS
app.use(cors());

//Habilitar BD

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/veterinaria',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify: false
});

//HAbilitar body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))


//Habilitar routing
app.use('/', routes())


//puerto y arranque de servidor
app.get('/', (req, res) => {
    
    res.send('Hello World!')

})


app.listen(port, () => console.log(`Servidor funcionando`))