import app from './app';
// import database from './database';
const conectDB = require('./config/db')
const port = process.env.PORT || 3300;

conectDB()

app.listen(port,()=>{
    console.log('Server listen on port '+port)
});
// este archivo sirve para desplegar el servidor y ejecuta la conexión a la base de datos